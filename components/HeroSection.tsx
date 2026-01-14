import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="space-y-8">
          {/* Logo/Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm">
              🚀 Next-Generation E-Commerce Technology
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            AI-Driven E-Commerce
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Automation Engine
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed">
            BunnyEra LLC powers cross-border brand operations with cutting-edge AI technology. 
            Our intelligent automation platform streamlines inventory management, customer engagement, 
            and market analytics to help your e-commerce business scale globally.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
              <span className="text-sm font-semibold text-white">🤖 AI-Powered Analytics</span>
            </div>
            <div className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
              <span className="text-sm font-semibold text-white">⚡ Real-Time Automation</span>
            </div>
            <div className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
              <span className="text-sm font-semibold text-white">🌐 Global Scalability</span>
            </div>
            <div className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
              <span className="text-sm font-semibold text-white">📊 Smart Insights</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#demo"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Try AI Demo
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">50ms</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">10M+</div>
              <div className="text-sm text-gray-400">Transactions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
