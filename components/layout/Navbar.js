"use client";

import { links } from "@/libs/data";
import { smoothScrollTo } from "@/libs/utils";
import { useActiveSectionContext } from "@/libs/SectionProvider";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[99]">
      <motion.div
        className="fixed left-1/2 top-0 h-24 w-full border-opacity-40 bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.35rem] md:w-[41rem] md:rounded-full "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.50rem] flex h-15 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium transition-colors sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center text-black dark:text-white"
              key={link.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 uppercase transition"
                href={link.id}
                onClick={(e) => {
                  smoothScrollTo({ e, id: link.id });
                  setActiveSection(link.id);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.id === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full  bg-[#404040] bg-opacity-40"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
