"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { FaCamera, FaPlane, FaPencilAlt, FaUtensils } from "react-icons/fa";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function FrontendPage() {
    const [navOpaque, setNavOpaque] = useState(false);
    const [activeProject, setActiveProject] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById("home")?.offsetHeight || 0;
            setNavOpaque(window.scrollY > heroHeight - 80);
        };
        window.addEventListener("scroll", handleScroll);
        window.scrollTo(0, 0);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const skills = [
        { title: "Frontend Development", desc: "Responsive UI development and component-based architecture", bg: "#8B0000" },
        { title: "Frontend", desc: "React, Next.js, JavaScript, TypeScript", bg: "#A00000" },
        { title: "Styling & Responsiveness", desc: "Tailwind CSS, Flexbox, Grid, Mobile-first design", bg: "#B22222" },
        { title: "UI & Performance", desc: "Accessibility, performance optimization, smooth interactions", bg: "#9B111E" },
    ];

    const experience = [
        {
            title: "Frontend Development Contributions – Client Web Projects",
            desc: "Contributed to real-world web applications by building responsive interfaces, implementing reusable components, and translating design mockups into clean, production-ready frontend code. This experience strengthened my understanding of performance, accessibility, and cross-device consistency.",
            bg: "#444444",
        },
        {
            title: "Frontend Developer – Academic & Personal Projects",
            desc: "Designed and developed frontend projects end-to-end, focusing on component structure, state management, responsive layouts, and intuitive user flows. Through iterative development and feedback, I learned to build scalable and user-friendly web interfaces.",
            bg: "#333333",
        },
    ];

    const projectsData = [
        {
            title: "Talking Fingers – Frontend Interface",
            thumbnail: "/talking-fingers.jpg",
            fullDesc: [
                "Designed and developed a responsive frontend interface to visualize gesture-to-speech interactions",
                "Implemented clean UI layouts and feedback states to support real-time communication",
                "Focused on accessibility-first design to ensure ease of use across devices",
            ],
            tags: ["Frontend", "React", "Accessibility"],
        },
        {
            title: "IKSHANA – Control Dashboard",
            thumbnail: "/ikshana.jpg",
            fullDesc: [
                "Built a frontend dashboard to support telepresence control and interaction flows",
                "Designed intuitive layouts for complex actions using component-based architecture",
                "Ensured responsive behavior and smooth user experience across screen sizes",
            ],
            tags: ["Frontend", "Next.js", "UI Engineering"],
        },
    ];

    const education = [
        { titleLine1: "Master of Science", titleLine2: "Management Information Systems", titleLine3: "University of Houston – Clear Lake", bg: "#333333" },
        { titleLine1: "Bachelor of Engineering", titleLine2: "Electrical & Electronics Engineering", titleLine3: "CMR Institute of Technology - Bengaluru, India", bg: "#555555" },
    ];

    const hobbies = [
        { title: "Photography", desc: "Capturing moments", icon: <FaCamera />, bg: "#8B0000" },
        { title: "Traveling", desc: "Exploring new places", icon: <FaPlane />, bg: "#A00000" },
        { title: "Cooking", desc: "Experimenting with flavors", icon: <FaUtensils />, bg: "#B22222" },
        { title: "Sketching", desc: "Drawing concepts", icon: <FaPencilAlt />, bg: "#800000" },
    ];

    const connect = [
        { title: "Email", desc: "gajjalakousitha@gmail.com", href: "mailto:gajjalakousitha@gmail.com", icon: <FaEnvelope />, bg: "#444444" },
        { title: "Location", desc: "Houston, TX, USA", icon: <FaMapMarkerAlt />, bg: "#555555" },
        { title: "GitHub", desc: "github.com/kousitha", href: "https://github.com/koushi4reddy", icon: <FaGithub />, bg: "#333333" },
        { title: "LinkedIn", desc: "linkedin.com/in/kousitha", href: "https://www.linkedin.com/in/kousithagajjala/", icon: <FaLinkedin />, bg: "#666666" },
    ];

    const renderCards = (items: typeof skills) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="w-full rounded-lg p-3 sm:p-4 lg:p-6 flex flex-col justify-center overflow-hidden h-auto"
                    style={{ backgroundColor: item.bg }}
                >
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 truncate">{item.title}</h3>
                    <p className="text-xs sm:text-sm lg:text-base line-clamp-3">{item.desc}</p>
                </div>
            ))}
        </div>
    );

    const renderCardsMINI = (
        items: { title: string; desc: string; bg: string; icon?: React.ReactNode; href?: string }[]
    ) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="w-full rounded-lg p-3 sm:p-4 lg:p-6 flex flex-col justify-center items-center overflow-hidden h-auto"
                    style={{ backgroundColor: item.bg }}
                >
                    {item.icon && <div className="text-3xl sm:text-4xl mb-1">{item.icon}</div>}
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1">{item.title}</h3>
                    {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm lg:text-base text-gray-200 text-center underline hover:text-red-400 transition">
                            {item.desc}
                        </a>
                    ) : (
                        <p className="text-xs sm:text-sm lg:text-base text-gray-200 text-center">{item.desc}</p>
                    )}
                </div>
            ))}
        </div>
    );

    const renderEducationCards = (
        items: { titleLine1?: string; titleLine2?: string; titleLine3?: string; bg: string }[]
    ) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="w-full rounded-lg p-3 sm:p-4 lg:p-6 flex flex-col justify-center items-start overflow-hidden h-auto"
                    style={{ backgroundColor: item.bg }}
                >
                    {item.titleLine1 && <h3 className="text-base sm:text-lg lg:text-2xl font-bold mb-1">{item.titleLine1}</h3>}
                    {item.titleLine2 && <p className="text-sm sm:text-base lg:text-lg mb-1">{item.titleLine2}</p>}
                    {item.titleLine3 && <p className="text-xs sm:text-sm lg:text-base text-gray-200">{item.titleLine3}</p>}
                </div>
            ))}
        </div>
    );

    const renderProjectCards = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectsData.map((project, i) => (
                <div
                    key={i}
                    onClick={() => setActiveProject(i)}
                    className="cursor-pointer rounded-lg overflow-hidden bg-[#8B0000] hover:scale-105 transition-transform duration-200"
                >
                    <div className="w-full aspect-[16/9] relative">
                        <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="w-full h-full object-cover rounded-t-lg" />
                    </div>
                    <div className="p-3 sm:p-4 lg:p-6">
                        <h3 className="text-base sm:text-lg lg:text-xl mb-1">{project.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderModal = () => {
        if (activeProject === null) return null;
        const project = projectsData[activeProject];

        return (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setActiveProject(null)}>
                <div className="bg-[#111] w-11/12 sm:w-4/5 max-w-4xl h-auto p-4 sm:p-6 lg:p-8 rounded-lg relative overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setActiveProject(null)} className="absolute top-4 sm:top-6 right-4 sm:right-8 text-gray-400 hover:text-red-600 font-bold text-3xl sm:text-5xl">&times;</button>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-4">{project.title}</h3>
                    <img src={project.thumbnail} alt={`${project.title} screenshot`} className="w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] object-contain rounded-md mb-4 sm:mb-6" />
                    <ul className="text-xs sm:text-sm lg:text-base text-gray-200 space-y-2 mb-4">
                        {project.fullDesc.map((line, idx) => (
                            <li key={idx}>• {line}</li>
                        ))}
                    </ul>
                    <div className="flex gap-2 sm:gap-3 lg:gap-4 flex-wrap">
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs sm:text-sm lg:text-base bg-red-600 px-3 py-1 rounded">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="relative w-full bg-black text-white">
            <Navbar opaque={navOpaque} />

            {/* Hero Section */}
            <section
                id="home"
                className="relative w-full min-h-screen flex items-center justify-center"
            >
                <img
                    src="/frontend-bg.jpg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 sm:px-4 md:px-12 space-y-2 sm:space-y-4 md:space-y-6">
                    <h1
                        className="text-5xl sm:text-7xl md:text-8xl font-bold"
                        style={{ fontFamily: "Oswald", fontWeight: 500 }}
                    >
                        Kousitha Gajjala
                    </h1>

                    <p className="text-2xl sm:text-4xl md:text-5xl text-red-600 font-semibold max-w-3xl">
                        Frontend Developer | React | Next.js | UI Engineering
                    </p>

                    <p className="text-lg sm:text-2xl md:text-3xl max-w-3xl">
                        Building fast, scalable, and visually polished web experiences.
                    </p>

                    <p className="text-base sm:text-lg md:text-base text-gray-300">
                        OPT-EAD, Authorized to work in the U.S
                    </p>
                </div>
            </section>


            {/* Skills */}
            <section id="skills" className="mt-4 px-2 sm:px-4 md:px-12 pb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Skills</h2>
                {renderCards(skills)}
            </section>

            {/* Experience */}
            <section id="experience" className="mt-4 px-2 sm:px-4 md:px-12 pb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.map((item, i) => (
                        <div key={i} className="rounded-lg p-4 sm:p-5 lg:p-6 flex flex-col justify-center h-auto" style={{ backgroundColor: item.bg }}>
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1">{item.title}</h3>
                            <p className="text-xs sm:text-sm lg:text-base text-gray-200">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="mt-4 px-2 sm:px-4 md:px-12 pb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Projects</h2>
                {renderProjectCards()}
                {renderModal()}
            </section>

            {/* Tech Stack */}
            <section id="tech" className="mt-4 px-2 sm:px-4 md:px-12 pb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Tech Stack</h2>
                {renderCards([
                    { title: "Design Tools", desc: "Figma · Adobe XD · Sketch · Canva", bg: "#111" },
                    { title: "Frontend Basics", desc: "HTML · CSS · Tailwind CSS · React", bg: "#111" },
                    { title: "Interaction & Motion", desc: "Wireframing · Prototyping · Framer Motion", bg: "#111" },
                    { title: "Principles & Practices", desc: "Color Theory · Typography · Accessibility · Responsive Design", bg: "#111" },
                ])}
            </section>

            {/* About Me */}
            <section id="about-frontend" className="mt-4 px-2 sm:px-4 md:px-12 pb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">About Me</h2>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-center">
                    {/* Profile Photo */}
                    <div className="flex-shrink-0 w-80 md:w-96 h-96 md:h-auto overflow-hidden rounded-lg">
                        <img
                            src="/profile-photo.jpg"
                            alt="Kousitha's Photo"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Bio */}
                    <div className="flex-1 text-gray-200 space-y-2 sm:space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl flex flex-col justify-center">
                        <p>Hi, I'm <strong>Kousitha Gajjala</strong>, a <strong>Master’s in Information Systems graduate from UHCL</strong>, with a strong interest in modern web development and user-focused digital experiences.</p>
                        <p>I enjoy building responsive and visually clean web applications that balance functionality with simplicity.</p>
                        <p>My technical experience includes <strong>HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS</strong>, along with component-based architecture and reusable UI patterns that support scalable development.</p>
                        <p>I am continuously refining my frontend skills by experimenting with layouts, animations, and performance optimizations.</p>
                    </div>
                </div>


                {/* Education */}
                <div className="mt-4 sm:mt-6 md:mt-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">Education</h3>
                    {renderEducationCards(education)}
                </div>

                {/* Hobbies */}
                <div className="mt-4 sm:mt-6 md:mt-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">Hobbies</h3>
                    {renderCardsMINI(hobbies)}
                </div>
            </section>

            {/* Connect */}
            <section id="connect" className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-12 pb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Let's Connect</h2>
                {renderCardsMINI(connect)}
            </section>

            <footer className="w-full bg-[#111] text-gray-400 py-6 mt-8 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Kousitha Gajjala. Made with passion and pixels.</p>
            </footer>
        </div>
    );
}
