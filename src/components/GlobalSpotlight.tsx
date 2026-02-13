"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalSpotlight() {
    const spotlightX = useMotionValue(0);
    const spotlightY = useMotionValue(0);
    const [mounted, setMounted] = useState(false);

    // Smooth springs for the spotlight movement
    const springConfig = { damping: 50, stiffness: 300 };
    const smoothX = useSpring(spotlightX, springConfig);
    const smoothY = useSpring(spotlightY, springConfig);

    useEffect(() => {
        setMounted(true);
        const handleGlobalMouseMove = (e: MouseEvent) => {
            spotlightX.set(e.clientX);
            spotlightY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleGlobalMouseMove);
        return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
    }, [spotlightX, spotlightY]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030303]">
            {/* Immersive Background Features */}

            {/* Dynamic Cursor Spotlight */}
            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                    transform: "translate(-50%, -50%)"
                }}
                className="absolute w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen opacity-70"
            />

            {/* Static Background Accents */}
            <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse delay-1000" />

            {/* Global Interactive Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] contrast-150 brightness-50" />

            {/* Grain/Noise for Depth */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] filter brightness-100" />
        </div>
    );
}
