import { projects } from "@/utils/projects";
import ProjectDetailView from "@/components/ProjectDetailView";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Case Study`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": project.title,
                        "description": project.description,
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Web",
                        "author": {
                            "@type": "Person",
                            "name": "Jenil Rupapara"
                        }
                    })
                }}
            />
            <ProjectDetailView project={project} />
        </>
    );
}
