import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <a href="/" className="text-blue-600 hover:underline mb-8 inline-block">
                    ← Back to Home
                </a>

                <h1 className="text-4xl font-bold mb-8">Projects</h1>

                {projectsData.map((project, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-700 mb-3">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <ul className="list-disc ml-6 text-gray-700 mb-3">
                            {project.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>

                        {/* {project.github && (
                            <a href={project.github} className="text-blue-600 hover:underline text-sm">
                                GitHub →
                            </a>
                        )} */}
                    </div>
                ))}
            </div>
        </main>
    );
}