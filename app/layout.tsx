import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BunnyEra LLC - AI-Driven E-Commerce Solutions",
  description: "High-performance AI engines and intelligent automation solutions for cross-border e-commerce brand operations.",
  keywords: ["AI", "E-commerce", "Automation", "Cross-border", "Machine Learning"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
