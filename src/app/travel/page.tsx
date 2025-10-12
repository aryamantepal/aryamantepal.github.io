import { travelData } from "@/data/travel";
import Link from "next/link";

export default function TravelPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <a href="/" className="text-blue-600 hover:underline mb-8 inline-block">
                    ← Back to Home
                </a>

                <h1 className="text-4xl font-bold mb-8">Travel</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {travelData.map((trip, index) => (
                        <Link
                            key={index}
                            href={`/travel/${trip.slug}`}
                            className="group"
                        >
                            {/* TODO: Add image and text overlay */}
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}