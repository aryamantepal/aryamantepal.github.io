import { educationData } from '@/data/education';

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <a href="/" className="text-blue-600 hover:underline mb-8 inline-block">
                    ← Back to Home
                </a>

                <h1 className="text-4xl font-bold mb-8">Education</h1>
                {educationData.map((edu, index) => (
                    <div key={index} className="flex gap-6 mb-8">
                        <div className="w-24 h-24 flex-shrink-0">
                            <img
                                src={edu.image}
                                alt={edu.school}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className='text-2xl font-semibold'>{edu.school}</h2>
                            <p className='text-gray-700'>{edu.degree} in {edu.major}</p>
                            <p className='text-sm text-gray-600'>{edu.gpa} | {edu.duration}</p>

                            <div className="mt-2">
                                <h3 className="font-medium text-gray-800 mb-1">Relevant Coursework:</h3>
                                <ul className="list-disc ml-6 text-gray-700">
                                    {edu.coursework.map((course: string, i: number) => (
                                        <li key={i}>{course}</li>
                                    ))}
                                </ul>
                            </div>

                            {edu.honors && edu.honors.length > 0 && (
                                <div className="mt-3">
                                    <h3 className="font-medium text-gray-800 mb-1">Honors & Awards:</h3>
                                    <ul className="list-disc ml-6 text-gray-700">
                                        {edu.honors.map((honor: string, i: number) => (
                                            <li key={i}>{honor}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {edu.activities && edu.activities.length > 0 && (
                                <div className="mt-3">
                                    <h3 className="font-medium text-gray-800 mb-1">Campus Involvement:</h3>
                                    <ul className="list-disc ml-6 text-gray-700">
                                        {edu.activities.map((activity: string, i: number) => (
                                            <li key={i}>{activity}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}