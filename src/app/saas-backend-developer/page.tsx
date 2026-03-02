import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SaaS Backend Developer | Node.js & Architecture Expert | Jenil Rupapara",
    description: "Looking for a SaaS backend developer? I architect resilient, scalable Node.js and MERN stack backends for US and UK startups that handle millions of requests without breaking.",
    openGraph: {
        title: "SaaS Backend Developer | Jenil Rupapara",
        description: "Looking for a SaaS backend developer? I architect resilient, scalable Node.js and MERN stack backends for US and UK startups that handle millions of requests without breaking.",
        url: "https://jenilrupapara.vercel.app/saas-backend-developer",
    }
};

export default function SaasBackendDeveloperPage() {
    return (
        <main className="min-h-screen">
            <Hero />

            <Section id="seo-context" className="!py-12 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic"><span className="text-primary">SaaS Backend</span> Architecture.</h2>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                        When a SaaS hits its growth phase, the backend is usually the first thing to break. Queries slow down, servers run out of memory,
                        and tech debt paralyzes the feature pipeline. As a specialized SaaS backend developer, I untangle monolithic architectures,
                        optimize complex database queries, and implement Redis caching to ensure your platform remains stable and responsive under intense load.
                    </p>
                </div>
            </Section>

            <About />
            <Contact />
        </main>
    );
}
