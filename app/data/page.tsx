"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { FaCamera, FaPlane, FaPencilAlt, FaUtensils, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function DataPage() {
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

    // =======================
    // Data
    // =======================
    const skills = [
        { title: "Databases", desc: "MySQL, SQL queries, schema design", bg: "#8B0000" },
        { title: "CRM & ERP", desc: "Salesforce fundamentals, SAP ERP basics", bg: "#A00000" },
        { title: "Data Handling", desc: "Data cleaning, structured datasets, reporting", bg: "#B22222" },
        { title: "Business Data Concepts", desc: "Enterprise workflows, system integration, data flow", bg: "#9B111E" },
    ];

    const experience = [
        { title: "Data & Database Systems – Master’s Coursework", desc: "Completed coursework on relational databases, SQL queries, and schema design. Learned to create optimized tables and relationships, retrieve structured business data, and generate reports using MySQL.", bg: "#444444" },
        { title: "CRM & ERP Systems – Academic Exposure", desc: "Studied Salesforce and SAP through academic labs and case studies. Learned how enterprise platforms manage customer data, reports, workflows, and business processes across departments.", bg: "#333333" },
        { title: "Intern – Growth & Operations, Unacademy", desc: "Collaborated with the Growth and Operations team to organize and manage student data efficiently. Prepared structured datasets and shared them with third-party partners to facilitate registration for an annual examination. Gained hands-on experience in data handling, workflow management, and ensuring accuracy in high-volume data operations.", bg: "#555555" },
    ];

    const projectsData = [
        {
            title: "Student Database Management System",
            thumbnail: "/mysql-project.jpg",
            fullDesc: [
                "Designed a relational database using PostgreSQL for academic projects",
                "Created tables, relationships, and optimized queries",
                "Performed data retrieval using joins, filters, and aggregations"
            ],
            tags: ["PostgreSQL", "Databases", "Database Design"]
        },
        {
            title: "Salesforce CRM Practice Environment",
            thumbnail: "/salesforce-project.jpg",
            fullDesc: [
                "Configured Salesforce objects like Accounts and Contacts",
                "Built basic reports and dashboards to visualize customer data",
                "Explored data relationships and CRM workflows"
            ],
            tags: ["Salesforce", "CRM", "Reporting"]
        },
        {
            title: "Microsoft Power BI Academic Case Study",
            thumbnail: "/sap-project.jpg",
            fullDesc: [
                "Analyzed business workflows using Microsoft Power BI case studies",
                "Studied how data flows across enterprise modules",
                "Developed understanding of Power BI-driven data visualization and analytics"
            ],
            tags: ["Power BI", "Enterprise Systems", "Data Analytics"]
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

    // =======================
    // Render Helpers
    // =======================
    const renderCards = (items: typeof skills) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
                <div key={i} className="w-full rounded-lg p-3 sm:p-4 lg:p-6 flex flex-col justify-center overflow-hidden h-auto" style={{ backgroundColor: item.bg }}>
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
                <div key={i} className="w-full rounded-lg p-3 sm:p-4 lg:p-6 flex flex-col justify-center items-center overflow-hidden h-auto" style={{ backgroundColor: item.bg }}>
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

    const renderEducationCards = (items: { titleLine1?: string; titleLine2?: string; titleLine3?: string; bg: string }[]) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
                <div key={i} className="w-full rounded-lg p-3 sm:p-4 lg:p-6 flex flex-col justify-center items-start overflow-hidden h-auto" style={{ backgroundColor: item.bg }}>
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
                <div key={i} onClick={() => setActiveProject(i)} className="cursor-pointer rounded-lg overflow-hidden bg-[#8B0000] hover:scale-105 transition-transform duration-200">
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

    // =======================
    // JSX
    // =======================
    return (
        <div className="relative w-full bg-black text-white">
            <Navbar opaque={navOpaque} />

            {/* Hero */}
            <section
                id="home"
                className="relative w-full min-h-screen flex items-center justify-center"
            >
                <img
                    src="/data-bg.jpg"
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
                        Data & Enterprise Systems | MySQL | Salesforce | SAP
                    </p>

                    <p className="text-lg sm:text-2xl md:text-3xl max-w-3xl">
                        Turning business data into structured, meaningful insights.
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
                {renderCards(skills)}
            </section>

            {/* About Me */}
            <section id="about" className="mt-4 px-2 sm:px-4 md:px-12 pb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">About Me</h2>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-center">
                    <div className="flex-shrink-0 w-80 md:w-96 h-96 md:h-auto overflow-hidden rounded-lg">
                        <img src="/profile-photo.jpg" alt="Kousitha's Photo" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="flex-1 text-gray-200 space-y-2 sm:space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl flex flex-col justify-center">
                        <p>I'm <strong>Kousitha Gajjala</strong>, a <strong>Master’s graduate in Information Systems from UHCL</strong>, with an academic background focused on data management, enterprise systems, and information workflows.</p>
                        <p>During my master’s program, I worked with structured data, relational databases, and system-level concepts that support business decision-making and operational efficiency.</p>
                        <p>My exposure includes <strong>MySQL, Salesforce fundamentals, SAP concepts, data modeling, and system analysis</strong>, where I focused on understanding how data flows across platforms rather than advanced production systems.</p>
                        <p>I approach data with a practical mindset—prioritizing clarity, accuracy, and organization—while continuously building confidence through hands-on learning and real-world use cases.</p>
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
