import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kairos AI - Omnichannel Guest Communications",
  description:
    "Unify your guest messaging across WhatsApp, Instagram, Messenger, and more with our AI-powered omnichannel inbox.",
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
    <html lang="en" className={inter.variable} translate="no">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >{children}</body>
    </html>
  );
}
