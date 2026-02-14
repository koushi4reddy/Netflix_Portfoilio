"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { FaCamera, FaPlane, FaPencilAlt, FaUtensils, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function DesignPage() {
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
    { title: "UI / UX", desc: "Wireframing, Prototyping", bg: "#8B0000" },
    { title: "Frontend Design", desc: "React, Next.js, Tailwind CSS", bg: "#A00000" },
    { title: "Color Theory", desc: "Contrast, Mood, Visual Balance", bg: "#B22222" },
    { title: "Visual Design", desc: "Typography & Layout", bg: "#9B111E" },
  ];

  const experience = [
    {
      title: "UI / UX Contributions – Client Projects",
      desc: "Refined layouts, improved spacing, enhanced visual hierarchy, and polished interfaces to improve usability and flow across real-world applications.",
      bg: "#444444",
    },
    {
      title: "UI / UX Designer – Academic Projects",
      desc: "Designed and built academic and concept projects focusing on intuitive layouts, interaction flows, and consistent visual design.",
      bg: "#333333",
    },
  ];

  const projectsData = [
    {
      title: "Talking Fingers",
      thumbnail: "/talking-fingers.jpg",
      fullDesc: [
        "Developed smart glove interface for gesture-to-speech visualization",
        "Implemented real-time feedback UI for hand gestures",
        "Focused on accessible and inclusive design",
      ],
      tags: ["UI/UX", "Accessibility", "Interaction Design"],
    },
    {
      title: "IKSHANA – AI Virtual Presence Robot",
      thumbnail: "/ikshana.jpg",
      fullDesc: [
        "Designed control dashboard for telepresence AI robot",
        "Created intuitive visual layouts for robot movement and feedback",
        "Focused on smooth interaction and usability",
      ],
      tags: ["UI/UX", "Robotics", "AI Interaction"],
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

  return (
    <div className="relative w-full bg-black text-white">
      <Navbar opaque={navOpaque} />

      {/* Hero */}
      <section
        id="home"
        className="relative w-full min-h-screen flex items-center justify-center"
      >
        <img
          src="/design-bg-v3.jpg"
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
            Interaction Design | UX | Visual Design
          </p>

          <p className="text-lg sm:text-2xl md:text-3xl max-w-3xl">
            Shaping ideas into experiences, pixels into stories, and visions into reality.
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
      <section id="about" className="mt-4 px-2 sm:px-4 md:px-12 pb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-center">
          <div className="flex-shrink-0 w-80 md:w-96 h-96 md:h-auto overflow-hidden rounded-lg">
            <img src="/profile-photo.jpg" alt="Kousitha's Photo" className="w-full h-full object-cover object-top" />
          </div>
          <div className="flex-1 text-gray-200 space-y-2 sm:space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl flex flex-col justify-center">
            <p>Hi, I'm <strong>Kousitha Gajjala</strong>, a Master’s in Information Systems graduate from UHCL. I am passionate about creating seamless digital experiences and turning complex technical challenges into elegant solutions.</p>
            <p>I thrive at the intersection of design and development, where creativity meets technology. I enjoy building responsive web applications, designing intuitive user interfaces, and optimizing backend processes to ensure that everything just works. My approach is always user-focused: I aim to create solutions that are not only functional but also visually engaging and easy to use.</p>
            <p>My expertise spans full-stack development, frontend frameworks like React and Next.js, motion design, and color theory. I leverage industry-standard tools and methodologies to build robust, scalable, and user-friendly applications, ensuring every project is delivered smoothly from concept to completion.</p>
            <p>Beyond technology, I enjoy exploring innovative design solutions, learning new tools and frameworks, and continuously refining my craft to build impactful digital experiences. I am committed to creating work that not only meets requirements but also delights users and makes a meaningful difference.</p>
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
