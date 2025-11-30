import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HomePageProps {
  onNavigateContact: () => void;
  onNavigateLegal: () => void;
}

export function HomePage({ onNavigateContact, onNavigateLegal }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-12 flex-1 flex flex-col items-center justify-center">
        {/* Logo/Name */}
        <div className="space-y-8">
          {/* <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Stemaa Logo"
              width={120}
              height={120}
              className="invert opacity-40"
              priority
            />
          </div> */}
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

        {/* Contact Button */}
        <button
          onClick={onNavigateContact}
          className="group inline-flex items-center gap-3 text-neutral-500 hover:text-neutral-300 transition-colors duration-300"
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
