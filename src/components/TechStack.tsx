'use client'

import { motion } from 'framer-motion'
import { Database, Layout, ShieldCheck, Zap } from 'lucide-react'

const STACKS = [
  {
    category: 'Frontend & UX',
    icon: Layout,
    color: 'text-blue-400',
    skills: ['Next.js 15', 'React 19', 'Tailwind 4', 'Framer Motion', 'TypeScript'],
    proficiency: '98%'
  },
  {
    category: 'Backend & Core',
    icon: Zap,
    color: 'text-primary',
    skills: ['Node.js', 'Express', 'Go', 'NestJS', 'Prisma'],
    proficiency: '95%'
  },
  {
    category: 'Distributed Logic',
    icon: Database,
    color: 'text-purple-400',
    skills: ['Kafka', 'Redis', 'PostgreSQL', 'MongoDB', 'BullMQ'],
    proficiency: '92%'
  },
  {
    category: 'Security & Cloud',
    icon: ShieldCheck,
    color: 'text-yellow-400',
    skills: ['AWS', 'Docker', 'JWT', 'RBAC', 'Vercel'],
    proficiency: '90%'
  }
]

export function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
      {STACKS.map((stack, idx) => (
        <motion.div
          key={stack.category}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-primary/20 transition-all group overflow-hidden relative"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 bg-white/5 rounded-2xl ${stack.color}`}>
                  <stack.icon size={24} />
                </div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter">{stack.category}</h4>
              </div>
              <span className="text-xs font-mono font-bold text-foreground/20">{stack.proficiency}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {stack.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-black uppercase tracking-widest text-foreground/60 group-hover:text-white group-hover:border-white/20 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-auto h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: stack.proficiency }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-full bg-gradient-to-r from-primary to-blue-400`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
