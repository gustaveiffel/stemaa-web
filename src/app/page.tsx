"use client";

import { useState } from "react";
import { HomePage } from "@/components/HomePage";
import { ContactPage } from "@/components/ContactPage";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "contact">("home");

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {currentPage === "home" ? (
        <HomePage onNavigate={() => setCurrentPage("contact")} />
      ) : (
        <ContactPage onNavigate={() => setCurrentPage("home")} />
      )}
    </div>
  );
}
