"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ProfilesPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [showProfiles, setShowProfiles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setShowProfiles(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black relative flex flex-col items-center justify-center px-6">

      {/* K fade intro */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.span
              initial={{
                scale: 0.2,
                opacity: 1,
                color: "#E50914",
              }}
              animate={{
                scale: 20,
                opacity: 0,
                color: "#330000",
              }}
              transition={{ duration: 2, ease: "easeIn" }}
              className="uppercase text-[5rem] sm:text-[8rem] md:text-[12rem]"
              style={{
                fontFamily: "Oswald",
                fontWeight: 500,
                lineHeight: 1,
                transformOrigin: "center center",
              }}
            >
              K
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profiles */}
      <AnimatePresence>
        {showProfiles && (
          <motion.div
            className="flex flex-col items-center text-white z-0 w-full max-w-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-10 text-center">
              How would you like to explore my work?
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 place-items-center">
              
              <Link href="/design">
                <Profile
                  role="UI / UX"
                  title="Design Stories"
                  bg="#830f1bff"
                  text="#ea4343ff"
                />
              </Link>

              <Link href="/frontend">
                <Profile
                  role="Frontend"
                  title="Web Builds"
                  bg="#9B111E"
                  text="#FF4C4C"
                />
              </Link>

              <Link href="/data">
                <Profile
                  role="Data"
                  title="Data Insights"
                  bg="#740e18ff"
                  text="#dd5d5dff"
                />
              </Link>

              <Link href="/all">
                <Profile
                  role="All About Me"
                  title="My Journey"
                  bg="#61020cff"
                  text="#c85555ff"
                />
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Profile({
  role,
  title,
  bg,
  text,
}: {
  role: string;
  title: string;
  bg: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-md flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
        style={{ backgroundColor: bg }}
      >
        <span
          className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-center px-2"
          style={{ color: text }}
        >
          {role}
        </span>
      </div>

      <span className="mt-3 text-sm sm:text-base md:text-lg text-neutral-200 text-center">
        {title}
      </span>
    </div>
  );
}
