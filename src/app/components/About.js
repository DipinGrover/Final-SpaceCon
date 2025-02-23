"use client"; // ✅ Enable interactivity

import { useState } from "react";
import { Info, Users, Briefcase } from "lucide-react"; // Import icons

const aboutData = [
  {
    id: 1,
    title: "Who We Are",
    description: "We empower MSMEs with seamless credit solutions tailored to their business needs.",
    icon: <Users className="w-10 h-10 text-blue-400" />,
  },
  {
    id: 2,
    title: "Our Mission",
    description: "Providing hassle-free access to financial resources using AI and OCEN integration.",
    icon: <Briefcase className="w-10 h-10 text-blue-400" />,
  },
  {
    id: 3,
    title: "Why Choose Us?",
    description: "Reliable, fast, and secure financial solutions for small businesses to grow.",
    icon: <Info className="w-10 h-10 text-blue-400" />,
  },
];

const About = () => {
  const [hovered, setHovered] = useState(null); // Track hovered card

  return (
    <section id="about" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400">About Us</h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Learn more about our vision, mission, and why we are the best choice for MSMEs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {aboutData.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-lg shadow-md bg-gray-800 transition-all duration-300 
                ${hovered === item.id ? "scale-105 bg-gray-700" : "bg-gray-800"}
              `}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
