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
                            <div className="relative h-64 overflow-hidden rounded-lg">
                                <img
                                    src={trip.image}
                                    // alt={trip.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        {/* <h3 className="text-xl font-semibold">{trip.title}</h3> */}
                                        <p className="text-sm">{trip.location}</p>
                                        <p className="text-xs text-gray-300">{trip.date}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}