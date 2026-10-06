"use client";
import { skillsData } from "@/libs/data";
import { useSectionInView } from "@/libs/hooks";
import Image from "next/image";

export default function Skills() {
  const { ref } = useSectionInView("skills", 0.25);
  return (
    <section id="skills" ref={ref} className="skills-section section-space page-width">
      <p className="eyebrow">My toolkit</p>
      <h2 className="section-title">The tools behind <em>the ideas.</em></h2>
      <p className="section-description">Technologies and creative tools I have used across my projects.</p>
      <ul className="skills-list">{skillsData.filter(([name]) => name).map(([name, icon]) => <li key={name}><Image src={icon} alt="" width={22} height={22} />{name}</li>)}</ul>
    </section>
  );
}
