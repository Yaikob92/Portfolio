import type { Metadata } from "next";
import "./globals.css";
import { ScrollProgress, CustomCursor } from "@/components/ui/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yaikob Wasihun — Software Engineer",
  description:
    "Full-stack software engineer crafting fast, beautiful, and resilient digital products. Based in Addis Ababa, Ethiopia.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "Yaikob Wasihun",
    "Ethiopia",
  ],
  authors: [{ name: "Yaikob Wasihun" }],
  openGraph: {
    title: "Yaikob Wasihun — Software Engineer",
    description:
      "Full-stack software engineer crafting fast, beautiful, and resilient digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#07070c] antialiased">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
