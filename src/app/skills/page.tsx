import Skills from "@/components/Skills";
import Section from "@/components/Section";
import { Zap, Target, Search } from "lucide-react";

export const metadata = {
    title: "Skills & Expertise | Jenil Rupapara",
    description: "Explore my technical proficiency in MERN stack, AWS, and modern web tools.",
};

export default function SkillsPage() {
    return (
        <div className="pt-8">
            <Section id="skills-header" title="Mastering the Stack">
                <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                    <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                        I specialize in building <span className="text-primary font-bold">high-performance ecosystems</span> where scalability and security are built-in from day one.
                    </p>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 uppercase tracking-tighter">Performance</h3>
                            <p className="text-sm text-foreground/60">Optimizing Core Web Vitals to achieve 90+ Lighthouse scores consistently.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-6 border border-purple-500/20">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 uppercase tracking-tighter">Scalability</h3>
                            <p className="text-sm text-foreground/60">Architecting modular systems that grow seamlessly with user demand.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-6 border border-green-500/20">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 uppercase tracking-tighter">Precision</h3>
                            <p className="text-sm text-foreground/60">Writing clean, type-safe code that minimizes bugs and technical debt.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Skills />

            <Section id="future-focus" title="Continuous Evolution" className="bg-white/[0.02]">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
                    <div>
                        <h3 className="text-3xl font-black mb-6 uppercase">The Horizon</h3>
                        <p className="text-foreground/70 leading-relaxed mb-6">
                            The tech landscape moves fast, and I move faster. I am currently deep-diving into <span className="text-primary">AI-driven code generation</span> and <span className="text-accent">Web3 infrastructure</span> to stay at the cutting edge of what's possible.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-foreground/80">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span>Advanced System Design Patterns</span>
                            </li>
                            <li className="flex items-center gap-4 text-foreground/80">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                <span>Generative AI for Software Engineering</span>
                            </li>
                            <li className="flex items-center gap-4 text-foreground/80">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                <span>Cloud-Native Security Best Practices</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-primary/10 to-transparent border border-white/5 rounded-[2rem] backdrop-blur-md">
                        <blockquote className="text-xl italic text-foreground/90 font-medium">
                            "The best way to predict the future is to build it. Every skill I acquire is another tool to build a better digital reality."
                        </blockquote>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">JR</div>
                            <div>
                                <p className="text-sm font-bold">Jenil Rupapara</p>
                                <p className="text-xs text-foreground/40">Full Stack Architect</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
