"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
};

const plans: Plan[] = [
  {
    name: "Essential Plan",
    price: "₹8,000 – ₹10,000 (One Time)",
    description: "For small institutes who just want a professional web presence.",
    features: [
      "4–5 Pages (Home, About, Courses, Contact, Gallery)",
      "Responsive Mobile-Friendly Design",
      "Contact/Inquiry Form",
      "Basic SEO Setup",
      "SSL Secured Website",
    ],
    buttonText: "Get Essential",
  },
  {
    name: "Growth Plan",
    price: "₹25,000 – ₹30,000 (One Time)",
    description: "Strong digital identity for growing institutes.",
    popular: true,
    features: [
      "All Essential features included",
      "8–10 Dynamic Pages (Admissions, Events, Blog, Achievements, Gallery)",
      "Online Admission Form with Auto Email Alerts",
      "Notice Board / Announcements",
      "Event Gallery & Media Showcase",
      "Google Maps + Analytics Integration",
      "Speed & SEO Optimization",
    ],
    buttonText: "Choose Growth",
  },
  {
    name: "Elite Plan",
    price: "₹55,000 – ₹60,000 (One Time)",
    description: "Full digital ecosystem for top institutes.",
    features: [
      "All Growth features included",
      "Student/Parent Portal (results, fee records, notices)",
      "Online Payment Integration (fees, donations, etc.)",
      "Multi-language Support (English/Hindi/Regional)",
      "Admin Dashboard for content management",
      "Advanced SEO + Performance Reports",
      "Annual Priority Support & Maintenance",
    ],
    buttonText: "Go Elite",
  },
];

export default function PricingCards() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold">Simple and Affordable Pricing</h2>
        <p className="text-gray-400 mt-3 text-lg">
          Choose the perfect plan to grow your Buisness online presence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
className={`rounded-2xl p-8 shadow-lg border transition-all duration-300 ${
  plan.popular
    ? "bg-gradient-to-b from-gray-900 to-black"
    : "bg-gray-900 border-gray-800"
}`}
style={
  plan.popular
    ? {
        borderColor: "var(--color-cyan-400)",
        boxShadow: `0 0 15px 0 var(--color-cyan-400)`,
      }
    : {}
}

          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              {plan.popular && (
<span
  className="text-xs px-3 py-1 text-white rounded-full"
  style={{ backgroundColor: "var(--color-cyan-400)" }}
>                  Most Popular
                </span>
              )}
            </div>
            <p className="mt-2 text-3xl font-semibold" style={{ color: "var(--color-cyan-400)" }}>
  {plan.price}
</p>
<p className="text-gray-400 mt-3">{plan.description}</p>

<button
  className={`w-full mt-6 py-3 rounded-xl font-semibold transition ${
    plan.popular
      ? "text-white"
      : "bg-gray-800 hover:bg-gray-700 text-gray-200"
  }`}
  style={
    plan.popular
      ? {
          backgroundColor: "var(--color-cyan-400)",
        }
      : {}
  }
>
  {plan.buttonText}
</button>


            <ul className="mt-6 space-y-3 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300">
<Check className="h-4 w-4 shrink-0" style={{ color: "var(--color-cyan-400)" }} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
