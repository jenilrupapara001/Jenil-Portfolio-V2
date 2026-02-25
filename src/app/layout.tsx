import type { Metadata } from "next";
import { Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import SplashCursor from "@/components/ui/SplashCursor";
import Script from "next/script";

const syne = Syne({
    variable: "--font-syne",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://jenilrupapara.vercel.app"),
    title: "Jenil Rupapara | Senior MERN Stack Expert | US & UK SaaS Development Specialist",
    description:
        "ROI-driven MERN Stack Developer specializing in scalable enterprise SaaS solutions for US and UK markets. Expertise in React, Next.js, Node.js, and high-performance distributed systems.",
    keywords: [
        "Senior MERN Stack Developer",
        "React Expert US UK",
        "SaaS Development Expert",
        "Full-Stack Web Developer London",
        "Next.js Specialist New York",
        "Hire Senior React Developer",
        "Enterprise Web Architecture",
        "Scalable SaaS Solutions",
        "Remote Developer for US Startups",
        "Node.js Backend Expert",
        "Tailwind CSS Specialist",
        "MongoDB Architect",
    ],
    verification: {
        google: "VvSXRnC8iZ9S3kTt_vC91Hn4KDpbZTkhXoj74yTq6cQ",
    },
    openGraph: {
        title: "Jenil Rupapara | MERN Stack Developer",
        description:
            "Discover the professional portfolio of Jenil Rupapara. Projects, skills, and case studies showcasing modern web development with MERN stack technologies.",
        url: "https://jenilrupapara.vercel.app",
        siteName: "Jenil Rupapara Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Jenil Rupapara MERN Stack Developer Portfolio",
            },
            {
                url: "/og-image-2.jpg",
                width: 1200,
                height: 630,
                alt: "Full-Stack Web Development Projects by Jenil Rupapara",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenil Rupapara | MERN Stack Developer",
        description:
            "Check out the portfolio of Jenil Rupapara. Explore responsive web apps, full-stack projects, and collaborate on modern web development solutions.",
        images: [
            "/og-image.jpg",
            "/og-image-2.jpg"
        ],
        site: "@jenilrupapara",
        creator: "@jenilrupapara",
    },
    other: {
        "google-adsense-account": "ca-pub-7130727000782953",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body
                className={`${syne.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#030303] font-sans`}
            >
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7130727000782953"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
                <Script
                    id="person-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Jenil Rupapara",
                            "url": "https://jenilrupapara.vercel.app",
                            "jobTitle": "Senior Full-Stack & SaaS Developer",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Surat",
                                "addressRegion": "Gujarat",
                                "addressCountry": "IN"
                            },
                            "sameAs": [
                                "https://github.com/jenilrupapara001",
                                "https://linkedin.com/in/jenilrupapara-fullstack-developer",
                                "https://twitter.com/jenilrupapara"
                            ],
                            "knowsAbout": ["React", "Next.js", "Node.js", "MongoDB", "Cloud Computing", "SaaS Development", "Microservices", "System Design", "Enterprise Scale Applications"]
                        })
                    }}
                />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    forcedTheme="dark"
                    disableTransitionOnChange
                >
                    <SplashCursor />
                    <div className="relative z-10 flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-grow pt-16">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
