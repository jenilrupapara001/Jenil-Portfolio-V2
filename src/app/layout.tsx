import type { Metadata } from "next";
import { Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import SplashCursor from "@/components/ui/SplashCursor";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

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
    title: "Hire Senior MERN Stack Developer | Next.js & Node.js Expert | Jenil Rupapara",
    description: "Jenil Rupapara — Senior MERN Stack & Next.js developer helping US & UK SaaS startups ship faster, scale smarter. AWS certified. Remote. Available now.",
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
        // google: "VvSXRnC8iZ9S3kTt_vC91Hn4KDpbZTkhXoj74yTq6cQ",
        google: "uYVo8_dLBPMuJk6XPLjyHW5aeEl-ufA0OC73XYGsPf4",
    },
    openGraph: {
        title: "Hire Senior MERN Stack Developer | Next.js & Node.js Expert",
        description: "Jenil Rupapara — Senior MERN Stack & Next.js developer helping US & UK SaaS startups ship faster, scale smarter. AWS certified. Remote. Available now.",
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
        title: "Hire Senior MERN Stack Developer | Next.js & Node.js Expert",
        description: "Jenil Rupapara — Senior MERN Stack & Next.js developer helping US & UK SaaS startups ship faster, scale smarter. AWS certified. Remote. Available now.",
        images: [
            "/og-image.jpg",
            "/og-image-2.jpg"
        ],
        site: "@jenilrupapara",
        creator: "@jenilrupapara",
    },
    other: {
        "google-adsense-account": "ca-pub-5816598401672912",
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
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5816598401672912"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-EF2LZ65C16"
                    strategy="afterInteractive"
                />
                {/* Hotjar Tracking Code */}
                <Script
                    id="hotjar-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(h,o,t,j,a,r){
                                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                h._hjSettings={hjid:YOUR_HOTJAR_ID_HERE,hjsv:6};
                                a=o.getElementsByTagName('head')[0];
                                r=o.createElement('script');r.async=1;
                                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                        `,
                    }}
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-EF2LZ65C16');
                        `,
                    }}
                />
                <Script
                    id="person-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": ["Person", "ProfessionalService"],
                            "name": "Jenil Rupapara",
                            "image": "https://jenilrupapara.vercel.app/og-image.jpg",
                            "url": "https://jenilrupapara.vercel.app",
                            "jobTitle": "Senior Full-Stack & SaaS Developer",
                            "priceRange": "$$$",
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
                        <StickyCTA />
                        <ExitIntentPopup />
                    </div>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
