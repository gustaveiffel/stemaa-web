import { ArrowLeft } from "lucide-react";
import { ContactForm } from "./ContactForm";

interface ContactPageProps {
  onNavigate: () => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="space-y-16">
          {/* Back Button */}
          <button
            onClick={onNavigate}
            className="group inline-flex items-center gap-3 text-neutral-600 hover:text-neutral-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="tracking-widest uppercase text-sm">Back</span>
          </button>

          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-block">
              <h2 className="tracking-widest uppercase text-neutral-500 mb-4">
                Get in touch
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
