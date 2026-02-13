export interface Project {
    slug: string;
    title: string;
    description: string;
    problem: string;
    solution: string;
    impact: string;
    tags: string[];
    github: string;
    demo: string;
    image: string;
    category: "AI" | "Microservices" | "SaaS";
}

export const projects: Project[] = [
    {
        slug: "vyapaarsetu-ai",
        title: "VyapaarSetu AI",
        description: "An AI-powered autonomous commerce system designed to empower Indian sellers via voice and visual recognition.",
        problem: "Rural Indian sellers face significant barriers in creating professional digital listings due to language gaps and technical complexity.",
        solution: "Engineered a multilingual AI agent using Gemini and Whisper that generates professional listings from simple voice descriptions and product photos.",
        impact: "Enabled 100% autonomous listing generation in local dialects, reducing onboarding time from days to minutes.",
        tags: ["Python", "Gemini AI", "FastAPI", "Pinecone"],
        github: "https://github.com/jenilrupapara001/vyapaarsetu-ai-bharat",
        demo: "#",
        image: "/projects/vyapaarsetu.png",
        category: "AI"
    },
    {
        slug: "commercex-microservices",
        title: "CommerceX",
        description: "An enterprise-grade e-commerce backend built with an event-driven microservices architecture for massive scalability.",
        problem: "Traditional monolithic commerce platforms suffer from tight coupling, making them difficult to scale and prone to single-point failures.",
        solution: "Architected a decentralized system using Node.js and Kafka, implementing a database-per-service pattern and asynchronous event streaming.",
        impact: "Achieved 99.9% fault isolation and significantly reduced system latency through Redis read-aside caching.",
        tags: ["Node.js", "Kafka", "MongoDB", "Redis"],
        github: "https://github.com/jenilrupapara001/commercex-event-driven-microservices",
        demo: "#",
        image: "/projects/commercex.png",
        category: "Microservices"
    },
    {
        slug: "grownext-in",
        title: "Grownext.in",
        description: "The official partner portal for Alibaba.com operations in India, facilitating seller onboarding and growth analytics.",
        problem: "Alibaba's Indian partners lacked a unified dashboard to track seller performance and lead generation in real-time.",
        solution: "Developed a high-performance portal using Next.js and Supabase, featuring real-time analytics and streamlined onboarding workflows.",
        impact: "Improved operational efficiency by 40% and provided actionable insights to over 500+ B2B sellers.",
        tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
        github: "https://github.com/jenilrupapara001/Grownext.in",
        demo: "https://grownext.in",
        image: "/projects/grownext.png",
        category: "SaaS"
    },
    {
        slug: "bavadiya-realty",
        title: "Bavadiya Realty Dashboard",
        description: "A production-ready real estate management system with a focus on payment tracking and automated reporting.",
        problem: "Real estate teams were overwhelmed by manual payment tracking and fragmented reporting, leading to 10+ hours of wasted time weekly.",
        solution: "Built a centralized MERN dashboard with JWT security and automated report generation, focusing on a premium iOS-inspired user experience.",
        impact: "Reduced manual administrative workload by 85% and eliminated payment reconciliation errors.",
        tags: ["React", "Node.js", "MongoDB", "JWT"],
        github: "https://github.com/jenilrupapara001/bavadiya-realty-dashboard",
        demo: "#",
        image: "/projects/bavadiya.png",
        category: "SaaS"
    },
    {
        slug: "metalex-saas",
        title: "Metalex SaaS",
        description: "A comprehensive SaaS platform for automated invoice generation and production workflow management.",
        problem: "Invoicing and production tracking in the metal industry were largely paper-based, causing 2-day delays in document processing.",
        solution: "Designed a robust SaaS platform using Prisma and TypeScript that automates PDF generation and real-time production tracking.",
        impact: "Reduced document processing time from 48 hours to 15 minutes, significantly accelerating the cash flow cycle.",
        tags: ["TypeScript", "Prisma", "React", "Node.js"],
        github: "https://github.com/jenilrupapara001/metalex-dashboard",
        demo: "#",
        image: "/projects/metalex.png",
        category: "SaaS"
    }
];
