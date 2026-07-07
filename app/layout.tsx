import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ArmorArk AI | Native macOS Menu Bar AI Assistant",
  description: "ArmorArk AI — A native macOS menu bar AI assistant with streaming chat, Knowledge Base (RAG), ReAct Agents, and Quick Command. Built by the Armor Ark Web Team.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ArmorArk AI",
    description: "Native macOS menu bar AI assistant with RAG, Agents, and more.",
    images: [{ url: "/og-image.png" }], // placeholder, can add later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[var(--navy)] text-[var(--text-primary)]">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
