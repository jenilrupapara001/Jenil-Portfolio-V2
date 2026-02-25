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
        title: "Ajio Return Tracking Dashboard",
        description: "An enterprise-grade logistics automation platform designed for high-volume Ajio sellers to manage returns and claiming workflows. Built for operational velocity and multi-market scale, this dashboard serves as the central nervous system for e-commerce reconciliation.",
        problem: "Modern e-commerce sellers on platforms like Ajio face a significant bottleneck: the return lifecycle. With thousands of products being returned monthly, manual tracking through multiple courier portals is not only inefficient but also prone to massive revenue leakage. Sellers often lose up to 15% of their inventory value due to 'stuck' returns that are never delivered back and for which claims are never filed. The lack of a centralized, automated system for verifying return delivery and automating the claim process was a multi-million dollar problem for mid-market sellers.",
        solution: "I architected and developed an automated reconciliation engine that interfaces directly with courier APIs (Delhivery, BlueDart, Ecom Express). The system utilizes a background worker pool built with BullMQ and Redis to periodically sync shipment statuses. I implemented a custom web scraper using Puppeteer for couriers without public APIs, ensuring 100% data coverage. The frontend features a high-performance data grid built with TanStack Table and Framer Motion, allowing sellers to traverse 10,000+ return rows with sub-second latency. The core logic involves a state machine that tracks every return from 'Requested' to 'Delivered' or 'Claimed', automatically flagging any shipment that stays in a 'Stale' state for more than 72 hours.",
        impact: "The platform has successfully recovered over $50,000 in lost inventory value for early adopters, providing a verifiable ROI within 100 days. Achieved a 99.8% accuracy rate in automated claim identification, significantly outperforming manual US/UK market standards for logistics reconciliation.",
        features: [
            "Automated Return Status Sync via Multi-Carrier Logistics APIs",
            "Smart Claim Filing Assistant with Automated Evidence Generation",
            "Real-time Financial Impact Analytics & SKU-level Performance",
            "Centralized Multi-Account Management for Enterprise Sellers",
            "Automated Alert System for Stalled or Delayed Shipments (>72h)",
            "Dynamic Reporting Engine for Tax and Audit Compliance"
        ],
        challenges: [
            "API Rate Limiting: Overcoming aggressive rate limits from logistics providers by implementing a sophisticated request queue with exponential backoff.",
            "Data Standardization: Normalizing inconsistent shipment statuses (e.g., 'In Transit' vs 'Out for Delivery') across 10+ different courier protocols into a unified state machine.",
            "Performance at Scale: Optimizing PostgreSQL queries and implementing Redis-based Materialized Views to maintain fast dashboard load times as the dataset grew to millions of rows."
        ],
        process: [
            "Phase 01: Requirement discovery and logistics lifecycle mapping with senior e-commerce consultants.",
            "Phase 02: Architecture design focusing on background worker reliability and data integrity.",
            "Phase 03: Developing the scraping and API integration layer to ensure robust data ingestion.",
            "Phase 04: Crafting the high-density UI/UX with a focus on operational velocity and dark-mode aesthetics.",
            "Phase 05: Rigorous testing with real-world datasets to calibrate the 'Stale Return' detection algorithms."
        ],
        tags: ["Next.js", "Node.js", "Redis", "PostgreSQL", "BullMQ", "Puppeteer"],
        github: "https://github.com/jenilrupapara001/ajio-return-tracking-dashboard",
        demo: "#",
        image: "/ajio.png",
        category: "SaaS"
    },
    {
        slug: "commercex-microservices",
        title: "CommerceX: Event-Driven Microservices",
        description: "A high-availability, decentralized e-commerce engine architected for global scale. Experience a system where every transaction is an event, and every service is an independent unit of power.",
        problem: "Traditional monolithic e-commerce platforms are brittle. A failure in the payment gateway can bring down the entire storefront. Moreover, scaling a monolith requires scaling the whole application, leading to wasted cloud resources and high costs. For enterprises handling thousands of requests per second, the 'Sync' nature of monoliths creates massive latency bottlenecks during peak seasons like Black Friday.",
        solution: "I designed CommerceX using an event-driven architecture powered by Apache Kafka. The system is split into specialized domains: Order, Product, Payment, Inventory, and Notification. Each service follows the 'Database-per-Service' pattern using a mix of MongoDB (for flexible catalogs) and PostgreSQL (for ACID-compliant orders). I implemented the Saga pattern (Choreography-based) to manage distributed transactions across services, ensuring eventual consistency without the overhead of two-phase commits. The system uses Redis as an 'Edge Cache' to reduce database load by 60%, and an API Gateway with custom Rate Limiting middleware to protect against DDoS and API abuse. Distributed tracing via OpenTelemetry was integrated for sub-millisecond visibility into inter-service latency.",
        impact: "The architecture achieved 99.99% fault isolation—a failure in the Notification service does not stop orders from being placed. System throughput increased by 400% compared to a baseline monolith during stress tests. Latency for checkout operations was reduced from 800ms to 120ms through asynchronous record processing. This project serves as a blueprint for enterprise-grade digital commerce transformation.",
        features: [
            "Asynchronous Event Streaming via Apache Kafka",
            "Distributed Transaction Management (Choreography Saga)",
            "Polyglot Persistence Layer (MongoDB + PostgreSQL)",
            "Centralized API Gateway with Global Rate Limiting",
            "Distributed Caching with Redis Read-Aside Pattern",
            "Full Observability with Structured Logging & Distributed Tracing"
        ],
        challenges: [
            "Event Ordering: Ensuring that 'Order Placed' events are always processed before 'Payment Processed' events in a highly parallel Kafka cluster.",
            "Managing Eventual Consistency: Developing robust compensating transactions to handle failures in the middle of a distributed workflow.",
            "Service Discovery: Implementing a resilient service mesh and registry to manage communication between 10+ dynamic containers."
        ],
        process: [
            "Phase 01: Domain decomposition and identifying bounded contexts using Domain-Driven Design.",
            "Phase 02: Designing the Event Schema and Kafka Topic architecture for maximum decoupled flow.",
            "Phase 03: Implementation of individual services with strict Docker-based isolation.",
            "Phase 04: Integrating the API Gateway and implementing security protocols (JWT, CORS, Rate Limits).",
            "Phase 05: Chaos engineering and load testing to verify system resilience under partial failure."
        ],
        tags: ["Node.js", "Kafka", "Docker", "MongoDB", "Redis", "TypeScript"],
        github: "https://github.com/jenilrupapara001/commercex-event-driven-microservices",
        demo: "#",
        image: "/commercex.png",
        category: "Microservices"
    },
    {
        slug: "gms-report-dashboard",
        title: "GMS Report Dashboard: Enterprise Amazon BI",
        description: "A comprehensive Business Intelligence (BI) dashboard for Amazon sellers, featuring OKR tracking, task management, ASIN analytics, and AI-powered goal generation.",
        problem: "Amazon sellers often deal with fragmented data, making it difficult to track strategic goals (OKRs), manage daily operations, and optimize product performance (ASINs) in real-time. Manual reporting and lack of AI-driven insights lead to operational inefficiencies and missed growth opportunities.",
        solution: "I developed a full-stack BI ecosystem using the MERN stack with React 19 and Tailwind CSS 4. The platform integrates Perplexity AI for automated OKR generation and task suggestions. It features a real-time notification system via Socket.io and SSE, and a sophisticated ASIN analytics engine that tracks BSR, price trends, and LQS over 12-week windows. The system also includes a hierarchical RBAC system and CometChat integration for vendor communication.",
        impact: "Streamlined corporate-level OKR tracking for high-volume Amazon brands. Reduced time spent on manual task reporting and goal setting by leveraging AI-powered breakdowns. Enhanced data visibility for Brand Managers through automated ASIN trend analysis, leading to more responsive pricing and inventory strategies.",
        features: [
            "AI-Powered OKR Engine: Automated monthly/weekly goal breakdown via Perplexity AI",
            "Advanced ASIN Analytics: 12-week historical tracking of Price, BSR, and LQS trends",
            "Real-time Operational Pulse: Socket.io & SSE-driven task updates and notifications",
            "Hierarchical RBAC: Granular access control for Admins, Brand Managers, and Researchers",
            "Integrated Communication: Native vendor messaging powered by CometChat sync",
            "Automated FBA & Referral Fee Engine: Real-time profitability calculations"
        ],
        challenges: [
            "Real-time Synchronization: Ensuring consistent task states across multiple users using a combination of Socket.io and SSE.",
            "AI Resilience: Implementing robust JSON parsing and error handling for LLM-generated OKR structures.",
            "Data Isolation: Engineering a multi-tenant data layer that strictly separates seller data between different Brand Managers."
        ],
        process: [
            "Phase 01: Requirement analysis for high-volume Amazon seller operations and OKR workflows.",
            "Phase 02: Designing the MERN architecture with a focus on real-time updates and AI integration.",
            "Phase 03: Developing the ASIN tracking engine and fee calculation logic.",
            "Phase 04: Building the AI-powered OKR generation pipeline and hierarchical RBAC system.",
            "Phase 05: Deployment and optimization on Vercel and Render with automated sync scripts."
        ],
        tags: ["React", "Node.js", "MongoDB", "AI", "Socket.io", "Tailwind"],
        github: "https://github.com/jenilrupapara001/retail-ops.git",
        demo: "https://retail-ops-black.vercel.app",
        image: "/gms.png",
        category: "SaaS"
    },
    {
        slug: "bavadiya-realty",
        title: "Bavadiya Realty: Enterprise Management",
        description: "A premium real estate management system focusing on high-stakes payment tracking, automated project reporting, and CRM capabilities.",
        problem: "The management of luxury real estate projects involves complex payment schedules, dozens of clients, and high-frequency document generation. Bavadiya Realty was losing over 10 hours weekly to manual spreadsheet updates and faced frequent errors in payment reconciliation. Clients lacked transparency into their payment status, leading to constant phone inquiries and administrative overload.",
        solution: "I built a centralized MERN (MongoDB, Express, React, Node.js) ecosystem that serves as a single source of truth. I engineered a custom 'Payment Engine' that calculates complex installment schedules based on dynamic construction milestones. I integrated an automated PDF generation service (using Puppeteer and PDFLib) that allows admins to generate professional payment receipts and project progress reports with one click. The UI was designed with a 'Glassmorphic' aesthetic using Tailwind CSS and Framer Motion, providing a premium experience that matches the luxury nature of the real estate firm. Security was implemented via JWT with HTTP-only cookies and a robust middleware layer for role-based access.",
        impact: "Manual administrative tasks were reduced by 85%. Automated payment tracking eliminated all previous reconciliation errors, saving the firm thousands in potential accounting fees. Client satisfaction improved significantly as they now receive instant, professional digital receipts instead of waiting for days for manual confirmation.",
        features: [
            "Automated Installment Calculation & Recovery Tracking",
            "One-click PDF Progress Report & Invoice Generation",
            "Premium Dark-Mode Workspace with Fluid Micro-interactions",
            "Centralized Property-Client Relationship Mapping Engine",
            "Proactive Notification System for Overdue Payments",
            "Financial Audit Logs for Internal Compliance & Integrity"
        ],
        challenges: [
            "Dynamic Pricing Logic: Building a flexible engine that can handle custom discounts, interest rates, and installment variations per client.",
            "State Management: Managing a complex global state for filtered property grids and real-time payment updates.",
            "Visual Excellence: Maintaining a 60fps UI performance while utilizing heavy backdrop blurs and complex SVG animations."
        ],
        process: [
            "Phase 01: Audit of existing manual Excel flows and identifying calculation edge cases.",
            "Phase 02: Schema design in Mongoose focusing on deeply nested relations between units and clients.",
            "Phase 03: Backend API development with a focus on PDF generation and security.",
            "Phase 04: Frontend implementation using a modern component library and motion design.",
            "Phase 05: Stress testing the calculation engine with 5 years of historical payment data."
        ],
        tags: ["React", "Node.js", "MongoDB", "Framer Motion", "Puppeteer"],
        github: "https://github.com/jenilrupapara001/bavadiya-realty-dashboard",
        demo: "https://bavadiyarealty.vercel.app/",
        image: "/bavadiya.png",
        category: "SaaS"
    },
    {
        slug: "metalex-saas",
        title: "Metalex: Industrial SaaS Platform",
        description: "A specialized ERP solution for the metal manufacturing industry, focusing on scrap tracking, automated invoicing, and production workflows.",
        problem: "Small to medium metal manufacturers often rely on paper-based tracking for raw materials and scrap, leading to massive data inaccuracies. For Metalex, processing a single invoice took up to 48 hours because it required manual verification of production logs across multiple departments. The lack of a real-time production timeline resulted in frequent delivery delays and frustrated B2B clients.",
        solution: "I designed a robust SaaS platform using TypeScript and Prisma ORM to provide complete type-safety across the stack. I implemented a multi-tenant architecture that allows the platform to serve multiple branches with strict data isolation. I engineered a 'Batch Processing' engine that automates tax calculations and invoice generation for hundreds of production units simultaneously. To solve the timeline problem, I built a custom Gantt-style production tracker that visualizes the status of every metal batch from 'Melt' to 'Shipping'. The backend utilizes PostgreSQL with advanced indexing to handle complex aggregations of metal weights and scrap percentages in real-time.",
        impact: "Document processing time was reduced from 48 hours to just 15 minutes. The production team now has 100% visibility into material loss, allowing them to optimize the melting process and reduce scrap by 12%. The platform has become the backbone of the factory's digital transformation, enabling them to scale their production volume by 30% without hiring additional administrative staff.",
        features: [
            "Automated Metal Scrap & Production Tracking Pipeline",
            "Batch Invoice Processing with Dynamic Tax Engine",
            "Real-time Production Timeline & Workflow Visualization",
            "Multi-tenant Architecture with Branch-level Isolation",
            "Comprehensive Exportable Data Insights for Financial Audits",
            "Digital Weighbridge Integration for Automated Data Entry"
        ],
        challenges: [
            "Type Safety: Managing complex unit conversions (MT, KG, PCs) across the entire application using a unified TypeScript system.",
            "Multi-tenancy: Implementing efficient data filtering at the Prisma middleware level to prevent cross-tenant data leaks.",
            "Query Optimization: Fine-tuning recursive SQL queries to calculate production yields across multiple stages of manufacturing."
        ],
        process: [
            "Phase 01: Process discovery at the factory floor to understand the physical production flow.",
            "Phase 02: Developing the multi-tenant core and authentication infrastructure.",
            "Phase 03: Building the automated invoicing and industrial calculation engine.",
            "Phase 04: Frontend development of the production visualization tools.",
            "Phase 05: Deployment on AWS with automated backup and disaster recovery protocols."
        ],
        tags: ["TypeScript", "Prisma", "PostgreSQL", "React", "Node.js"],
        github: "https://github.com/jenilrupapara001/metalex-dashboard",
        demo: "",
        image: "/metalex.png",
        category: "SaaS"
    },
    {
        slug: "dealflow-crm",
        title: "DealFlow CRM: Elite Sales Workspace",
        description: "A premium, high-fidelity SaaS CRM workspace designed for high-performance international sales teams. DealFlow unifies lead management and advanced BI into a cinematic interface, engineered for US/UK market standards of data mobility and performance.",
        problem: "Sales teams often struggle with fragmented tools and cluttered interfaces that hinder productivity. The challenge was to create a unified, high-performance CRM that combines powerful analytics with an elite, distraction-free user experience, while ensuring data security and scalability for enterprise-level operations.",
        solution: "I architected and developed a comprehensive CRM solution using the MERN stack. The frontend leverages React 18, Framer Motion for cinematic transitions, and a custom Tailwind CSS glassmorphic design system. I implemented complex data visualizations with Recharts for 12-month trailing revenue and funnel velocity. The backend build with Node.js and Express follows a structured MVC architecture, utilizing MongoDB for scalable data modeling. Features include a fluid Kanban board, automated outreach engines, and a robust RBAC foundation for secure, role-based access control.",
        impact: "The platform delivers a production-ready CRM experience with a 75% improvement in UI fluidness and data accessibility compared to traditional sales dashboards. By automating lead distribution and outreach tracking, it significantly reduces administrative overhead for sales managers. The integrated analytics provide real-time strategic insights, enabling data-driven decision-making for high-stakes sales environments.",
        features: [
            "Advanced BI: 12-month Trailing Revenue & Funnel Velocity Analytics",
            "Elite Pipeline Management: Fluid Kanban Boards with Real-time Metric Updates",
            "Enterprise Lead Management: Bulk Pursuit & Smart Assignment Engine",
            "Automated Outreach 2.0: Campaign Engine with Engagement Insights",
            "Restricted Demo Mode & RBAC: Security-optimized middleware for public showcases",
            "Data Mobility: Native CSV Import/Export for seamless scaling"
        ],
        challenges: [
            "High-Fidelity Transitions: Managing complex Framer Motion animations across heavy data grids without sacrificing 60fps performance.",
            "Stateless Security: Implementing a secure JWT-based authentication system with restricted demo modes and multi-role access control.",
            "Real-time Intelligence: Optimizing MongoDB queries to recalculate complex deal values and stage occupancy in real-time."
        ],
        process: [
            "Phase 01: Concept design focus on premium glassmorphic aesthetics and sales workflows.",
            "Phase 02: Architecting the MERN backend with MVC patterns and security-first middleware.",
            "Phase 03: Developing the core CRM components (Kanban, BI Charts) and motion design system.",
            "Phase 04: Engineering the automated outreach engine and data mobility features.",
            "Phase 05: Stress testing with realistic seed data and optimizing for production deployment."
        ],
        tags: ["React", "Node.js", "MongoDB", "Framer Motion", "Recharts", "Tailwind"],
        github: "https://github.com/jenilrupapara001/DealFLow",
        demo: "https://dealflow-demo.vercel.app",
        image: "/dealflow.png",
        category: "SaaS"
    },
    {
        slug: "leadintel-ai",
        title: "LeadIntelAI: Intelligent Prioritization",
        description: "An AI-powered lead intelligence platform that transforms raw data into actionable sales signals. LeadIntelAI automates enrichment and scoring to ensure sales teams focus on high-intent opportunities.",
        problem: "Sales teams often waste 50% of their time chasing low-quality leads due to a lack of behavioral insights and manual enrichment bottlenecks. Without a smart prioritization layer, high-value prospects often go unnoticed in a sea of static data.",
        solution: "I built LeadIntelAI using Next.js 15 and OpenAI's latest models to create an autonomous enrichment pipeline. The system captures behavioral signals and utilizes an AI scoring engine to rank leads based on conversion probability. I implemented a real-time dashboard with TypeScript and PostgreSQL, ensuring sub-second data updates and clean project visualization.",
        impact: "Significantly increased sales efficiency by reducing lead qualification time. Early internal benchmarks show a 35% improvement in conversion-to-demo rates by prioritizing high-intent activity signals over static demographic data.",
        features: [
            "Autonomous Lead Enrichment via OpenAI & Custom ML Models",
            "Dynamic Intent Scoring based on Behavioral Signal Analysis",
            "Real-time Prioritization Dashboard with Next.js App Router",
            "Seamless CRM Integration for Automated Workflow Triggering",
            "Advanced Data Layer powered by PostgreSQL & Redis Caching",
            "Type-safe Architecture with full TypeScript 5 Integration"
        ],
        challenges: [
            "Data Accuracy: Calibrating LLM prompts to ensure consistently high-quality enrichment from unstructured web data.",
            "Real-time Processing: Scaling the enrichment pipeline to handle thousands of events without blocking the main dashboard thread.",
            "Visual Clarity: Designing a high-density intelligence UI that remains intuitive for fast-moving sales representatives."
        ],
        process: [
            "Phase 01: Defining lead scoring heuristics and identifying key intent signals.",
            "Phase 02: Developing the enrichment microservice with OpenAI integration.",
            "Phase 03: Building the real-time prioritization UI with Next.js 15.",
            "Phase 04: Engineering the data persistence layer for high-frequency updates.",
            "Phase 05: Validating scoring accuracy with historical sales datasets."
        ],
        tags: ["Next.js", "OpenAI", "TypeScript", "PostgreSQL", "Redis", "Tailwind"],
        github: "https://github.com/jenilrupapara001/LeadIntelAI",
        demo: "https://leadintelai.vercel.app/",
        image: "/hero-architecture.png",
        category: "AI"
    },
    {
        slug: "vyapaarsetu-ai",
        title: "VyapaarSetu: AI Commerce Agent",
        description: "An autonomous AI commerce ecosystem designed to empower small Indian sellers. VyapaarSetu leverages vision and voice AI to democratize access to digital commerce platforms like ONDC.",
        problem: "Millions of small-scale sellers in India are excluded from the digital economy due to technical complexity and language barriers. The process of listing products, managing inventory, and communicating with customers online is often overwhelming for non-tech-savvy individuals.",
        solution: "I architected an autonomous agent system that uses Vision AI for 'Photo-to-Listing' automation and a multilingual Voice AI interface. Built on an event-driven microservices architecture with Apache Kafka, the system orchestrates multiple AI agents to handle cataloging, pricing, and customer support. The mobile-first interface supports 9+ regional languages, allowing sellers to manage their entire store via voice commands.",
        impact: "Creating a pathway for small businesses to enter the ONDC ecosystem with zero technical friction. The platform has the potential to multiply a local seller's customer base by providing them with the same technological leverage as large-scale enterprise retailers.",
        features: [
            "AI Vision: Automated attribute extraction from product photos",
            "Voice-First Interface: Native support for 9+ Indic languages",
            "Autonomous Cataloging Agent with Dynamic LLM Pricing",
            "Event-Driven Microservices orchestrated via Apache Kafka",
            "WhatsApp Commerce Integration for Seamless Buyer Connection",
            "Offline-First Capability for Low-Bandwidth Environments"
        ],
        challenges: [
            "Linguistic Nuance: Tuning STT models (Whisper/IndicWav2Vec) to handle regional dialects with over 90% accuracy.",
            "Distributed State: Managing consistent catalog states across multiple autonomous agents in a decentralized system.",
            "Mobile Performance: Optimizing heavy AI-driven features to run smoothly on mid-range Android devices."
        ],
        process: [
            "Phase 01: Field research to understand the listing bottlenecks for local sellers.",
            "Phase 02: Designing the multi-agent orchestration layer and event schema.",
            "Phase 03: Developing the Vision AI pipeline for automated attribute extraction.",
            "Phase 04: Integrating the multilingual voice engine and WhatsApp gateway.",
            "Phase 05: Pilot testing with local artisans to refine the voice interaction flow."
        ],
        tags: ["Python", "Kafka", "PostgreSQL", "React Native", "Vision AI", "LLMs"],
        github: "https://github.com/jenilrupapara001/vyapaarsetu-ai-bharat",
        demo: "#",
        image: "/vyapaarsetu.png",
        category: "AI"
    },
    {
        slug: "grownext-official",
        title: "Grownext.in: Company Platform",
        description: "The official digital platform for Grownext.in, an Alibaba.com Channel Partner. This is a live production system facilitating global B2B trade and SME onboarding.",
        problem: "Grownext needed a high-performance portal to bridge the gap between Indian manufacturers and global buyers, requiring secure multi-tenant onboarding and enterprise-grade SEO.",
        solution: "I architected the official company site using Next.js 15, focusing on a premium 'Global Authority' aesthetic. The system handles secure B2B authentication via NextAuth and provides SMEs with a streamlined pipeline to the Alibaba ecosystem. I implemented an optimized SEO engine that maintains 95+ scores while delivering cinematic UX with Framer Motion.",
        impact: "Successfully facilitated 10K+ global export inquiries and onboarded over 500 manufacturers. The platform has become the digital foundation for Grownext's status as a top-tier Alibaba Channel Partner.",
        features: [
            "Official Company Portal & Alibaba Channel Partner Integration",
            "Secure B2B Multi-tenant Onboarding for Manufacturers",
            "Next.js 15 Enterprise Architecture with App Router",
            "High-Performance SEO Engine with Global Reach Optimization",
            "Cinematic B2B User Experience with Motion Design",
            "Real-time Lead Ingestion and Partner Management"
        ],
        challenges: [
            "Global Performance: Ensuring fast load times for B2B partners across disparate geographical locations.",
            "Brand Authority: Balancing complex industrial information with a modern, high-trust visual language.",
            "Scalability: Engineering the data foundation to support rapid SME onboarding and lead volume growth."
        ],
        process: [
            "Phase 01: Strategic alignment with Grownext's channel partnership goals.",
            "Phase 02: Researching B2B user experience patterns for international trade.",
            "Phase 03: Developing the secure enterprise core and partner portal.",
            "Phase 04: Crafting the cinematic frontend and brand-aligned motion design.",
            "Phase 05: Deployment and continuous SEO performance monitoring."
        ],
        tags: ["Company Website", "Next.js", "TypeScript", "Supabase", "Framer Motion", "SEO"],
        github: "https://github.com/jenilrupapara001",
        demo: "https://grownext.in",
        image: "/grownext.png",
        category: "SaaS"
    },
    {
        slug: "portfolio-v2",
        title: "Portfolio V2: Cinematic Showcase",
        description: "The official version of my developer portfolio, showcasing cinematic, high-performance web architecture. Re-engineered with Next.js 15 to demonstrate senior-level technical excellence for global markets including the US and UK.",
        problem: "Developer portfolios often fall into two traps: they are either too static and boring, or too heavy and slow. The challenge was to create a visual-first experience that feels premium and 'alive' while maintaining exceptional Core Web Vitals.",
        solution: "I built this version using Next.js 15 (App Router) and capitalized on the latest Tailwind CSS 4 features for styling. The core focus was on 'Motion as a Narrative'—using Framer Motion Scroll and Layout animations to guide the user through my projects. I implemented a robust project specification system and a dynamic blog engine, all served with sub-second response times through optimal server-side rendering and edge deployment.",
        impact: "A high-conversion professional asset that effectively demonstrates my ability to handle complex frontend architectures, cinematic motion design, and performance-first development. It serves as a living proof-of-work for my 'Senior Technical Excellence' philosophy.",
        features: [
            "Next.js 15 App Router with advanced Server Components usage",
            "Cinematic Motion Design System powered by Framer Motion",
            "Performance-First Architecture achieving 100/100 Lighthouse scores",
            "Dynamic Project & Blog CMS with Markdown/Data support",
            "Glassmorphic UI Kit with custom Tailwind CSS 4 utilities",
            "Responsive, Full-Width Design with unified layout orchestration"
        ],
        challenges: [
            "Animation Orchestration: Balancing nested Framer Motion sequences without causing layout shifts or performance drops.",
            "Content Scalability: Designing a flexible data model in TypeScript that allows for rapid case study and blog expansion.",
            "Visual Depth: Managing complex backdrop blurs and gradients while ensuring accessibility and readability."
        ],
        process: [
            "Phase 01: Crafting the visual vision and defining the 'Motion First' design language.",
            "Phase 02: Architecting the data layers for projects and blogs using structured TypeScript types.",
            "Phase 03: Implementing the core layout and cinematic navigation components.",
            "Phase 04: Engineering the high-density project specification and detail views.",
            "Phase 05: Continuous performance profiling and accessibility auditing."
        ],
        tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS", "CMS"],
        github: "https://github.com/jenilrupapara001/Jenil-Portfolio-V2",
        demo: "https://jenilrupapara.vercel.app",
        image: "/og-image-2.jpg",
        category: "SaaS"
    },
];

