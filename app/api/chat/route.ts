import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || '',
});

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { 
          message: "I'm currently in demo mode. To enable full AI capabilities, please configure the Groq API key. In the meantime, I can tell you that BunnyEra LLC offers cutting-edge AI-driven e-commerce solutions with features like intelligent inventory management, cross-border shipping optimization, and 24/7 automated customer service. How can I help you today?" 
        },
        { status: 200 }
      );
    }

    // System prompt for BunnyEra context
    const systemMessage = {
      role: 'system',
      content: `You are a helpful AI assistant for BunnyEra LLC, a US-based AI startup specializing in e-commerce solutions. 
      
Key information about BunnyEra:
- We provide high-performance AI engines for cross-border e-commerce operations
- Our solutions include intelligent automation, inventory management, and predictive analytics
- We offer 24/7 AI-powered customer service automation
- We specialize in multi-currency support and international shipping optimization
- Our platform provides real-time insights and analytics dashboards
- We focus on enterprise-grade security with bank-level encryption
- We deliver 99.9% uptime reliability and 10x faster processing speeds

Be professional, enthusiastic, and helpful. Answer questions about our services, AI technology, e-commerce solutions, and how we can help businesses scale globally. If asked about pricing or specific implementations, encourage them to contact our team for a customized solution.`
    };

    const chatCompletion = await groq.chat.completions.create({
      messages: [systemMessage, ...messages],
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 1024,
    });

    const assistantMessage = chatCompletion.choices[0]?.message?.content || 
      "I'm here to help! Please feel free to ask me anything about BunnyEra's e-commerce solutions.";

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { 
        message: "I apologize for the inconvenience. I'm experiencing technical difficulties. Please try again or contact us directly at info@bunnyera.com." 
      },
      { status: 200 }
    );
  }
}
