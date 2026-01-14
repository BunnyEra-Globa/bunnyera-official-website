import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

type ContactRequest = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

type ContactResponse = {
  success?: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message }: ContactRequest = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required fields' 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('bunnyera');
    const collection = db.collection('contacts');

    // Insert contact inquiry
    const result = await collection.insertOne({
      name,
      email,
      company: company || null,
      message,
      createdAt: new Date(),
      status: 'new',
    });

    if (result.acknowledged) {
      return res.status(200).json({ 
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.' 
      });
    } else {
      throw new Error('Failed to save contact inquiry');
    }
  } catch (error: any) {
    console.error('Contact API error:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to process contact request' 
    });
  }
}
