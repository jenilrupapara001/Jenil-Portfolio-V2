'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react'

const COMMANDS: Record<string, string | (() => string)> = {
  help: 'Available commands: about, skills, projects, contact, resume, github, clear, help',
  about: 'I am Jenil Rupapara, a Senior MERN Stack & Next.js Developer specialized in building high-performance SaaS ecosystems.',
  skills: 'Frontend: React, Next.js, Tailwind, Framer Motion\nBackend: Node.js, Express, Go, NestJS\nDatabase: MongoDB, PostgreSQL, Redis\nCloud: AWS, Docker, Kafka',
  projects: 'I have built enterprise BI dashboards, event-driven microservices, and industrial SaaS platforms. Type "view work" to see them in the grid.',
  contact: 'Email: jenilrupapara001@gmail.com\nLinkedIn: https://linkedin.com/in/jenilrupapara-fullstack-developer',
  github: 'https://github.com/jenilrupapara001',
  resume: 'Resume restricted in terminal. Please use the "Download CV" button in the About section.',
  clear: 'CLEAR',
}

export function Terminal() {
  const [history, setHistory] = useState<string[]>(['Welcome to Jenil.Term v1.0.0', 'Type "help" to see available commands.'])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    
    if (!cmd) return

    let response = COMMANDS[cmd] || `Command not found: ${cmd}. Type "help" for options.`
    
    if (response === 'CLEAR') {
      setHistory([])
    } else {
      setHistory([...history, `> ${input}`, typeof response === 'function' ? response() : response])
    }
    
    setInput('')
  }

  if (!isOpen) return (
    <button 
      onClick={() => setIsOpen(true)}
      className="fixed bottom-8 right-8 p-4 bg-primary rounded-full shadow-2xl z-50 hover:scale-110 transition-transform"
    >
      <TerminalIcon className="text-white" />
    </button>
  )

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm"
    >
      {/* Terminal Header */}
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] text-white/40 uppercase tracking-widest font-black flex items-center gap-2">
          <TerminalIcon size={12} /> Jenil.Term -- zsh
        </div>
        <button onClick={() => setIsOpen(false)}><X size={14} className="text-white/40 hover:text-white" /></button>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="p-6 h-64 overflow-y-auto space-y-2 selection:bg-primary/30"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-primary' : 'text-foreground/80 whitespace-pre-wrap'}>
            {line}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex gap-2 items-center">
          <span className="text-primary font-black">➜</span>
          <span className="text-purple-400">~</span>
          <input
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-white w-full"
            placeholder="type a command..."
          />
        </form>
      </div>
    </motion.div>
  )
}
