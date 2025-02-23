"use client";

import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <section className="text-center py-24">
          <h1 className="text-5xl font-bold text-blue-400">
            Empowering MSMEs with Credit Access
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Seamless credit solutions tailored for small businesses.
          </p>
          {/* ✅ Update the button to navigate to /login */}
          <button
            onClick={() => router.push("/login")}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Get Started
          </button>
        </section>

        <Features />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
