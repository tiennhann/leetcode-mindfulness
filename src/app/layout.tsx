import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leetcode Mindfulness",
  description: "Make Leetcode easy",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-white.svg",
        href:"/logo-white.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-white.svg",
        href:"/logo-white.svg",
      },
    ]
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
