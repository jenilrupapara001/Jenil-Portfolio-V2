import type { Metadata } from "next";
import { Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jenilrupapara.netlify.app'),
  title: "Jenil Rupapara | Portfolio",
  description: "Personal portfolio of Jenil Rupapara, MERN Stack Developer. specializing in building modern, responsive web applications.",
  openGraph: {
    title: "Jenil Rupapara | MERN Stack Developer",
    description: "Personal portfolio of Jenil Rupapara. View my projects, skills, and experience.",
    url: "https://jenilrupapara.netlify.app",
    siteName: "Jenil Rupapara Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Needs a real image
        width: 1200,
        height: 630,
        alt: "Jenil Rupapara Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "VvSXRnC8iZ9S3kTt_vC91Hn4KDpbZTkhXoj74yTq6cQ",
  },
  other: {
    "google-adsense-account": "ca-pub-7130727000782953",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import GlobalSpotlight from "@/components/GlobalSpotlight";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#030303] font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalSpotlight />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
