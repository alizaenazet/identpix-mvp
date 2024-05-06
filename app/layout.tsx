import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar/navbar";
import Footer from "@/app/ui/footer";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico', // /public path
  },
  title: {
    template: '%s | IdentPix',
    default: 'IdentPix',
  },
  description: "Identpix welcome page, image classification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="fixed top-0 left-0 right-0"><Navbar/></div>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
