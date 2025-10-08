"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Check, Crown } from "lucide-react";

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const PricingPage = () => {
  const [plans, setPlans] = useState<any[]>([]);

  // Fetch Plans from Backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/plans")
      .then((res) => setPlans(res.data.data))
      .catch((err) => console.log("Error fetching plans:", err));
  }, []);

  // Load Razorpay script dynamically
  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

const openRazorpay = async (plan: any) => {
  const res = await loadRazorpayScript();
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  try {
    // Step 1: create order via backend
    const orderRes = await axios.post(
      "http://localhost:3000/api/v1/payments/create-order",
      { planId: plan._id },
      { withCredentials: true }
    );

    const { orderId, amount, currency, key, subscriptionId } = orderRes.data.data;

    // Step 2: open Razorpay
    const options: any = {
      key,
      amount,
      currency,
      name: "Fitness Club",
      description: `${plan.name} Membership`,
      image: "/logo.png",
      order_id: orderId,
      handler: async function (response: any) {
        // Step 3: verify payment
        await axios.post(
          "http://localhost:3000/api/v1/payments/verify",
          {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            subscriptionId,
          },
          { withCredentials: true }
        );
        alert("Payment successful!");
      },
      theme: { color: "#facc15" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    alert("Failed to create order. Try again.");
  }
};


  return (
    <section className="py-10 relative text-white">
      <div className="text-center mb-16">
        <h2 className="textHeadingmobile md:textHeadinglaptop">
          Your Fitness Goals, <span className="text-default">Our Expertise</span>
        </h2>
        <p className="textafterHeading max-w-2xl mx-auto">
          Choose the perfect plan to match your ambition. Every membership comes with our success guarantee and world-class support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan: any, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${
              plan.popular
                ? "bg-gradient-to-b from-yellow-900/30 to-gray-900 border border-yellow-500/30 ring-2 ring-default"
                : "bg-graydefault border border-grayborder"
            }`}
          >
            <div className="text-center mb-6">
              <div className="flex justify-center items-center mb-3">
                {plan.name === "Champion" && <Crown className="w-6 h-6 text-default mr-2" />}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>
              <p className="text-gray-400">{plan.description}</p>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-default">₹{plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features?.map((feature: string, i: number) => (
                <li key={i} className="flex items-start text-gray-300">
                  <Check className="w-4 h-4 text-default mr-2 flex-shrink-0 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => openRazorpay(plan)}
              className="w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300 bg-default text-black shadow-md hover:shadow-yellow-400/50"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPage;
