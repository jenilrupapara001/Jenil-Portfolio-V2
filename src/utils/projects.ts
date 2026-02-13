export interface Project {
    slug: string;
    title: string;
    description: string;
    problem: string;
    solution: string;
    impact: string;
    features: string[];
    challenges: string[];
    process: string[];
    tags: string[];
    github: string;
    demo: string;
    image: string;
    category: "AI" | "Microservices" | "SaaS";
}

export const projects: Project[] = [
    {
        slug: "ajio-return-tracking",
        title: "Ajio Return Tracking",
        description: "A specialized dashboard for automated return reconciliation and logistics tracking for Ajio sellers.",
        problem: "E-commerce sellers on Ajio struggle with tracking thousands of returns manually, leading to lost inventory and unclaimed refunds.",
        solution: "Developed an automated dashboard that syncs with logistics partners to track return shipments in real-time and flag discrepancies.",
        impact: "Recovered over $50k in lost inventory value by identifying undelivered returns and automating claim filing.",
        features: [
            "Automated Return Status Sync via Logistics APIs",
            "Claim Filing Assistant for Lost/Damaged Shipments",
            "Real-time Analytics on Return Reasons & SKU Performance",
            "Centralized Dashboard for Multi-Account Management",
            "Automated Alerts for stalled or delayed returns"
        ],
        challenges: [
            "Scraping and standardizing data from multiple logistics provider portals.",
            "Handling inconsistent return status updates from courier APIs.",
            "Designing a UI that can handle thousands of active return rows efficiently."
        ],
        process: [
            "Analyzing the return lifecycle of Ajio sellers to identify pain points.",
            "Reverse-engineering courier tracking APIs for real-time status updates.",
            "Building a robust background job system for periodic data syncing.",
            "Designing a high-density data grid for efficient bulk operations."
        ],
        tags: ["Next.js", "Node.js", "Puppeteer", "PostgreSQL"],
        github: "https://github.com/jenilrupapara001/ajio-return-tracking-dashboard",
        demo: "#",
        image: "/projects/ajio.png",
        category: "SaaS"
    },
    {
        slug: "commercex-microservices",
        title: "CommerceX",
        description: "An enterprise-grade e-commerce backend built with an event-driven microservices architecture for massive scalability.",
        problem: "Traditional monolithic commerce platforms suffer from tight coupling, making them difficult to scale and prone to single-point failures.",
        solution: "Architected a decentralized system using Node.js and Kafka, implementing a database-per-service pattern and asynchronous event streaming.",
        impact: "Achieved 99.9% fault isolation and significantly reduced system latency through Redis read-aside caching.",
        features: [
            "Event-Driven Communication via Apache Kafka",
            "Database-Per-Service Pattern (MongoDB, PostgreSQL)",
            "Centralized API Gateway with Rate Limiting",
            "Distributed Tracing & Monitoring Integration",
            "Redis-based High-Performance Caching Layer"
        ],
        challenges: [
            "Managing eventual consistency across multiple distributed databases.",
            "Handling partial system failures without impacting customer experience.",
            "Implementing complex saga patterns for multi-service transactions."
        ],
        process: [
            "Defining service boundaries using Domain-Driven Design (DDD).",
            "Designing schemas for Order, Product, and Payment services.",
            "Implementing Kafka producers/consumers for asynchronous workflows.",
            "Deploying on Kubernetes with auto-scaling configurations."
        ],
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
        features: [
            "Live Seller Growth Analytics Dashboard",
            "Automated Onboarding Documentation Workflow",
            "Real-time Lead Distribution System",
            "Role-Based Access Control (RBAC) for Partners",
            "Seamless Integration with Internal Alibaba APIs"
        ],
        challenges: [
            "Syncing large datasets from legacy systems into Supabase real-time.",
            "Optimizing dashboard performance for low-bandwidth environments.",
            "Ensuring strict data privacy for over 500+ competing sellers."
        ],
        process: [
            "Stakeholder interviews to define core KPI requirements.",
            "Prototyping UI/UX for high-density data visualization.",
            "Implementing Row-Level Security (RLS) policies in Supabase.",
            "Developing edge functions for complex server-side logic."
        ],
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
        features: [
            "Automated Payment Installment Tracking",
            "PDF Progress Report Generation",
            "iOS-Inspired Dark Mode UI Workspace",
            "Centralized Client & Property Database",
            "Instant Notification System for Overdue Payments"
        ],
        challenges: [
            "Designing a flexible payment schedule engine for custom real estate deals.",
            "Creating a visually premium dashboard that remains highly functional.",
            "Ensuring data integrity across complex client-property relationships."
        ],
        process: [
            "Analyzing manual Excel workflows to identify automation points.",
            "Designing the database schema with Mongoose for deep nesting.",
            "Crafting the UI using Framer Motion for smooth interactions.",
            "Implementing secure file upload and PDF generation on the backend."
        ],
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
        features: [
            "Automated Metal Scrap & Production Tracking",
            "Batch Invoice Processing & Tax Calculation",
            "Production Status Timeline Visualization",
            "Multi-tenant Architecture for Multiple Branches",
            "Exportable Data Insights for Financial Audits"
        ],
        challenges: [
            "Implementing type-safe database queries for complex metal calculations.",
            "Handling multi-tenant data isolation at the ORM level.",
            "Optimizing complex SQL queries via Prisma for fast reporting."
        ],
        process: [
            "Mapping out production life-cycles in the metal manufacturing industry.",
            "Building a unified TypeScript type system for the entire stack.",
            "Developing the multi-tenant middleware and auth system.",
            "Setting up automated CI/CD pipelines for production deployments."
        ],
        tags: ["TypeScript", "Prisma", "React", "Node.js"],
        github: "https://github.com/jenilrupapara001/metalex-dashboard",
        demo: "#",
        image: "/projects/metalex.png",
        category: "SaaS"
    }
];
