import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
    SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiFigma,
    SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiVercel,
    SiAmazonwebservices, SiApachekafka, SiRedis, SiDocker, SiPrisma,
    SiFirebase, SiSocketdotio, SiPython, SiGooglecloud, SiFastapi,
    SiFlask, SiPostgresql, SiSqlite, SiMysql, SiGraphql, SiApollographql
} from "react-icons/si";

export const skillCategories = [
    {
        title: "Frontend Engineering",
        slug: "frontend-engineering",
        description: "I specialize in React and Next.js, architecting high-conversion, pixel-perfect user experiences tailored for enterprise and global SaaS brands. My core capabilities include managing complex state workflows with Redux and building aesthetic, responsive motion UI components using Tailwind CSS and Framer Motion.",
        skills: [
            { name: "React.js", slug: "react", icon: SiReact, color: "#61DAFB", experience: "4+ years", bio: "My expertise lies in building scalable, component-based UIs with complex state management and polished animations." },
            { name: "Next.js", slug: "nextjs", icon: SiNextdotjs, color: "#FFFFFF", experience: "3+ years", bio: "I harness the power of Server Components, App Router, and SSR to deliver lightning-fast, SEO-optimized applications." },
            { name: "TypeScript", slug: "typescript", icon: SiTypescript, color: "#3178C6", experience: "3+ years", bio: "I enforce type-safety and robust architecture across large-scale enterprise applications to ensure long-term maintainability." },
            { name: "JavaScript", slug: "javascript", icon: SiJavascript, color: "#F7DF1E", experience: "5+ years", bio: "I have a deep understanding of ES6+, asynchronous programming, and core DOM manipulation." },
            { name: "Tailwind", slug: "tailwind", icon: SiTailwindcss, color: "#06B6D4", experience: "3+ years", bio: "I rapidly build aesthetic, responsive, and performance-first utility-based styling for modern web apps." },
            { name: "Redux", slug: "redux", icon: SiRedux, color: "#764ABC", experience: "3+ years", bio: "I manage global application state with predictable data flows and robust middleware integrations." },
            { name: "HTML5", slug: "html5", icon: SiHtml5, color: "#E34F26", experience: "5+ years", bio: "I structure semantic, accessible web content that performs across all modern browsers." },
            { name: "CSS3", slug: "css3", icon: SiCss3, color: "#1572B6", experience: "5+ years", bio: "I have mastered Flexbox, Grid, and complex CSS animations to create truly immersive digital experiences." },
        ],
    },
    {
        title: "Backend & Systems",
        slug: "backend-systems",
        description: "As a Senior Node.js and MongoDB expert, I engineer scalable, event-driven backends that effortlessly handle thousands of concurrent requests. I utilize PostgreSQL for ACID compliance and Kafka paired with Redis for rapid message streaming in microservice environments.",
        skills: [
            { name: "Node.js", slug: "nodejs", icon: SiNodedotjs, color: "#339933", experience: "4+ years", bio: "I build resilient, event-driven microservices that handle high-concurrency traffic with absolute stability." },
            { name: "Python", slug: "python", icon: SiPython, color: "#3776AB", experience: "2+ years", bio: "I utilize Python for AI integrations, intensive data processing, and scripting automated engineering workflows." },
            { name: "Express", slug: "express", icon: SiExpress, color: "#FFFFFF", experience: "4+ years", bio: "I architect clean, modular RESTful APIs with robust multi-layer middleware and security protocols." },
            { name: "FastAPI", slug: "fastapi", icon: SiFastapi, color: "#009688", experience: "2+ years", bio: "I develop high-performance, asynchronous Python APIs with automatic validation and documentation." },
            { name: "MongoDB", slug: "mongodb", icon: SiMongodb, color: "#47A248", experience: "4+ years", bio: "I design flexible NoSQL schemas and optimize complex queries for extremely large-scale data sets." },
            { name: "PostgreSQL", slug: "postgresql", icon: SiPostgresql, color: "#4169E1", experience: "3+ years", bio: "I implement ACID-compliant relational databases with complex relations, deep indexing, and performance tuning." },
            { name: "Kafka", slug: "kafka", icon: SiApachekafka, color: "#FFFFFF", experience: "2+ years", bio: "I orchestrate event-driven architectures and real-time data streaming between distributed services." },
            { name: "Redis", slug: "redis", icon: SiRedis, color: "#FF4438", experience: "3+ years", bio: "I implement high-speed caching and pub/sub mechanisms to achieve sub-millisecond response times." },
        ],
    },
    {
        title: "Architecture & Tools",
        slug: "architecture-tools",
        description: "I bring CI/CD and DevOps rigor into software lifecycles. My expertise includes configuring scalable multi-region AWS and Google Cloud infrastructure, deploying secure containerized applications with Docker, and establishing strict type-safe schemas.",
        skills: [
            { name: "AWS", slug: "aws", icon: SiAmazonwebservices, color: "#FF9900", experience: "3+ years", bio: "I deploy and manage multi-region cloud infrastructure using S3, EC2, Lambda, and high-availability stacks." },
            { name: "Docker", slug: "docker", icon: SiDocker, color: "#2496ED", experience: "3+ years", bio: "I containerize applications to ensure consistent, secure deployment across fragmented environments." },
            { name: "Google Cloud", slug: "gcp", icon: SiGooglecloud, color: "#4285F4", experience: "2+ years", bio: "I leverage GCP's powerful data and AI tools to build enterprise-grade, intelligence-driven solutions." },
            { name: "Prisma", slug: "prisma", icon: SiPrisma, color: "#2D3748", experience: "2+ years", bio: "I use type-safe ORMs to ensure mission-critical database integrity and accelerate feature delivery." },
            { name: "Github", slug: "github", icon: SiGithub, color: "#FFFFFF", experience: "5+ years", bio: "I implement advanced Git workflows and secure CI/CD pipelines using Github Actions." },
            { name: "Postman", slug: "postman", icon: SiPostman, color: "#FF6C37", experience: "4+ years", bio: "I perform thorough API testing, documentation, and automated validation for complex systems." },
            { name: "Figma", slug: "figma", icon: SiFigma, color: "#F24E1E", experience: "3+ years", bio: "I collaborate on high-fidelity designs and maintain absolute pixel-perfection during development." },
            { name: "Vercel", slug: "vercel", icon: SiVercel, color: "#FFFFFF", experience: "3+ years", bio: "I optimize edge performance and deployment strategies for modern, high-traffic web frameworks." },
        ],
    },
];

export const allSkills = skillCategories.flatMap(cat => cat.skills);

export function getSkillBySlug(slug: string) {
    return allSkills.find(s => s.slug === slug);
}
