export interface Experience {
    title: string;
    organization: string;
    location: string;
    duration: string;
    description: string[];
    tags?: string[];
    image?: string;
}

export const experienceData: Experience[] = [
    {
        title: "Research Assistant",
        organization: "Forschungszentrum Jülich",
        location: "Jülich, Germany",
        duration: "May 2025 - Aug 2025",
        description: [
            "Worked with Jim Buffat on deep learning & remote sensing for sun-induced fluorescence retrieval at the Forschungszentrum Jülich, iAS-8 (Data Analytics and Machine Learning group)",
            "Supported by the DAAD RISE Scholarship."
        ],
        tags: ["PyTorch", "Python"],
        image: "/images/experience/fzj.png"
    },
    {
        title: "Software Engineer Intern",
        organization: "SciQuel",
        location: "Remote",
        duration: "May 2025 - Present",
        description: [
            "Engineered RESTful APIs with Typescript and Next.js / React.js for posting, fetching, and handling data on scientific article contributors from a MongoDB database and rendering them automatically on article webpages.",
            "Re-designed and implemented database schemas through Prisma to separate scientific contributors from website users while maintaining the usabilities of existing APIs, enhancing backend efficiency.",
        ],
        tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
        image: "/images/experience/sciquel.jpeg"
    },
    {
        title: "Research Assistant",
        organization: "Tufts University",
        location: "Medford, MA",
        duration: "May 2024 - Aug 2024",
        description: [
            "Worked with Prof. James Murphy on problems related to hyperspectral image clustering & unmixing.",
            "Supported by the Tufts VERSE REU."
        ],
        tags: ["PyTorch", "Python", "MATLAB"],
        image: "/images/experience/tufts.jpg"
    },
    {
        title: "Software Engineer",
        organization: "Build UMass",
        location: "Amherst, MA",
        duration: "Feb 2025 - May 2025",
        description: [
            "Optimized backend architecture using FastAPI and GraphQL, reducing API response times by 40% and scaling to handle 20+ concurrent queries/sec; integrated with a React frontend for intuitive user experiences.",
            "Automated memory and context retrieval using FAISS and LangChain, powering real-time agentic query resolution."
        ],
        tags: ["TypeScript", "FAISS", "LangChain", "FastAPI"],
        image: "/images/experience/build.jpeg"
    },
    // {
    //     title: "Research Software Engineer",
    //     organization: "Nursing & Engineering Lab",
    //     location: "Amherst, MA",
    //     duration: "Sep 2025 - Onwards",
    //     description: [
    //         "Bullet point about what you did",
    //         "Another accomplishment",
    //         "Impact/results"
    //     ],
    //     tags: ["C"],
    //     image: "/images/experience/n&e.png"
    // },
    // {
    //     title: "Research Assistant",
    //     organization: "RHO Group",
    //     location: "Amherst, MA",
    //     duration: "Sep 2025 - Onwards",
    //     description: [
    //         "Working with Prof. Mario Parente on ML for Mars hyperspectral data. More specifically, we are working on "
    //     ],
    //     tags: ["PyTorch", "Python"],
    //     image: "/images/experience/fzj.png"
    // },
];