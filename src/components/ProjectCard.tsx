'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, Info, Zap, Cpu } from 'lucide-react'
import { Project } from '@/utils/projects'

export function ProjectCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'impact' | 'tech'>('overview')

  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_80px_-20px_rgba(99,102,241,0.3)]">
      {/* Visual Header */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        
        {/* Quick Links Overlay */}
        <div className="absolute top-4 right-4 flex gap-2">
          {project.github && (
            <Link 
              href={project.github} 
              target="_blank"
              className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-primary transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
            </Link>
          )}
          {project.demo && project.demo !== '#' && (
            <Link 
              href={project.demo} 
              target="_blank"
              className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Dynamic Tabs */}
        <div className="flex gap-2 p-1 bg-white/[0.03] border border-white/5 rounded-xl mb-6">
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
            icon={<Info className="w-3 h-3" />}
            label="Overview" 
          />
          <TabButton 
            active={activeTab === 'impact'} 
            onClick={() => setActiveTab('impact')} 
            icon={<Zap className="w-3 h-3" />}
            label="Impact" 
          />
          <TabButton 
            active={activeTab === 'tech'} 
            onClick={() => setActiveTab('tech')} 
            icon={<Cpu className="w-3 h-3" />}
            label="Tech" 
          />
        </div>

        {/* Tab Content */}
        <div className="relative h-48 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-sm leading-relaxed"
            >
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-foreground/70">{project.description.slice(0, 150)}...</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-primary/60 bg-primary/5 px-2 py-1 rounded">#{tag}</span>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'impact' && (
                <div className="space-y-4 bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <p className="text-primary font-bold italic leading-tight">"{project.impact}"</p>
                  <div className="grid grid-cols-2 gap-2 text-[10px] uppercase font-black tracking-widest text-foreground/40">
                    <span>ROI: Verifiable</span>
                    <span>Scalability: Tested</span>
                  </div>
                </div>
              )}
              {activeTab === 'tech' && (
                <div className="space-y-4">
                  <p className="font-bold text-foreground/90 underline decoration-primary/30">Architecture & Challenges</p>
                  <ul className="space-y-1 text-foreground/60">
                    {project.challenges.slice(0, 2).map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span className="line-clamp-2">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Link */}
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
          <Link 
            href={`/projects/${project.slug}`}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 hover:text-primary transition-colors flex items-center gap-2"
          >
            Read Full Case Study <ArrowRight size={12} />
          </Link>
          <div className="flex -space-x-2">
             {/* Simple tech icons or circles could go here */}
          </div>
        </div>
      </div>
    </div>
  )
}

function TabButton({ active, onClick, label, icon }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
        active 
          ? 'bg-primary text-white shadow-lg shadow-primary/20' 
          : 'text-foreground/40 hover:text-foreground/60'
      }`}
    >
      {icon}
      {label}
    </button>
  )
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
