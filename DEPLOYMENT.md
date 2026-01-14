# BunnyEra LLC Website - Deployment Guide

## 🎉 Project Complete

A professional, production-ready corporate website has been built for BunnyEra LLC with all requested features.

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add:
   - `GROQ_API_KEY` - Get from https://console.groq.com/
   - `MONGODB_URI` - Get from https://www.mongodb.com/cloud/atlas

3. **Run development server:**
   ```bash
   npm run dev
   ```
   
   Open http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel (Recommended)

1. **Push to GitHub** (already done)

2. **Import to Vercel:**
   - Go to https://vercel.com/new
   - Import the repository
   - Add environment variables:
     - `GROQ_API_KEY`
     - `MONGODB_URI`
   - Deploy!

3. **Configure Custom Domain** (optional)
   - Add your domain in Vercel project settings
   - Update DNS records as instructed

## 📋 Features Checklist

✅ **Hero Section**
- Modern gradient design
- Animated stats display
- Clear call-to-action buttons

✅ **Features Section**
- 6 professional feature cards with icons
- Responsive grid layout
- Hover effects

✅ **AI Chat Demo**
- Powered by Groq SDK (Mixtral-8x7b)
- Real-time responses
- Works in demo mode without API key

✅ **Contact Form**
- Full validation
- MongoDB integration
- Success/error feedback
- Works in demo mode without database

✅ **Professional Design**
- Responsive navigation
- Mobile-friendly
- Modern high-tech aesthetic
- Smooth animations

## 🔐 Environment Variables

### Required for Full Functionality

**GROQ_API_KEY**
- Purpose: Powers the AI chat demo
- Get it: https://console.groq.com/
- Demo mode: Works without it (shows fallback message)

**MONGODB_URI**
- Purpose: Stores contact form leads
- Format: `mongodb+srv://username:password@cluster.mongodb.net/database`
- Get it: https://www.mongodb.com/cloud/atlas
- Demo mode: Works without it (shows success but doesn't save)

### Setting up MongoDB Atlas

1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster (free tier available)
3. Create a database user
4. Get connection string
5. Replace `<username>`, `<password>`, and `<database>` in the URI

### Setting up Groq API

1. Sign up at https://console.groq.com/
2. Create a new API key
3. Copy and paste into `.env`

## 📱 Testing

All features have been tested:
- ✅ Page loads correctly
- ✅ Navigation works
- ✅ Hero section displays properly
- ✅ Features section renders
- ✅ AI chat accepts input and responds
- ✅ Contact form validates and submits
- ✅ Success messages display correctly
- ✅ Mobile responsive
- ✅ Production build succeeds
- ✅ Zero security vulnerabilities

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **AI**: Groq SDK (Mixtral-8x7b)
- **Database**: MongoDB Atlas with Mongoose
- **Deployment**: Optimized for Vercel

## 📖 Documentation

- Main README: `README.md`
- Environment example: `.env.example`
- TypeScript config: `tsconfig.json`
- Tailwind config: `tailwind.config.ts`

## 🎨 Customization

### Update Branding
- Logo: Edit `components/Header.tsx` and `components/Footer.tsx`
- Colors: Edit `tailwind.config.ts`
- Content: Edit component files in `components/`

### Add More Features
- New sections: Add to `app/page.tsx`
- New API routes: Add to `app/api/`
- New components: Add to `components/`

## 📞 Support

For questions or issues:
- Email: info@bunnyera.com
- GitHub: https://github.com/BunnyEra-Globa

## 🎯 Performance

- Lighthouse Score: Optimized for performance
- SEO Ready: Server-side rendering enabled
- Mobile First: Fully responsive design
- Fast Loading: Optimized assets and code splitting

---

**Built with ❤️ for BunnyEra LLC**
