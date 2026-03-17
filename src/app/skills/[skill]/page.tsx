import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allSkills, getSkillBySlug } from '@/utils/skills'
import Section from '@/components/Section'
import { BrainCircuit, Clock, Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return allSkills.map((skill) => ({
    skill: skill.slug,
  }))
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { skill: slug } = await params
  const skill = getSkillBySlug(slug)

  if (!skill) return { title: 'Skill Not Found' }

  return {
    title: `${skill.name} Developer — Jenil Rupapara | Portfolio`,
    description: `I am Jenil Rupapara, a Senior MERN Stack Developer with ${skill.experience} of production experience in ${skill.name}. ${skill.bio}`,
    alternates: {
      canonical: `https://jenilrupapara.vercel.app/skills/${slug}`,
    },
    openGraph: {
      title: `${skill.name} Expert — Jenil Rupapara`,
      description: `Production-grade ${skill.name} architecture and development by me.`,
      url: `https://jenilrupapara.vercel.app/skills/${slug}`,
      images: [`/api/og?title=${encodeURIComponent(skill.name + ' Expert')}&subtitle=${encodeURIComponent(skill.experience + ' of experience')}`],
    }
  }
}

export default async function SkillPage({ params }: any) {
  const { skill: slug } = await params
  const skill = getSkillBySlug(slug)

  if (!skill) notFound()

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <Section id="skill-detail" title="">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-12">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="opacity-20">/</span>
            <Link href="/#skills" className="hover:text-primary transition-colors">Skills</Link>
            <span className="opacity-20">/</span>
            <span className="text-primary">{skill.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left: Icon and Meta */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 relative group overflow-hidden">
                <div 
                  className="absolute inset-0 blur-3xl opacity-20 transition-opacity duration-1000 group-hover:opacity-40"
                  style={{ backgroundColor: skill.color }}
                />
                <skill.icon 
                  className="w-16 h-16 md:w-24 md:h-24 relative z-10 drop-shadow-2xl" 
                  style={{ color: skill.color }}
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 w-full">
                  <Clock className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30">Experience</p>
                    <p className="text-sm font-bold text-white">{skill.experience}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 w-full">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30">Expertise</p>
                    <p className="text-sm font-bold text-white">Senior Level</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="md:col-span-8">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.8] mb-6">
                    {skill.name.split('.')[0]} <br />
                    <span className="text-primary truncate">{skill.name.split('.').slice(1).join('.') || 'Specialist'}</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed font-medium">
                    {skill.bio}
                  </p>
                </div>

                <div className="h-[1px] w-full bg-white/5" />

                <div className="space-y-6">
                  <h2 className="text-xl font-bold italic uppercase tracking-tight flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                    How I leverage {skill.name}
                  </h2>
                  <div className="prose prose-invert max-w-none prose-p:text-foreground/50 prose-p:leading-relaxed">
                    <p>
                      In my development workflow, I treat {skill.name} as a core pillar for critical architectural decisions. 
                      Whether I'm optimizing performance, ensuring scalability, or maintaining strict type-safety, 
                      I follow industry best practices and design patterns (like SOLID principles, Clean Architecture, 
                      and Event-Driven patterns) to deliver robust production-grade solutions.
                    </p>
                    <p>
                      My experience spans from building early-stage startups to scaling established enterprise systems, 
                      giving me a unique perspective on technical trade-offs and sustainable growth.
                    </p>
                  </div>
                </div>

                <div className="pt-10">
                   <Link 
                      href="/contact"
                      className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl"
                   >
                     Discuss a {skill.name} Project 🚀
                   </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-20 pt-10 border-t border-white/5">
            <Link 
              href="/#skills" 
              className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 hover:text-primary transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to All Skills
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
