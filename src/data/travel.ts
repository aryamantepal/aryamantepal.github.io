export interface Trip {
    // title: string;
    location: string;
    date: string;
    image: string;
    description: string[];
    slug: string;
}

export const travelData: Trip[] = [
    {
        // title: "Trip Name",
        location: "Amsterdam, NL",
        date: "July 2025",
        image: "/images/travel/Amsterdam.HEIC",
        description: [
            "First paragraph about the trip...",
            "Second paragraph...",
        ],
        slug: "Amsterdam",
    },
    {
        // title: "Trip Name",
        location: "Prague, Czech Republic",
        date: "June 2025",
        image: "/images/travel/trip1.jpg",
        description: [
            "First paragraph about the trip...",
            "Second paragraph...",
        ],
        slug: "Prague",
    },
    {
        // title: "Trip Name",
        location: "Rotterdam, NL",
        date: "June 2025",
        image: "/images/travel/trip1.jpg",
        description: [
            "First paragraph about the trip...",
            "Second paragraph...",
        ],
        slug: "Rotterdam",
    },
    {
        // title: "Trip Name",
        location: "Eindhoven, NL",
        date: "July 2025",
        image: "/images/travel/trip1.jpg",
        description: [
            "First paragraph about the trip...",
            "Second paragraph...",
        ],
        slug: "Eindhoven",
    },
    {
        // title: "Trip Name",
        location: "Heidelberg, DE",
        date: "July 2025",
        image: "/images/travel/trip1.jpg",
        description: [
            "First paragraph about the trip...",
            "Second paragraph...",
        ],
        slug: "Heidelberg",
    },
    {
        // title: "Trip Name",
        location: "Strasbourg, France",
        date: "June 2025",
        image: "/images/travel/trip1.jpg",
        description: [
            "First paragraph about the trip...",
            "Second paragraph...",
        ],
        slug: "Strasbourg",
    },
    {
        // title: "Trip Name",
        location: "Brussels, Belgium",
        date: "June 2025",
        image: "/images/travel/trip1.jpg",
        description: [
            "First paragraph about the trip...",
            "Second paragraph...",
        ],
        slug: "Brussels",
    },
];