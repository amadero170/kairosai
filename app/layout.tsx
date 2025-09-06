import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kairos - Automatización Inteligente",
  description:
    "Transformamos tus operaciones con automaciones inteligentes, eliminando el trabajo repetitivo para que te concentres en crecer.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
