"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Title from "./Title";

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <Link href={link} target="_blank">
        <section className="relative max-w-[52rem] overflow-hidden rounded-lg border transition hover:bg-[#f0f0f0] hover:text-black dark:hover:bg-primary-foreground sm:h-[20rem]">
          <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="  top-8 md:hidden w-[28.25rem]  rounded-t-lg transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block mb-3"
            />
            <div className="flex flex-col items-center justify-center">
              <Title id="projects">{title}</Title>
              <div
                className="rounded-full w-1/2 items-center justify-center border-[#505050] hover:bg-[#505050] bg-black border-2 hover:text-white px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:border-[#505050] dark:text-white"
              >
                View Project 
              </div>
            </div>
            <p className="mt-2 leading-relaxed">{description}</p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#505050] dark:text-white"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
          />
        </section>
      </Link>
    </motion.div>
  );
}
