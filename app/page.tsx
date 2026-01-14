import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIChatDemo from "@/components/AIChatDemo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Features />
      <AIChatDemo />
      <ContactForm />
      <Footer />
    </main>
  );
}
