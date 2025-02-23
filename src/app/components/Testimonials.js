"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This platform helped me get credit seamlessly. Highly recommended!",
    role: "Small Business Owner",
  },
  {
    name: "Sarah Smith",
    feedback: "A game changer for MSMEs. The process was smooth and hassle-free.",
    role: "Entrepreneur",
  },
  {
    name: "Michael Lee",
    feedback: "Excellent service! Got access to credit faster than expected.",
    role: "Startup Founder",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-800 text-white text-center">
      <h2 className="text-4xl font-bold text-blue-400">What Our Users Say</h2>
      <div className="overflow-hidden mt-8 w-full max-w-3xl mx-auto">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-gray-700 rounded-lg shadow-lg"
        >
          <p className="text-lg italic">"{testimonials[index].feedback}"</p>
          <h4 className="mt-4 text-xl font-semibold">{testimonials[index].name}</h4>
          <p className="text-sm text-gray-300">{testimonials[index].role}</p>
        </motion.div>
      </div>
    </section>
  );
}
