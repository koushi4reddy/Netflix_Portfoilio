"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type NavbarProps = { opaque?: boolean };

export default function Navbar({ opaque }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false); // close mobile menu after click
      setProfileOpen(false); // also close profile dropdown just in case
    }
  };

  const profiles = [
    { name: "UI/UX", path: "/design" },
    { name: "Frontend", path: "/frontend" },
    { name: "Data", path: "/data" },
    { name: "All About Me", path: "/all" },
  ];

  const currentProfile =
    profiles.find((p) => p.path === pathname)?.name || "Profile";

  return (
    <header
      className={`fixed top-0 w-full z-50 px-6 md:px-8 transition-colors duration-300 backdrop-blur-md ${
        opaque ? "bg-black/90" : "bg-black/40"
      } h-20 flex items-center justify-between`}
    >
      {/* LEFT */}
      <div className="flex items-center gap-8">
        <div
          className="text-3xl font-bold text-red-600"
          style={{ fontFamily: "Oswald" }}
        >
          <Link href="/">KG</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
          <button onClick={() => scrollToSection("home")} className="hover:text-red-600">Home</button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-red-600">Skills</button>
          <button onClick={() => scrollToSection("experience")} className="hover:text-red-600">Experience</button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-red-600">Projects</button>
          <button onClick={() => scrollToSection("tech")} className="hover:text-red-600">Tech</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-red-600">About Me</button>
          <button onClick={() => scrollToSection("connect")} className="hover:text-red-600">Connect</button>
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 md:gap-6 relative">

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              if (!profileOpen) setMenuOpen(false); // close mobile menu if profile opens
            }}
            className="flex items-center gap-2 text-sm md:text-lg font-semibold text-white hover:text-red-500 transition"
          >
            {currentProfile}
            <span className="text-xs">▼</span>
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-3 w-44 rounded-lg bg-[#111] border border-gray-800 shadow-lg overflow-hidden z-50">
              {profiles.map((profile) => (
                <button
                  key={profile.path}
                  onClick={() => {
                    router.push(profile.path);
                    setProfileOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition hover:bg-[#1a1a1a] ${
                    pathname === profile.path
                      ? "text-red-500"
                      : "text-gray-300"
                  }`}
                >
                  {profile.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Contact */}
        <a
          href="mailto:gajjalakousitha@gmail.com"
          className="bg-red-600 hover:bg-red-700 px-4 md:px-5 py-2 rounded font-medium text-sm md:text-lg"
        >
          Contact
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (!menuOpen) setProfileOpen(false); // close profile dropdown if mobile menu opens
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md md:hidden flex flex-col items-center py-6 gap-6 text-lg font-medium">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("tech")}>Tech</button>
          <button onClick={() => scrollToSection("about")}>About Me</button>
          <button onClick={() => scrollToSection("connect")}>Connect</button>
        </div>
      )}
    </header>
  );
}
