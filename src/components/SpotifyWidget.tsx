'use client'

import { motion } from 'framer-motion'
import { Music2 } from 'lucide-react'

export function SpotifyWidget() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-8 left-8 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-4 z-50 group hover:border-green-500/50 transition-colors hidden md:flex"
    >
      <div className="relative w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden">
        <Music2 className="text-green-500 w-6 h-6 animate-pulse" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-green-500 animate-[bounce_1s_infinite]" />
      </div>
      <div className="space-y-1">
        <p className="text-[8px] font-black uppercase tracking-[0.3em] text-green-500/60">Not Playing / Coding</p>
        <p className="text-xs font-bold text-white/80 group-hover:text-green-400 transition-colors truncate max-w-[120px]">
          Deep Work Beats
        </p>
      </div>
    </motion.div>
  )
}
