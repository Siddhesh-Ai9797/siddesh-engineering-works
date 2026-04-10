import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddesh Engineering Works | Precision Sheet Metal Manufacturing",
  description:
    "Siddesh Engineering Works delivers precision sheet metal manufacturing solutions including laser cutting, bending, fabrication, enclosures, counters, shelving, and custom industrial products.",
  keywords: [
    "Siddesh Engineering Works",
    "SEW",
    "sheet metal manufacturing",
    "laser cutting",
    "metal fabrication",
    "industrial enclosures",
    "metal counters",
    "metal shelving",
    "precision engineering",
    "India manufacturing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
