import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if MongoDB URI is configured
    if (!process.env.MONGODB_URI) {
      console.warn('MongoDB URI not configured. Lead data:', { name, email, company, message });
      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact form submitted successfully (demo mode)' 
        },
        { status: 200 }
      );
    }

    // Connect to MongoDB
    await dbConnect();

    // Create new lead
    const lead = await Lead.create({
      name,
      email,
      company: company || '',
      message,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        leadId: lead._id 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact API Error:', error);
    
    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Please check your input and try again' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred while submitting the form' },
      { status: 500 }
    );
  }
}
