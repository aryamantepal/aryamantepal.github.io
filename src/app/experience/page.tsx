import { experienceData } from "@/data/experience";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <a href="/" className="text-blue-600 hover:underline mb-8 inline-block">
                    ← Back to Home
                </a>

                <h1 className="text-4xl font-bold mb-8">Experience</h1>

                <div className="space-y-8">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="flex gap-6 border-b pb-6">
                            {/* Image column (left side) */}
                            {exp.image && (
                                <div className="w-24 h-24 flex-shrink-0">
                                    <img
                                        src={exp.image}
                                        alt={exp.organization}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )}

                            {/* Content column (right side) */}
                            <div className="flex-1">
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold">{exp.title}</h2>
                                    <p className="text-gray-700">{exp.organization} • {exp.location}</p>
                                    <p className="text-sm text-gray-600 mb-3">{exp.duration}</p>

                                    <ul className="list-disc ml-6 text-gray-700 mb-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>

                                    {exp.tags && (
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}