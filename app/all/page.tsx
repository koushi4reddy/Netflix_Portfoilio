"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { FaCamera, FaPlane, FaPencilAlt, FaUtensils } from "react-icons/fa";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function AllProfilePage() {
  const [navOpaque, setNavOpaque] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeSubject, setActiveSubject] = useState<number | null>(null);

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
    { title: "Frontend Development", desc: "React, Next.js, HTML, CSS, Tailwind, JS/TS", bg: "#8B0000" },
    { title: "UI & Design Tools", desc: "Figma, Canva, Adobe XD, Adobe Illustrator, Adobe Fresco", bg: "#A00000" },
    { title: "Styling & Motion", desc: "Wireframing, Prototyping, Framer Motion, Responsive Design", bg: "#B22222" },
    { title: "Programming & Analytics", desc: "Python, SQL, Java, C/C++, MATLAB, Arduino, Excel", bg: "#9B111E" },
    { title: "CRM & ERP", desc: "Salesforce, SAP, MIS Processes, Database Management", bg: "#A52A2A" },
    { title: "Accessibility & UX", desc: "Inclusive design, UX flows, color theory, typography", bg: "#800000" },
  ];

  const experience = [
    {
      title: "Frontend Developer – Academic & Personal Projects",
      desc: "Built responsive web interfaces using React and Next.js, implemented reusable components, and optimized UI performance for accessibility and cross-device consistency.",
      bg: "#555555",
    },
    {
      title: "UI/UX Designer – Client & Concept Projects",
      desc: "Designed interactive layouts, refined color schemes, and created smooth user flows for web applications and smart devices.",
      bg: "#444141",
    },
    {
      title: "Student Assistant III – UHCL (OIT)",
      desc: "Provided technical support to students and faculty, troubleshot hardware/software issues, and maintained computer labs.",
      bg: "#2f2f2f",
    },
    {
      title: "Teaching Assistant – UHCL College of Business",
      desc: "Assisted faculty with course instruction, labs, grading, and maintained course materials for smooth classroom operation.",
      bg: "#888888",
    },
    {
      title: "Growth & Operations Intern – Unacademy",
      desc: "Collected and processed student registration data, managed third-party database accounts, and assisted in troubleshooting student queries during the annual assessment process.",
      bg: "#333333",
    },
    {
      title: "Product Assembly & Testing Intern – CMTI",
      desc: "Tested PLCs and electronic components, authored beginner's guide to PLCs, built basic logic circuits using Ladder Programming, and studied/analyzed PLC modules.",
      bg: "#444444",
    },
  ];

  const projectsData = [
    {
      title: "Talking Fingers",
      thumbnail: "/talking-fingers.jpg",
      fullDesc: [
        "Advanced smart glove for sign language users, converting gestures into real-time speech output.",
        "Used potentiometers and Bluetooth for accurate finger tracking.",
        "Focused on accessibility and inclusive communication.",
      ],
      tags: ["IoT", "Accessibility", "UI/UX"],
    },
    {
      title: "IKSHANA – AI Virtual Presence Robot",
      thumbnail: "/ikshana.jpg",
      fullDesc: [
        "Telepresence robot with AI-assisted movement replication and robotic arms.",
        "Enabled standalone AI-based interaction and enhanced video calling experiences.",
        "Focused on UI/UX design for intuitive control.",
      ],
      tags: ["Robotics", "AI", "Telepresence"],
    },
    {
      title: "MIS Student Dashboard",
      thumbnail: "/mysql-project.jpg",
      fullDesc: [
        "Academic project to visualize student data using PostgreSQL.",
        "Implemented CRUD operations, data filtering, and export functionality.",
        "Focused on practical database skills and responsive UI design.",
      ],
      tags: ["PostgreSQL", "React", "Data Visualization"],
    },
    {
      title: "Salesforce Sample Project",
      thumbnail: "/salesforce-project.jpg",
      fullDesc: [
        "Created a small Salesforce app for tracking tasks and student registration workflows.",
        "Designed page layouts, objects, and reports, and practiced automation using Flow Builder.",
        "Focused on CRM understanding and practical Salesforce skills.",
      ],
      tags: ["Salesforce", "CRM", "Automation"],
    },
  ];

  const mastersSubjects = [
    {
      title: "Management Information Systems",
      desc: "Studied how information systems support business decision-making, organizational strategy, and operational efficiency. Focused on aligning technology with business processes."
    },
    {
      title: "Fundamentals of Database Systems",
      desc: "Learned relational database concepts, data modeling, normalization, and SQL querying. Gained hands-on experience managing databases using Oracle SQL."
    },
    {
      title: "Internet Application Development",
      desc: "Built foundational web applications using HTML, CSS, and JavaScript. Focused on responsive layouts, structured UI, and basic client-side interactivity."
    },
    {
      title: "Fundamentals of Computer Networking",
      desc: "Studied OSI and TCP/IP models, routing, switching, and IP addressing. Designed and simulated networks using Cisco Packet Tracer."
    },
    {
      title: "Advanced Database Application Development",
      desc: "Worked with PL/SQL to build stored procedures, functions, triggers, and cursors for advanced database-driven applications."
    },
    {
      title: "Systems Analysis and Design",
      desc: "Analyzed business requirements and translated them into technical workflows using Gantt charts, flowcharts, and system diagrams."
    },
    {
      title: "Data Warehousing & Data Mining",
      desc: "Learned data warehousing concepts including ETL processes, schemas, and basic data mining techniques using MySQL."
    },
    {
      title: "Advanced Application Development with C#",
      desc: "Developed applications using C# with a focus on object-oriented programming, application logic, and structured software design."
    },
    {
      title: "Advanced Computer Networking",
      desc: "Explored advanced network design concepts, performance optimization, security fundamentals, and troubleshooting methodologies."
    },
    {
      title: "Advanced Application Programming with Java",
      desc: "Strengthened object-oriented programming skills using Java, including inheritance, exception handling, and application-level logic."
    },
    {
      title: "Data Analytics Applications",
      desc: "Introduced to data analytics using Python, focusing on NumPy for numerical computing and basic data analysis workflows."
    },
    {
      title: "Research Topics – Cloud Computing",
      desc: "Explored cloud computing fundamentals, service models (IaaS, PaaS, SaaS), deployment models, and enterprise cloud adoption."
    }
  ];

  const bachelorsSubjects = [
    {
      title: "Engineering Mathematics",
      desc: "Applied calculus, linear algebra, Fourier series, probability, and statistics used for modeling electrical systems, signal analysis, and engineering problem solving.",
    },
    {
      title: "Programming Foundations",
      desc: "Developed strong programming fundamentals using C, Java, and Python, focusing on logic building, object-oriented programming, and basic application development.",
    },
    {
      title: "Electric Circuit Analysis",
      desc: "Studied AC/DC circuits, network theorems, transient response, and steady-state analysis to understand real-world electrical behavior.",
    },
    {
      title: "Electrical Machines",
      desc: "Learned working principles and performance analysis of transformers, DC machines, induction motors, and synchronous machines.",
    },
    {
      title: "Power Generation & Transmission",
      desc: "Covered power generation methods, transmission lines, distribution systems, grid economics, and basic power system planning concepts.",
    },
    {
      title: "Power System Analysis & Protection",
      desc: "Analyzed faults, system stability, protection schemes, and relay coordination for reliable power system operation.",
    },
    {
      title: "Analog & Digital Electronics",
      desc: "Designed and analyzed analog circuits, operational amplifiers, linear ICs, digital logic systems, and combinational/sequential circuits.",
    },
    {
      title: "Embedded Systems & Microcontrollers",
      desc: "Worked with microcontrollers, interfacing techniques, embedded C programming, and hardware-level system design.",
    },
    {
      title: "Control Systems",
      desc: "Studied feedback systems, transfer functions, stability analysis, and controller design for automation and industrial systems.",
    },
    {
      title: "Signals & Digital Signal Processing",
      desc: "Learned signal representation, sampling, filtering, frequency analysis, and DSP applications in communication and control systems.",
    },
    {
      title: "Power Electronics",
      desc: "Analyzed converters, inverters, rectifiers, and motor drives used in industrial and renewable energy systems.",
    },
    {
      title: "Renewable & Emerging Technologies",
      desc: "Explored solar and wind energy systems, electric vehicle technologies, industrial drives, and modern energy applications.",
    },
    {
      title: "Engineering Management & Ethics",
      desc: "Gained exposure to entrepreneurship, project management, professional ethics, cyber law, and environmental sustainability.",
    },
    {
      title: "Projects & Practical Labs",
      desc: "Completed hands-on labs, mini projects, major capstone projects, technical seminars, and internships focused on applied engineering solutions.",
    },
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
  // Reusable Render Functions
  // =======================
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
          {item.icon && <div className="text-3xl sm:text-4xl lg:text-5xl mb-1">{item.icon}</div>}
          <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1">{item.title}</h3>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm lg:text-base text-gray-200 text-center underline hover:text-red-400 transition"
            >
              {item.desc}
            </a>
          ) : (
            <p className="text-xs sm:text-sm lg:text-base text-gray-200 text-center">{item.desc}</p>
          )}
        </div>
      ))}
    </div>
  );

  const renderProjectCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projectsData.map((project, i) => (
        <div key={i} onClick={() => setActiveProject(i)} className="cursor-pointer rounded-lg overflow-hidden bg-[#8B0000] hover:scale-105 transition-transform duration-200">
          <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="w-full h-72 object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-1">{project.title}</h3>
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
  // JSX Render
  // =======================
  return (
    <div className="relative w-full bg-black text-white">
      <Navbar opaque={navOpaque} />

      {/* Home / Hero */}
      <section
        id="home"
        className="relative w-full min-h-screen flex items-center justify-center"
      >
        <img
          src="/profile-bg.jpg"
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

          <p className="text-2xl sm:text-4xl text-red-600 font-semibold">
            MIS Graduate | Tech & Operations
          </p>

          <p className="text-lg sm:text-2xl max-w-3xl">
            Combining Design, Frontend & Data Skills for Scalable Solutions
          </p>

          <p className="text-base sm:text-lg text-gray-300">
            OPT-EAD, Authorized to work in the U.S
          </p>
        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-12 pb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Skills</h2>
        {renderCardsMINI(skills)}
      </section>

      {/* Experience */}
      <section id="experience" className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-12 pb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Experience</h2>
        {renderCardsMINI(experience)}
      </section>

      {/* Projects */}
      <section id="projects" className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-12 pb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Projects</h2>
        {renderProjectCards()}
        {renderModal()}
      </section>

      {/* Tech Stack */}
      <section id="tech" className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-12 pb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Tech Stack</h2>
        {renderCardsMINI([
          { title: "Design Tools", desc: "Figma · Canva · Adobe XD · Adobe Illustrator · Adobe Fresco", bg: "#111" },
          { title: "Frontend & Web", desc: "HTML · CSS · Tailwind CSS · React · Next.js · JavaScript · TypeScript", bg: "#111" },
          { title: "Data & Database", desc: "SQL · MySQL · Salesforce · SAP · Data Analytics", bg: "#111" },
          { title: "Interaction & UX", desc: "Wireframing · Prototyping · Framer Motion · Accessibility · Responsive Design · UX Flows", bg: "#111" },
        ])}
      </section>

      {/* About Me */}
      <section id="about" className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-12 pb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-12">
          <div className="w-60 sm:w-72 md:w-80 h-72 sm:h-80 md:h-96 overflow-hidden rounded-lg">
            <img src="/profile-photo.jpg" alt="Kousitha's Photo" className="w-full h-full object-cover" />
          </div>
          <div className="text-gray-200 max-w-4xl space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg">
            <p>I'm <strong>Kousitha Gajjala</strong>, a <strong>Master’s in Information Systems graduate from UHCL</strong>, with a multidisciplinary background spanning web development, data systems, and business-oriented technology.</p>
            <p>I enjoy working across different layers of technology—from designing user interfaces to understanding how data and systems support real-world applications and organizational goals.</p>
            <p>My experience combines <strong>frontend development, database fundamentals, enterprise tools, and academic project work</strong>, allowing me to adapt quickly and contribute across diverse technical environments.</p>
            <p>I am driven by curiosity and continuous learning, and I aim to grow into a well-rounded professional who builds reliable, thoughtful, and impactful digital solutions.</p>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section id="hobbies" className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-12 pb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Hobbies</h2>
        {renderCardsMINI(hobbies)}
      </section>

      {/* Education */}
      <section id="education" className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-12 pb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Education</h2>

        {/* Masters */}
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Master of Science in Management & Information Systems</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2">University of Houston–Clear Lake (UHCL) · Houston, TX</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
            {mastersSubjects.map((subject, i) => {
              const isOpen = activeSubject === i;
              return (
                <div key={i} onClick={() => setActiveSubject(isOpen ? null : i)}
                  className={`rounded-xl p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 ${isOpen ? "scale-[1.02]" : "bg-[#111] hover:bg-[#1a1a1a]"}`}
                  style={{ backgroundColor: isOpen ? "#8B0000" : undefined }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base md:text-lg font-medium">{subject.title}</h4>
                    <span className="text-lg font-bold">{isOpen ? "−" : "+"}</span>
                  </div>
                  {isOpen && <p className="text-xs sm:text-sm md:text-base text-gray-100 mt-2 sm:mt-4">{subject.desc}</p>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bachelors */}
        <div className="mt-4 sm:mt-6 md:mt-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Bachelor of Engineering – Electrical & Electronics Engineering</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2">CMR Institute of Technology · Bangalore, India</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
            {bachelorsSubjects.map((subject, i) => {
              const isOpen = activeSubject === i;
              return (
                <div key={i} onClick={() => setActiveSubject(isOpen ? null : i)}
                  className="rounded-xl p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300"
                  style={{ backgroundColor: isOpen ? "#8B0000" : "#111" }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base md:text-lg font-medium">{subject.title}</h4>
                    <span className="text-lg font-bold">{isOpen ? "−" : "+"}</span>
                  </div>
                  {isOpen && <p className="text-xs sm:text-sm md:text-base text-gray-100 mt-2 sm:mt-4">{subject.desc}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section id="connect" className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4 md:px-12 pb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Connect</h2>
        {renderCardsMINI(connect)}
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#111] text-gray-400 py-6 mt-4 sm:mt-6 md:mt-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Kousitha Gajjala. Made with passion and pixels.</p>
      </footer>
    </div>
  );
}
