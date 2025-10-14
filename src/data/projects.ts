export interface Project {
    title: string;
    description: string;
    tech: string[];
    bullets: string[];
    github?: string;
    demo?: string;
    image?: string;
}

export const projectsData: Project[] = [
    {
        title: "Moments",
        description: "A social platform for travelers to share 'sound-scenes' — photo + music moments.",
        tech: ["TypeScript", "Spring Boot", "PostgreSQL", "AWS S3", "Docker", "Next.js"],
        bullets: [
            "Developing TypeScript-based backend microservices with Spring Boot for authentication, media uploads to AWS S3, and secure REST APIs",
            "Integrating with Spotify API for contextual music recommendations per location",
            "Implementing containerized deployment pipelines using Docker and GitHub Actions for reliability and scalability"
        ],
        github: "https://github.com/yourusername/moments",
        // image: "/images/projects/moments.png"
    },
    {
        title: "ZooKart",
        description: "A production-grade full-stack platform connecting UMass students with on-demand rides.",
        tech: ["PostgreSQL", "React", "Next.js", "Express", "AWS EC2"],
        bullets: [
            "Built full-stack platform using React, Next.js, Node.js, and PostgreSQL to connect UMass students with on-demand rides",
            "Deployed with AWS EC2 (backend) and Vercel (frontend) using GitHub Actions for CI/CD",
            "Integrated real-time WebSocket updates and implemented authentication and session handling"
        ],
        github: "https://github.com/yourusername/zookart",
        demo: "https://zookart.vercel.app",
        // image: "/images/projects/zookart.png"
    }
];