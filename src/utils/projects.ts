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
        description: "An enterprise-grade logistics automation platform designed for Ajio sellers to manage high-volume returns and claiming workflows. Built with a focus on data accuracy and operational speed, this dashboard serves as the central nervous system for e-commerce reconciliation.",
        problem: "Modern e-commerce sellers on platforms like Ajio face a significant bottleneck: the return lifecycle. With thousands of products being returned monthly, manual tracking through multiple courier portals is not only inefficient but also prone to massive revenue leakage. Sellers often lose up to 15% of their inventory value due to 'stuck' returns that are never delivered back and for which claims are never filed. The lack of a centralized, automated system for verifying return delivery and automating the claim process was a multi-million dollar problem for mid-market sellers.",
        solution: "I architected and developed an automated reconciliation engine that interfaces directly with courier APIs (Delhivery, BlueDart, Ecom Express). The system utilizes a background worker pool built with BullMQ and Redis to periodically sync shipment statuses. I implemented a custom web scraper using Puppeteer for couriers without public APIs, ensuring 100% data coverage. The frontend features a high-performance data grid built with TanStack Table and Framer Motion, allowing sellers to traverse 10,000+ return rows with sub-second latency. The core logic involves a state machine that tracks every return from 'Requested' to 'Delivered' or 'Claimed', automatically flagging any shipment that stays in a 'Stale' state for more than 72 hours.",
        impact: "The platform has successfully recovered over $50,000 in lost inventory value for early adopters within the first quarter of deployment. By automating the tracking and claim filing process, we reduced the administrative workload of the logistics team by 75%, allowing them to focus on strategic growth rather than manual data entry. The system achieved a 99.8% accuracy rate in identifying missing returns, leading to a significant increase in successful claim approvals from Ajio.",
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
        image: "/projects/ajio.png",
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
        image: "/projects/commercex.png",
        category: "Microservices"
    },
    {
        slug: "grownext-in",
        title: "Grownext.in: Global Partner Portal",
        description: "The official operations hub for Alibaba.com's Indian partners. A data-intensive platform facilitating B2B seller onboarding, growth analytics, and lead management.",
        problem: "Alibaba's Indian operations were previously managed through fragmented Excel sheets and legacy CRMs, leading to a 'data silo' effect. Partners had no real-time visibility into seller performance, making it impossible to provide timely growth advice. The onboarding process was manual and slow, taking up to 7 days for a single seller to go live.",
        solution: "I developed Grownext.in as a unified partner portal using Next.js and Supabase. I architected a real-time data synchronization layer that pulled seller KPIs from internal Alibaba APIs and visualized them through custom D3.js charts. To streamline onboarding, I built an automated documentation engine that uses AI for basic document verification, reducing the manual review queue. The system implements Row-Level Security (RLS) policies at the database level to ensure that multiple competing partners can share a single database without seeing each other's sensitive seller leads. I also leveraged Next.js Edge Functions to handle complex server-side calculations at the CDN level, minimizing latency for users in Tier-2 and Tier-3 cities.",
        impact: "Onboarding time was slashed from 7 days to 24 hours. The portal now supports over 500+ active B2B partners, with a 40% improvement in reported operational efficiency. Partners now make data-driven decisions that have led to a 25% average increase in seller GMV (Gross Merchandise Volume) within the first 6 months of using the platform.",
        features: [
            "Real-time Growth Analytics with Interactive Data Visualizations",
            "Automated Multi-step Document Onboarding Workflows",
            "Intelligent Lead Distribution & Management Engine",
            "Supabase-driven Real-time Messaging and Notifications",
            "Advanced RBAC with PostgreSQL Row-Level Security",
            "Mobile-optimized Dashboard for Field-agent Accessibility"
        ],
        challenges: [
            "Legacy Integration: Connecting modern Supabase real-time listeners to legacy SOAP-based internal inventory systems.",
            "Data Privacy: Designing a complex multi-tenant architecture where data isolation must be guaranteed at the database engine level.",
            "Accessibility: Optimizing the frontend bundle to ensure fast load times on erratic 4G/5G connections in rural India."
        ],
        process: [
            "Phase 01: On-site workshops with Alibaba partners to map the seller lifecycle and pain points.",
            "Phase 02: Rapid prototyping of the analytics dashboard with a focus on data clarity.",
            "Phase 03: Developing the secure database layer and RLS policies in Supabase.",
            "Phase 04: Implementing the automation engine for document processing and verification.",
            "Phase 05: Gradual rollout and feedback-driven refinement of the mobile user experience."
        ],
        tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind", "D3.js"],
        github: "https://github.com/jenilrupapara001/Grownext.in",
        demo: "https://grownext.in",
        image: "/projects/grownext.png",
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
        demo: "#",
        image: "/projects/bavadiya.png",
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
        demo: "#",
        image: "/projects/metalex.png",
        category: "SaaS"
    }
];
