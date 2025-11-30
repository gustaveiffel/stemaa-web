import type { Metadata } from "next";
import { Italiana } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
});

export const metadata: Metadata = {
  title: "Stemaa",
  description: "S - T - E - M - A - A",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${italiana.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
