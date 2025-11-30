import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stemaa",
  description: "S - T - E - M - A - A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
