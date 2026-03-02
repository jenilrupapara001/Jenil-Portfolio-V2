import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hire a Next.js Developer | React & SSR Expert | Jenil Rupapara",
    description: "Looking to hire a Next.js developer? I specialize in migrating legacy React SPAs to fast, SEO-optimized Next.js applications for US and UK startups.",
    openGraph: {
        title: "Hire a Next.js Developer | Jenil Rupapara",
        description: "Looking to hire a Next.js developer? I specialize in migrating legacy React SPAs to fast, SEO-optimized Next.js applications for US and UK startups.",
        url: "https://jenilrupapara.vercel.app/nextjs-developer-for-hire",
    }
};

export default function NextJsDeveloperPage() {
    return (
        <main className="min-h-screen">
            <Hero />

            <Section id="seo-context" className="!py-12 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic"><span className="text-primary">Next.js</span> Specialized Engineering.</h2>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                        If you are searching for a Next.js developer, you probably have a performance problem, an SEO problem, or a scaling problem.
                        I specifically help companies migrate slow React SPAs to Next.js, implement Server-Side Rendering (SSR) for blazing fast Core Web Vitals,
                        and build edge-ready architectures that rank on Google and convert visitors.
                    </p>
                </div>
            </Section>

            <About />
            <Contact />
        </main>
    );
}
