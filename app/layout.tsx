import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kairos AI - HubSpot Implementation & Business Automation",
  description:
    "Technical HubSpot implementation by developers who've done 20+ enterprise migrations. Also: custom automation, AI agents, and workflow integration.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >{children}</body>
    </html>
  );
}
