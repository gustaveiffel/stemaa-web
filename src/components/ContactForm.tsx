import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
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
              className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-400 transition-colors duration-300 pb-3 outline-none text-neutral-100 placeholder:text-neutral-700"
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
              className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-400 transition-colors duration-300 pb-3 outline-none text-neutral-100 placeholder:text-neutral-700"
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
              rows={5}
              className="w-full bg-transparent border-b border-neutral-800 focus:border-neutral-400 transition-colors duration-300 pb-3 outline-none text-neutral-100 placeholder:text-neutral-700 resize-none"
              placeholder="Your message..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitted}
            className="group relative px-8 py-4 bg-neutral-100 text-neutral-950 tracking-widest uppercase text-sm hover:bg-neutral-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              {isSubmitted ? "Sent" : "Send"}
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="text-center text-neutral-400 text-sm tracking-wider animate-fade-in">
            Thank you for reaching out.
          </div>
        )}
      </form>
    </div>
  );
}
