export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jenil Rupapara",
    "jobTitle": "Senior MERN Stack Developer",
    "url": "https://jenilrupapara.vercel.app",
    "description": "ROI-driven MERN Stack Developer specializing in scalable web applications",
    "sameAs": [
      "https://linkedin.com/in/jenilrupapara-fullstack-developer",
      "https://github.com/jenilrupapara001",
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "System Design",
      "Microservices",
      "Event-Driven Architecture",
      "AWS"
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
