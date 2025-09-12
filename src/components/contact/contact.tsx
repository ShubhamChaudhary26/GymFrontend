"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

import { Globe } from "./map";

// 🔹 Beautiful Button
const Button = ({
  children,
  type = "button",
  loading,
  className = "",
  size = "md",
}: {
  children: React.ReactNode;
  type?: "button" | "submit";
  loading?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeClasses =
    size === "lg"
      ? "px-6 py-3 text-lg"
      : size === "sm"
      ? "px-3 py-1 text-sm"
      : "px-5 py-2.5";

  return (
    <button
      type={type}
      disabled={loading}
      className={`bg-primary text-black font-semibold rounded-xl transition hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 ${sizeClasses} ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

// 🔹 Beautiful Input
const Input = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  className = "",
}: {
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    className={`w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all backdrop-blur-md shadow-sm ${className}`}
  />
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate API

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start Your <span className="text-neon">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take the next step? Get in touch with our team and let's
            create a personalized fitness plan that fits your lifestyle and
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start  ">
          {/* Contact Form */}
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md shadow-lg h-[80vh] flex flex-col justify-between mt-10">
            {submitted ? (
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-neon">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex-1 flex flex-col"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                    <Input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-12"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-12"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-12"
                  />
                </div>

                <div className="relative flex-1">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/60" />
                  <textarea
                    name="message"
                    placeholder="Tell us about your fitness goals..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-full min-h-[200px] pl-12 pr-4 py-3 bg-white/10 border border-white/20 
                       rounded-xl text-white placeholder:text-white/60 focus:outline-none 
                       focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all 
                       backdrop-blur-md shadow-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  loading={isSubmitting}
                  className="w-full btn-hero"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            )}
          </div>

          <div className="px-4 py-3 flex items-start justify-center">
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
