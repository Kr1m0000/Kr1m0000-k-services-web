import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACT Solutions Inc.",
  description: "Translation, Reinvented by AI & Cloud",
  icons: {
    icon: "/act.png",
  },
  openGraph: {
    title: "ACT Solutions Inc.",
    description: "Translation, Reinvented by AI & Cloud.",
    url: "https://krimou.vercel.app", // Replace with your actual URL
    siteName: "ACT Solutions Inc.",
    images: [
      {
        url: "/product-image.png", // Path to your thumbnail image
        width: 1200,
        height: 630,
        alt: "ACT Solutions Inc.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT Solutions Inc.",
    description: "Translation, Reinvented by AI & Cloud.",
    images: ["/product-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
