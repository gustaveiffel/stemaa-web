"use client";

import { useState } from "react";
import { HomePage } from "@/components/HomePage";
import { ContactPage } from "@/components/ContactPage";
import { LegalPage } from "@/components/LegalPage";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "contact" | "legal">("home");

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {currentPage === "home" ? (
        <HomePage
          onNavigateContact={() => setCurrentPage("contact")}
          onNavigateLegal={() => setCurrentPage("legal")}
        />
      ) : currentPage === "contact" ? (
        <ContactPage onNavigate={() => setCurrentPage("home")} />
      ) : (
        <LegalPage onNavigate={() => setCurrentPage("home")} />
      )}
    </div>
  );
}
