'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

const EXPERIENCE = [
  {
    company: "Brandcentral",
    role: "Software Developer",
    period: "May 2025 - Present",
    description: "I engineered a scalable full-stack architecture that drove a 30% boost in business engagement. I built automated multi-channel product integrations connecting Alibaba and Amazon APIs, completely eliminating manual synchronization tasks.",
    achievements: ["API Integration", "Full Stack Architecture", "30% Engagement Boost"]
  },
  {
    company: "PavitraSoft",
    role: "Web Developer",
    period: "Jan 2024 - Apr 2025",
    description: "I deployed 10+ production front-ends and integrated 15+ microservices, accelerating feature delivery cycles. I decreased application load times by 50% via advanced UI architectures and eliminated structural deployment failures by establishing robust CI/CD pipelines.",
    achievements: ["15+ Microservices", "50% Speed Increase", "CI/CD Pipeline"]
  },
  {
    company: "Symbiosis Systems",
    role: "Web Developer Intern",
    period: "Jul 2023 - Jan 2024",
    description: "I revamped 20+ legacy interfaces into high-performance components, directly contributing to a 25% lift in user engagement. I improved search rankings and shaved off 40% of load latency through strict technical optimization.",
    achievements: ["Legacy Migration", "40% Latency Reduction", "SEO Optimization"]
  },
  {
    company: "Adrata Technologies Pvt. Ltd.",
    role: "Web Developer Trainee",
    period: "Jan 2023 - Jul 2023",
    description: "I reinforced core product stability by actively monitoring and upgrading production interfaces. I minimised operational downtime via rigorous regression testing and preemptive bug resolution.",
    achievements: ["Stability Monitoring", "Bug Resolution", "Regression Testing"]
  }
]

export function ExperienceTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto py-20 px-4">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

      <div className="space-y-24">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 md:gap-20 ${
              idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-black border border-primary/50 -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
               <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>

            {/* Content Card */}
            <div className={`flex-1 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden ${
              idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
            }`}>
              {/* Background Accent */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10 space-y-4">
                <div className={`flex items-center gap-3 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  <Calendar className="w-4 h-4 text-primary/60" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{exp.period}</span>
                </div>
                
                <h3 className="text-3xl font-black italic tracking-tighter uppercase">{exp.company}</h3>
                <p className="text-lg font-bold text-foreground/80">{exp.role}</p>
                <p className="text-sm text-foreground/50 leading-relaxed font-medium">
                  {exp.description}
                </p>

                <div className={`flex flex-wrap gap-2 pt-4 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {exp.achievements.map(ach => (
                    <div key={ach} className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full">
                       <CheckCircle2 size={12} className="text-primary" />
                       <span className="text-[9px] font-black uppercase tracking-widest text-primary/80">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Spacer for reverse layout */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
