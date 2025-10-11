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
            "Bullet point about what you did",
            "Another accomplishment",
            "Impact/results"
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
            "Bullet point about what you did",
            "Another accomplishment",
            "Impact/results"
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
            "Bullet point about what you did",
            "Another accomplishment",
            "Impact/results"
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
            "Bullet point about what you did",
            "Another accomplishment",
            "Impact/results"
        ],
        tags: ["TypeScript", "FAISS", "LangChain", "FastAPI"],
        image: "/images/experience/build.png"
    },
    {
        title: "Research Software Engineer",
        organization: "Nursing & Engineering Lab",
        location: "Amherst, MA",
        duration: "Sep 2025 - Onwards",
        description: [
            "Bullet point about what you did",
            "Another accomplishment",
            "Impact/results"
        ],
        tags: ["C"],
        image: "/images/experience/n&e.png"
    },
    {
        title: "Research Assistant",
        organization: "RHO Group",
        location: "Amherst, MA",
        duration: "Sep 2025 - Onwards",
        description: [
            "Bullet point about what you did",
            "Another accomplishment",
            "Impact/results"
        ],
        tags: ["PyTorch", "Python"],
        image: "/images/experience/fzj.png"
    },
];