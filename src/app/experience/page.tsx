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
                                {/* TODO: Add title, org, location, duration */}
                                {/* TODO: Add description bullets */}
                                {/* TODO: Add tags */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}