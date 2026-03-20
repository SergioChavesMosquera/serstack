import type { Metadata } from "next";
import "./globals.css";
import { Inter, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SmoothScroll from "./components/SmoothScroll"



const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SerStack",
  description: "Web & Automation Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, inter.variable, "font-sans", geist.variable)}
    >
      <body className="h-full flex flex-col bg-[#0A0F1F] text-[#F9FAFB]">
        <SmoothScroll />
  {children}

      </body>
    </html>
  );
}
