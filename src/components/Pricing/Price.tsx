"use client";
import React from "react";
import { Check, Star, Crown } from "lucide-react";

// Plans Data
const pricingPlans = [
  {
    name: "Starter",
    price: 299,
    period: "month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to basic gym equipment",
      "2 group classes per week",
      "Basic nutrition guide",
      "Mobile app access",
      "Locker room access",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Elite",
    price: 799,
    period: "month",
    description: "Most popular choice for serious fitness enthusiasts",
    features: [
      "Unlimited gym access",
      "Unlimited group classes",
      "Personal trainer session (2/month)",
      "Custom nutrition plan",
      "Priority booking",
      "Recovery suite access",
      "Progress tracking & analytics",
    ],
    popular: true,
    cta: "Start Elite Training",
  },
  {
    name: "Champion",
    price: 1499,
    period: "month",
    description: "Ultimate transformation program for peak performers",
    features: [
      "Everything in Elite",
      "Weekly personal training",
      "Custom meal prep service",
      "Body composition analysis",
      "Supplement consultation",
      "24/7 coach support",
      "VIP amenities access",
      "Guest passes (4/month)",
    ],
    popular: false,
    cta: "Become Champion",
  },
];

const PricingPage = () => {
  // Razorpay Checkout
  const openRazorpay = (plan: any) => {
    const options: any = {
      key: "rzp_test_yourKeyHere", // <-- apna Razorpay Key ID daalo
      amount: plan.price * 100, // paise me
      currency: "INR",
      name: "Fitness Club",
      description: `${plan.name} Membership`,
      image: "/logo.png", // optional logo
      handler: function (response: any) {
        alert(
          `✅ Payment successful for ${plan.name}\nPayment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Shubham Chaudhary",
        email: "shubham@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#facc15",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <section className="py-10  relative text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="textHeadingmobile md:textHeadinglaptop ">
          Your Fitness Goals, <span className="text-default">Our Expertise</span>
        </h2>
        <p className="textafterHeading max-w-2xl mx-auto">
          Choose the perfect plan to match your ambition. Every membership comes 
          with our success guarantee and world-class support.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${
              plan.popular
                ? "bg-gradient-to-b from-yellow-900/30 to-gray-900 border border-yellow-500/30 ring-2 ring-default"
                : "bg-graydefault border border-grayborder"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-default text-black px-4 py-1 rounded-full text-xs font-bold shadow-md  flex items-center">
                  <Star className="w-3 h-4 mr-1 " /> MOST POPULAR
                </div>
              </div>
            )}

            {/* Title */}
            <div className="text-center mb-6">
              <div className="flex justify-center items-center mb-3">
                {plan.name === "Champion" && (
                  <Crown className="w-6 h-6 text-default  mr-2" />
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>
              <p className="text-gray-400">{plan.description}</p>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-default">
                  ₹{plan.price}
                </span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <Check className="w-4 h-4 text-default mr-2 flex-shrink-0 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Razorpay Button */}
            <button
              onClick={() => openRazorpay(plan)}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                plan.popular
                  ? " bg-default text-black shadow-md hover:shadow-yellow-400/50"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-14 text-gray-400 text-sm">
        <div className="flex flex-wrap justify-center gap-2 items-center">
          <Check className="w-4 h-4 text-default" />
          <span>30-day money-back guarantee</span>
          <span>•</span>
          <span>Cancel anytime</span>
          <span>•</span>
          <span>No setup fees</span>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
