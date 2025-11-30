import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HomePageProps {
  onNavigate: () => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center space-y-12">
        {/* Logo/Name */}
        <div className="space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Stemaa Logo"
              width={120}
              height={120}
              className="invert opacity-40"
              priority
            />
          </div>
          {/* <h1 className="tracking-[0.3em] uppercase text-neutral-400">
            stemaa
          </h1> */}
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-neutral-600 to-transparent mx-auto" />
        </div>

        {/* Contact Button */}
        <button
          onClick={onNavigate}
          className="group inline-flex items-center gap-3 text-neutral-500 hover:text-neutral-300 transition-colors duration-300"
        >
          <span className="tracking-widest uppercase text-xs">Contact</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Footer */}
        {/* <div className="pt-16">
          <p className="text-neutral-700 text-xs tracking-wider">
            {new Date().getFullYear()}
          </p>
        </div> */}
      </div>
    </div>
  );
}
