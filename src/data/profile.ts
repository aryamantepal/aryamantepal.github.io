export interface ProfileData {
    name: string;
    pronunciation: string;
    bio: string[];
    email: string;
    profileImage: string;
    links: {
        name: string;
        url: string;
    }[];
    institutions: {
        name: string;
        url: string;
        logo?: string;
    }[];
}

export const profileData: ProfileData = {
    name: "Aryaman Tepal",
    pronunciation: "Ar-yuh-mun Te-pahl",
    bio: [
        "I'm a junior Computer Science & Applied Mathematics major at UMass Amherst, advised by Mario Parente and Yeonsik Noh, with whom I am working on improved machine-learning methods for Mars hyperspectral data and embedded systems for underwater biomedical sensing.",
        "I've also had the pleasure of working with James Murphy at Tufts University, Jim Buffat at the Forschungszentrum Julich, Elliot Taffet at UMass Amherst and Curtis Atkisson at the University of Washington",
        "My research interests include deep learning, remote sensing, computer vision and vision-language models."
    ],
    email: "atepal [at] umass [dot] edu",
    profileImage: "/images/profile.jpg",
    links: [
        { name: "CV", url: "/pdfs/cv.pdf" },
        { name: "GitHub", url: "https://github.com/aryamantepal" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/aryamantepal/" },
        { name: "Education", url: "/education" },
        { name: "Experience", url: "/experience" },
        { name: "Projects", url: "/projects" },
        // { name: "Travel", url: "/travel" }
    ],
    institutions: [
        { name: "University of Massachusetts Amherst", url: "https://www.umass.edu/" },
    ]
};