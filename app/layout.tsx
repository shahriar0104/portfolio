import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import {
  Bricolage_Grotesque,
  Space_Grotesk,
  JetBrains_Mono,
  Orbitron,
} from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const spaceGrotesque = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Shadman Shahriar | Portfolio",
  description: "Portfolio of Shadman Shahriar - Full-stack Software Engineer",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${spaceGrotesque.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
