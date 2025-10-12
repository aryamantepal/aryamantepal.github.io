import { travelData } from "@/data/travel";
import { notFound } from "next/navigation";


export function generateStaticParams() {
    return travelData.map((trip) => ({
        slug: trip.slug,
    }));
}

export default function TripPage({ params }: { params: { slug: string } }) {
    // Find the trip that matches the slug
    const trip = travelData.find((t) => t.slug === params.slug);

    // If no trip found, show 404
    if (!trip) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <a href="/travel" className="text-blue-600 hover:underline mb-8 inline-block">
                    ← Back to Travel
                </a>
                {/* Hero image */}
                <div className="w-full h-96 mb-8 rounded-lg overflow-hidden">
                    <img
                        src={trip.image}
                        // alt={trip.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Title and info */}
                {/* <h1 className="text-4xl font-bold mb-2">{trip.title}</h1> */}
                <p className="text-xl text-gray-700 mb-1">{trip.location}</p>
                <p className="text-sm text-gray-600 mb-8">{trip.date}</p>

                {/* Description paragraphs */}
                <div className="space-y-4">
                    {trip.description.map((paragraph, index) => (
                        <p key={index} className="text-gray-800 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </main>
    );
}