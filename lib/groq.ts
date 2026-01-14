import Groq from 'groq-sdk';

if (!process.env.GROQ_API_KEY) {
  throw new Error('Please add your Groq API key to .env.local');
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default groq;
