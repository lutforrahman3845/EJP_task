import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogs",
  description: "Blog viewer application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-[100vh-100px]">{children}</main>
      </body>
    </html>
  );
}
