# BunnyEra LLC - Official Website

The official global web presence of BunnyEra LLC. A modern, professional corporate website showcasing our high-performance AI engines and intelligent automation solutions for cross-border e-commerce brand operations.

## 🚀 Features

- **Modern Hero Section**: Eye-catching hero with AI-driven e-commerce messaging
- **Interactive AI Chat Demo**: Live chat demo powered by Groq SDK for lightning-fast AI responses
- **Contact Form with MongoDB**: Lead capture system that saves data to MongoDB Atlas
- **Responsive Design**: Fully responsive with modern high-tech aesthetic
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Groq SDK
- **Database**: MongoDB Atlas with Mongoose
- **Deployment Ready**: Vercel-optimized

## 📋 Prerequisites

- Node.js 18+ and npm
- Groq API Key (get it from [https://console.groq.com/](https://console.groq.com/))
- MongoDB Atlas account (get it from [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas))

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/BunnyEra-Globa/bunnyera-official-website.git
   cd bunnyera-official-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your credentials:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   MONGODB_URI=your_mongodb_connection_string_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
bunnyera-official-website/
├── app/
│   ├── api/
│   │   ├── chat/          # Groq AI chat endpoint
│   │   └── contact/       # MongoDB contact form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx       # Features section
│   ├── AIChatDemo.tsx    # AI chat interface
│   ├── ContactForm.tsx   # Contact form
│   └── Footer.tsx        # Footer
├── lib/
│   └── mongodb.ts        # MongoDB connection utility
├── models/
│   └── Lead.ts          # Lead data model
└── public/              # Static assets
```

## 🎨 Key Components

### Hero Section
- Dynamic gradient backgrounds
- Animated stats display
- Call-to-action buttons
- Modern high-tech aesthetic

### AI Chat Demo
- Real-time chat interface
- Powered by Groq SDK (Mixtral-8x7b model)
- Contextual responses about BunnyEra services
- Beautiful message bubbles with animations

### Contact Form
- Form validation
- MongoDB Atlas integration
- Success/error feedback
- Lead data persistence

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Groq API key for AI chat | Yes (for AI chat) |
| `MONGODB_URI` | MongoDB connection string | Yes (for contact form) |

## 🚢 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variables
4. Deploy!

## 📝 License

See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a corporate website for BunnyEra LLC. For inquiries, please contact us through the website or at info@bunnyera.com.

## 📧 Contact

- Website: [https://bunnyera.com](https://bunnyera.com) (coming soon)
- Email: info@bunnyera.com
- GitHub: [@BunnyEra-Globa](https://github.com/BunnyEra-Globa)

---

Built with ❤️ by BunnyEra LLC - Transforming E-Commerce with AI
