# BunnyEra Website - Setup Guide

This guide will help you set up and deploy the BunnyEra official website.

## Prerequisites

Before you begin, ensure you have:

1. **Node.js** (v18.x or later)
2. **npm** (comes with Node.js)
3. **MongoDB Atlas Account** (free tier available at https://www.mongodb.com/cloud/atlas)
4. **Groq API Key** (sign up at https://console.groq.com/)

## Step 1: Clone and Install

```bash
git clone https://github.com/BunnyEra-Globa/bunnyera-official-website.git
cd bunnyera-official-website
npm install
```

## Step 2: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier is sufficient for testing)
4. Click "Connect" on your cluster
5. Choose "Connect your application"
6. Copy the connection string (it looks like: `mongodb+srv://<username>:<password>@...`)
7. Replace `<username>` and `<password>` with your database credentials

### Database Setup

The application will automatically create:
- Database: `bunnyera`
- Collection: `contacts` (created automatically when first contact is submitted)

No manual database setup is required - MongoDB will create the collection on first use.

## Step 3: Get Groq API Key

1. Visit [Groq Console](https://console.groq.com/)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (starts with `gsk_`)

## Step 4: Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/bunnyera?retryWrites=true&w=majority

# Groq API Key
GROQ_API_KEY=gsk_your_actual_groq_api_key_here
```

**Important**: Never commit `.env.local` to version control. It's already in `.gitignore`.

## Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 6: Test the Features

### Test AI Chat
1. Scroll to "Experience Our AI Assistant" section
2. Click on a suggested question or type your own
3. Click "Send" to get an AI response

### Test Contact Form
1. Scroll to "Get In Touch" section
2. Fill in the form with:
   - Your name
   - Email address
   - Optional company name
   - Message
3. Click "Send Message"
4. Check MongoDB Atlas to see the saved inquiry

## Building for Production

```bash
npm run build
```

This creates an optimized production build in `.next` directory.

## Running Production Build Locally

```bash
npm run build
npm start
```

The production server will start at [http://localhost:3000](http://localhost:3000).

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the recommended deployment platform for Next.js applications.

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

4. Add environment variables in Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `MONGODB_URI` and `GROQ_API_KEY`

5. Redeploy if needed:
```bash
vercel --prod
```

### Alternative: Deploy to Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Netlify**: Use the Next.js plugin
- **Railway**: Supports Next.js out of the box
- **DigitalOcean App Platform**: Choose Node.js runtime
- **AWS Amplify**: Use the Next.js SSR preset

For all platforms, ensure you:
1. Set the build command: `npm run build`
2. Set the start command: `npm start`
3. Add environment variables: `MONGODB_URI` and `GROQ_API_KEY`

## Troubleshooting

### AI Chat Not Working

**Error**: "Failed to process chat request"

**Solutions**:
1. Verify your Groq API key is correct in `.env.local`
2. Check that you have API credits remaining
3. Ensure you're not rate-limited
4. Check browser console for specific errors

### Contact Form Not Saving

**Error**: "Failed to process contact request"

**Solutions**:
1. Verify MongoDB connection string is correct
2. Check that your MongoDB cluster is running
3. Verify your IP address is whitelisted in MongoDB Atlas:
   - Go to Network Access in MongoDB Atlas
   - Add your IP or use `0.0.0.0/0` for testing (not recommended for production)
4. Check MongoDB Atlas logs for connection issues

### Build Errors

**Error**: "Module not found" or TypeScript errors

**Solutions**:
1. Delete `node_modules` and `.next`:
```bash
rm -rf node_modules .next
npm install
npm run build
```

2. Ensure you're using Node.js 18 or later:
```bash
node --version
```

### Styling Issues

**Error**: Tailwind classes not applying

**Solutions**:
1. Ensure `@tailwindcss/postcss` is installed
2. Check that `postcss.config.js` is configured correctly
3. Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## Project Structure

```
bunnyera-official-website/
├── components/          # React components
│   ├── HeroSection.tsx     # Hero section with animated background
│   ├── AIChatDemo.tsx      # Interactive AI chat component
│   └── ContactForm.tsx     # Contact form with validation
├── lib/                 # Utility libraries
│   ├── mongodb.ts          # MongoDB client singleton
│   └── groq.ts             # Groq SDK client
├── pages/               # Next.js pages
│   ├── api/                # API routes
│   │   ├── chat.ts         # AI chat endpoint (POST)
│   │   └── contact.ts      # Contact form endpoint (POST)
│   ├── _app.tsx            # App wrapper
│   ├── _document.tsx       # HTML document template
│   └── index.tsx           # Homepage
├── public/              # Static assets
├── styles/              # Global styles
│   └── globals.css         # Tailwind CSS imports and custom styles
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
├── next.config.ts      # Next.js configuration
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment configuration
```

## API Endpoints

### POST /api/chat

Send messages to AI assistant.

**Request:**
```json
{
  "message": "What AI solutions does BunnyEra offer?",
  "history": [
    {"role": "user", "content": "Hello"},
    {"role": "assistant", "content": "Hi! How can I help?"}
  ]
}
```

**Response:**
```json
{
  "response": "BunnyEra offers comprehensive AI-driven e-commerce solutions..."
}
```

**Error Response:**
```json
{
  "error": "Failed to process chat request"
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
  "message": "I'm interested in your solutions"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon."
}
```

**Error Response:**
```json
{
  "error": "Name, email, and message are required fields"
}
```

## Security Notes

1. **Never commit sensitive data**: `.env.local` is in `.gitignore`
2. **API Keys**: Keep your Groq API key secret
3. **MongoDB**: Use strong passwords and whitelist only necessary IPs
4. **CORS**: API routes are configured for same-origin only
5. **Input Validation**: Both API routes validate inputs

## Performance Optimization

The application is optimized for performance:

- **Static Generation**: Homepage is pre-rendered at build time
- **Code Splitting**: Automatic code splitting by Next.js
- **Image Optimization**: Next.js Image component (add images to `/public`)
- **CSS**: Tailwind CSS purges unused styles in production
- **API Routes**: Serverless functions for scalability

## Monitoring

Consider adding monitoring for production:

1. **Vercel Analytics**: Built-in analytics if deployed to Vercel
2. **MongoDB Atlas Monitoring**: Track database performance
3. **Groq Dashboard**: Monitor API usage and costs
4. **Error Tracking**: Consider Sentry or similar service

## Support

For issues or questions:
- Email: info@bunnyera.com
- GitHub Issues: [Create an issue](https://github.com/BunnyEra-Globa/bunnyera-official-website/issues)

## License

See LICENSE file for details.
