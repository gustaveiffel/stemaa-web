import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HomePageProps {
  onNavigateContact: () => void;
  onNavigateLegal: () => void;
}

export function HomePage({ onNavigateContact, onNavigateLegal }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <div className="text-center space-y-12 flex-1 flex flex-col items-center justify-center max-w-4xl py-20">
        {/* Logo/Name */}
        <div className="space-y-8">
          <div className="flex items-center justify-center">
            <h1 className="font-[family-name:var(--font-italiana)] tracking-[0.2em] uppercase text-neutral-100 text-3xl md:text-2xl lg:text-5xl">
              ste
            </h1>
            <h1 className="font-[family-name:var(--font-italiana)] tracking-[0.1em] uppercase text-neutral-100 text-3xl md:text-2xl lg:text-5xl">
              m
            </h1>
            <h1 className="font-[family-name:var(--font-italiana)] tracking-[-0.4em] uppercase text-neutral-100 text-3xl md:text-2xl lg:text-5xl">
              aa
            </h1>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-neutral-600 to-transparent mx-auto" />
        </div>

        {/* Tagline & Intro */}
        <div className="space-y-6 max-w-2xl px-4">
          <h2 className="text-neutral-400 tracking-[0.15em] uppercase text-sm md:text-base font-light">
            Engineering High-Performance Digital Solutions.
          </h2>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-light">
            Stemaa is a premier engineering studio specialized in architecting and building robust digital foundations. 
            We deliver the technical excellence and innovation required to industrialize complex hardware and software products.
          </p>
        </div>

        {/* Services & Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left pt-12 px-4">
          <div className="space-y-3">
            <h3 className="text-neutral-300 tracking-widest uppercase text-xs font-semibold">Digital Engineering</h3>
            <p className="text-neutral-600 text-xs leading-relaxed">
              Cloud Infrastructure, SaaS Platforms, and Scalable Information Systems.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-neutral-300 tracking-widest uppercase text-xs font-semibold">Product Development</h3>
            <p className="text-neutral-600 text-xs leading-relaxed">
              From prototyping to industrialization of bespoke software and hardware solutions.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-neutral-300 tracking-widest uppercase text-xs font-semibold">Advanced Intelligence</h3>
            <p className="text-neutral-600 text-xs leading-relaxed">
              Data Science, Artificial Intelligence, and Applied R&D.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-neutral-300 tracking-widest uppercase text-xs font-semibold">Strategic Intelligence</h3>
            <p className="text-neutral-600 text-xs leading-relaxed">
              Interim Leadership (CTO/CEO), Technical Audits, and M&A Due Diligence.
            </p>
          </div>
        </div>

        {/* Contact Button */}
        <button
          onClick={onNavigateContact}
          className="group inline-flex items-center gap-3 text-neutral-500 hover:text-neutral-300 transition-colors duration-300 pt-8"
        >
          <span className="tracking-widest uppercase text-xs">Contact</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Footer with Legal Link */}
      <div className="pb-6">
        <button
          onClick={onNavigateLegal}
          className="text-neutral-700 hover:text-neutral-500 text-xs tracking-wider transition-colors duration-300"
        >
          Privacy & Legal
        </button>
      </div>
    </div>
  );
}
