# BunnyEra Official Website

The official global web presence of BunnyEra LLC. Showcasing our high-performance AI engines and intelligent automation solutions for cross-border e-commerce brand operations.

## Features

- 🎨 Modern, high-tech design with Tailwind CSS
- 🚀 Hero section showcasing AI-driven e-commerce engine
- 💬 Interactive AI chat demo powered by Groq SDK
- 📝 Contact form with MongoDB Atlas integration
- ⚡ Built with Next.js and TypeScript
- 🎯 Responsive and mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 18.x or later
- MongoDB Atlas account
- Groq API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BunnyEra-Globa/bunnyera-official-website.git
cd bunnyera-official-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `GROQ_API_KEY`: Your Groq API key

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
bunnyera-official-website/
├── components/          # React components
│   ├── HeroSection.tsx
│   ├── AIChatDemo.tsx
│   └── ContactForm.tsx
├── lib/                # Library utilities
│   ├── mongodb.ts      # MongoDB client
│   └── groq.ts         # Groq SDK client
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   │   ├── chat.ts    # AI chat endpoint
│   │   └── contact.ts # Contact form endpoint
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx      # Homepage
├── public/            # Static files
├── styles/            # Global styles
│   └── globals.css
└── ...
```

## API Routes

### POST /api/chat

Send messages to the AI assistant.

**Request:**
```json
{
  "message": "What AI solutions does BunnyEra offer?",
  "history": []
}
```

**Response:**
```json
{
  "response": "BunnyEra offers..."
}
```

### POST /api/contact

Submit contact inquiries.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Inc",
  "message": "I'm interested in your AI solutions"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us!"
}
```

## Technologies

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** Groq SDK (Mixtral-8x7b)
- **Database:** MongoDB Atlas
- **Deployment:** Vercel (recommended)

## License

See LICENSE file for details.

## Contact

For questions or support, please contact us through the website or at info@bunnyera.com.
