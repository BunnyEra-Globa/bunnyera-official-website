import type { NextApiRequest, NextApiResponse } from 'next';
import groq from '@/lib/groq';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

type ChatRequest = {
  message: string;
  history?: ChatMessage[];
};

type ChatResponse = {
  response?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history = [] }: ChatRequest = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Create messages array with system prompt and conversation history
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: `You are an AI assistant for BunnyEra LLC, a company specializing in AI-driven e-commerce solutions and intelligent automation for cross-border brand operations. You help users understand our technology, services, and how our AI engines can transform their e-commerce business. Be professional, knowledgeable, and helpful.`,
      },
      ...history,
      {
        role: 'user',
        content: message,
      },
    ];

    // Call Groq API
    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 1024,
    });

    const responseMessage = chatCompletion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return res.status(200).json({ response: responseMessage });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to process chat request' 
    });
  }
}
