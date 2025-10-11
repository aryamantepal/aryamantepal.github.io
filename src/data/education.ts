export interface Education {
    school: string;
    degree: string;
    major: string;
    minor?: string;
    gpa: string;
    duration: string;
    coursework: string[];
}

export const educationData: Education[] = [
    {
        school: "University of Massachusetts Amherst",
        degree: "Bachelor of Science",
        major: "Computer Science, Applied Mathematics",
        gpa: "3.91/4.0",
        duration: "Expected May 2027",
        coursework: [
            "Algorithms",
            "Robotics",
            "Systems Programming",
            "Computer Architecture",
            "Object-oriented Programming"
        ]
    }
];