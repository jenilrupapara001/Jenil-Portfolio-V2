"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center py-6 ${scrolled ? "px-4" : "px-0"
        }`}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex items-center justify-between px-6 md:px-8 py-3 rounded-full border transition-all duration-700 backdrop-blur-3xl shadow-2xl ${scrolled
            ? "bg-black/40 border-white/10 w-full max-w-5xl"
            : "bg-transparent border-transparent w-full max-w-7xl"
            }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group relative z-[101]">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            <span className="text-xl md:text-2xl font-black uppercase tracking-tighter italic leading-none">
              Jenil<span className="text-primary tracking-[-0.1em]">.</span>
            </span>
          </Link>

          {/* Desktop Nav: The Floating Island */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors hover:text-primary z-10"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/[0.05] border border-white/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.5)] transition-all active:scale-95"
            >
              Consult
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[101] p-3 rounded-full bg-white/[0.05] border border-white/10"
            >
              {isOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            {/* Background Kinetic Text */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] select-none">
              <div className="whitespace-nowrap font-black uppercase tracking-[1em] text-[20vw] italic text-white animate-scroll-left">
                Jenil Rupapara • Software Engineer • Problem Solver •
              </div>
            </div>

            <div className="relative z-10 text-center space-y-8 px-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-black uppercase tracking-[0.5em] text-[10px]"
              >
                Navigation Matrix
              </motion.p>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none transition-all hover:text-primary hover:tracking-normal inline-flex items-center gap-4 group"
                    >
                      {link.name}
                      <ArrowRight className="w-8 h-8 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-12 flex flex-col items-center gap-6"
              >
                <div className="h-[1px] w-20 bg-white/10" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Active (IST) • 2026</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
