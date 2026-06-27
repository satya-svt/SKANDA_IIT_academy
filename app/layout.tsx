import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/LenisProvider";
import { ClickSpark } from "@/components/react-bits/ClickSpark";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Skanda IIT & Medical Academy | Sri Harsha Junior College, Tuni",
  description:
    "Premier coaching academy for IIT-JEE & Medical entrance preparation in Tuni. Sri Skanda IIT & Medical Academy and Sri Harsha Junior College — shaping futures with 95.31% senior pass rate and top rankers in AP Inter 2026.",
  keywords: [
    "Sri Skanda Academy",
    "Sri Harsha Junior College",
    "IIT coaching Tuni",
    "Medical coaching Tuni",
    "MPC coaching",
    "BiPC coaching",
    "AP Inter results 2026",
    "Best junior college Tuni",
  ],
  openGraph: {
    title: "Sri Skanda IIT & Medical Academy | Sri Harsha Junior College",
    description:
      "Tuni's premier academy for IIT & Medical preparation. 95.31% senior pass rate. Top rankers in AP Inter 2026.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", inter.variable, playfair.variable, "font-sans", geist.variable)}
    >
      <head>
        <meta name="theme-color" content="#004B23" />
        <link rel="icon" href="/images/logo.jpeg" />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <LenisProvider>
          <ClickSpark>
            {children}
          </ClickSpark>
        </LenisProvider>
      </body>
    </html>
  );
}
