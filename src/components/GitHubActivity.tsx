'use client'

import { motion } from 'framer-motion'
import { GitBranch, GitCommit, GitPullRequest, Star } from 'lucide-react'

const MOCK_EVENTS = [
  { id: 1, type: 'PushEvent', repo: 'jenilrupapara001/ecommerce-microservices', date: '2 hours ago', message: 'feat: implement saga pattern for payments' },
  { id: 2, type: 'PullRequestEvent', repo: 'jenilrupapara001/ajio-automation', date: '5 hours ago', message: 'docs: update deployment architecture' },
  { id: 3, type: 'WatchEvent', repo: 'jenilrupapara001/cloud-auditor', date: '1 day ago', message: 'Starred by 45 developers' },
  { id: 4, type: 'PushEvent', repo: 'jenilrupapara001/jenil-portfolio-v2', date: '2 days ago', message: 'style: cinematic transformations' },
]

export function GitHubActivity() {
  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-black uppercase tracking-tighter italic">Live Build Feed</h3>
        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-green-400">Syncing...</span>
        </div>
      </div>

      <div className="space-y-3">
        {MOCK_EVENTS.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-primary/30 transition-all flex gap-4 group"
          >
            <div className="p-2 bg-white/5 rounded-lg h-fit group-hover:bg-primary/20 transition-colors">
              {event.type === 'PushEvent' && <GitCommit size={16} className="text-primary" />}
              {event.type === 'PullRequestEvent' && <GitPullRequest size={16} className="text-purple-400" />}
              {event.type === 'WatchEvent' && <Star size={16} className="text-yellow-400" />}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-start">
                <p className="text-[10px] font-mono text-white/40 truncate max-w-[200px]">{event.repo}</p>
                <span className="text-[10px] text-white/20 font-mono">{event.date}</span>
              </div>
              <p className="text-sm font-medium text-foreground/80 group-hover:text-white transition-colors">
                {event.message}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-6 flex justify-center">
        <a 
          href="https://github.com/jenilrupapara001" 
          target="_blank"
          className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 hover:text-primary transition-colors flex items-center gap-2"
        >
          Explore the Full Source Code <GitBranch size={12} />
        </a>
      </div>
    </div>
  )
}
