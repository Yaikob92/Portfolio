import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ScrollProgress, CustomCursor } from "@/components/ui/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Yaikob Wasihun | Software Engineer",
  description:
    "Software engineer crafting fast, beautiful, and resilient digital products. Based in Addis Ababa, Ethiopia.",
  keywords: [
    "software engineer",
    "React",
    "TypeScript",
    "Yaikob Wasihun",
    "Ethiopia",
  ],
  authors: [{ name: "Yaikob Wasihun" }],
  openGraph: {
    title: "Yaikob Wasihun | Software Engineer",
    description:
      "Software engineer crafting fast, beautiful, and resilient digital products.",
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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-J3CBXC0B5W`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J3CBXC0B5W');
          `}
        </Script>
      </head>
      <body className="antialiased" style={{ backgroundColor: "var(--bg)", color: "var(--ivory-90)" }}>
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
