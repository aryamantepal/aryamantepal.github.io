import { educationData } from '@/data/education';

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Back link to home */}
                <a href="/" className="text-blue-600 hover:underline mb-8 inline-block">
                    ← Back to Home
                </a>

                <h1 className="text-4xl font-bold mb-8">Education</h1>
                {educationData.map((edu, index) => (
                    <div key={index} className="mb-8">
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
                    </div>
                ))}
            </div>
        </main>
    );
}