'use client'

import { motion } from 'framer-motion'
import { Rocket, Users, Globe, BarChart3 } from 'lucide-react'

const METRICS = [
  {
    icon: Rocket,
    value: '300%',
    label: 'Avg Perf Gain',
    description: 'Load times reduced through architecture migration'
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Users Served',
    description: 'Monthly active users on systems I architect'
  },
  {
    icon: Globe,
    value: '99.9%',
    label: 'Uptime Delivered',
    description: 'Reliability standards for enterprise SaaS'
  },
  {
    icon: BarChart3,
    value: '$50K+',
    label: 'Claims Recovered',
    description: 'Lost inventory value salvaged through automation'
  }
]

export function SocialProof() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
      {METRICS.map((metric, idx) => (
        <motion.div
           key={metric.label}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: idx * 0.1 }}
           className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-primary/20 transition-all group relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center">
             <div className="p-4 bg-white/5 rounded-2xl mb-6 group-hover:bg-primary/10 transition-colors">
               <metric.icon className="w-6 h-6 text-primary" />
             </div>
             <h4 className="text-4xl font-black italic tracking-tighter mb-2">{metric.value}</h4>
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mb-4">{metric.label}</p>
             <p className="text-xs text-foreground/60 leading-relaxed font-medium">{metric.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
