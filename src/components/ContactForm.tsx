"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 blur-3xl -z-10" />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          {/* Name Field */}
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm tracking-wider uppercase text-neutral-500 mb-3"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-400 transition-colors duration-300 pb-3 outline-none text-neutral-100 placeholder:text-neutral-700 disabled:opacity-50"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm tracking-wider uppercase text-neutral-500 mb-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-400 transition-colors duration-300 pb-3 outline-none text-neutral-100 placeholder:text-neutral-700 disabled:opacity-50"
              placeholder="your@email.com"
            />
          </div>

          {/* Message Field */}
          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm tracking-wider uppercase text-neutral-500 mb-3"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={5}
              className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-400 transition-colors duration-300 pb-3 outline-none text-neutral-100 placeholder:text-neutral-700 resize-none disabled:opacity-50"
              placeholder="Your message..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative px-8 py-4 bg-neutral-100 text-neutral-950 tracking-widest uppercase text-sm hover:bg-neutral-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              {isSubmitting ? "Sending..." : submitStatus === "success" ? "Sent!" : "Send"}
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="text-center text-green-400 text-sm tracking-wider">
            Thank you for reaching out. We'll get back to you soon!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="text-center text-red-400 text-sm tracking-wider">
            Something went wrong. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
}
