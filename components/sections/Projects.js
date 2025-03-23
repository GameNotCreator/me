"use client";

import React from "react";
import { projectsData } from "@/libs/data";
import ProjectCard from "@/components/elements/ProjectCard";
import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/libs/hooks";

export default function Projects() {
    const { ref } = useSectionInView("projects");

  return (
    <motion.section id="projects" ref={ref}>
      <section className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40 ">
        <SectionHeading id="projects" >Projects</SectionHeading>
        <div className="my-24">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard  {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </motion.section>
  );
}
