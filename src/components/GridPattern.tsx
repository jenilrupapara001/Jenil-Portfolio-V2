'use client'

interface GridPatternProps {
  className?: string;
  opacity?: number;
}

export function GridPattern({ className = "", opacity }: GridPatternProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          opacity: opacity !== undefined ? opacity : 0.03,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10
                      rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10
                      rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  )
}
