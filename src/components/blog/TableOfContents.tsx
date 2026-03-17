'use client'
import { useEffect, useState } from 'react'

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-20% 0% -80% 0%' }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm"
    >
      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
        <span className="text-primary italic">📑</span> Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li key={id} style={{ paddingLeft: `${(level - 2) * 16}px` }}>
            <a
              href={`#${id}`}
              className={`text-sm hover:text-primary transition-colors block py-0.5 ${
                activeId === id ? 'text-primary font-medium border-l-2 border-primary pl-2 -ml-2' : 'text-foreground/60'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
