"use client"; // ✅ Enable interactivity

import { useState } from "react";
import { Lightbulb, ShieldCheck, Zap, Banknote, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Lightbulb size={40} className="text-blue-400" />,
    title: "AI-Powered Credit Scoring",
    description: "Leverage AI to assess MSME creditworthiness instantly.",
  },
  {
    icon: <ShieldCheck size={40} className="text-green-400" />,
    title: "Secure Transactions",
    description: "End-to-end encryption ensures your financial data remains safe.",
  },
  {
    icon: <Zap size={40} className="text-yellow-400" />,
    title: "Instant Loan Approvals",
    description: "Get quick approvals with minimal documentation.",
  },
  {
    icon: <Banknote size={40} className="text-purple-400" />,
    title: "Flexible Loan Options",
    description: "Choose from multiple loan plans that fit your business needs.",
  },
  {
    icon: <Users size={40} className="text-red-400" />,
    title: "OCEN Integration",
    description: "Seamless integration with OCEN for enhanced financial access.",
  },
  {
    icon: <TrendingUp size={40} className="text-orange-400" />,
    title: "Growth-Oriented Insights",
    description: "Receive analytics-driven financial insights to scale your business.",
  },
];

const Features = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="features" className="py-24 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-blue-400">Key Features</h2>
        <p className="text-gray-300 mt-4">Unlock seamless credit access with these powerful features.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 
                ${hovered === index ? "scale-105 bg-gray-700 shadow-blue-500/50" : "bg-gray-900"}
              `}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-400 mt-2 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
