import Image from 'next/image'

export function AuthorBox() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-8 mt-16 backdrop-blur-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors" />
      
      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <Image
          src="/og-image.jpg" // Using available image since avatar wasn't found
          alt="Jenil Rupapara"
          width={100}
          height={100}
          className="rounded-full relative border-2 border-primary/20 object-cover w-24 h-24"
        />
      </div>

      <div className="relative text-center sm:text-left">
        <h3 className="font-bold text-2xl italic uppercase tracking-tight">
          About <span className="text-primary">Me</span>
        </h3>
        <p className="text-foreground/70 text-sm mt-3 leading-relaxed max-w-xl">
          I'm a Senior MERN Stack Developer specializing in scalable web applications, 
          microservices architecture, and high-performance system design. 
          I focus on building ROI-driven solutions for global SaaS startups 
          and enterprise-grade systems.
        </p>
        
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6">
          <a href="https://github.com/jenilrupapara001" 
             className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors border border-primary/20 hover:border-primary px-4 py-2 rounded-full"
             target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/jenilrupapara-fullstack-developer" 
             className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors border border-primary/20 hover:border-primary px-4 py-2 rounded-full"
             target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="/contact" 
             className="text-[10px] font-black uppercase tracking-widest text-white bg-primary px-4 py-2 rounded-full hover:shadow-[0_0_20px_-5px_rgba(var(--primary-rgb),0.5)] transition-all">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  )
}
