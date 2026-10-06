"use client";
import { useSectionInView } from "@/libs/hooks";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const { ref } = useSectionInView("about", 0.3);
  return (
    <section id="about" ref={ref} className="about-section section-space page-width">
      <div><p className="eyebrow">The person behind the projects</p><h2 className="section-title">Curiosity is my<br /><em>starting point.</em></h2></div>
      <div className="about-copy">
        <p>I started coding at eight, teaching myself as I went. Building things became my way of learning, whether that meant a website for a local business or a product of my own.</p>
        <p>My first company, TunisianPass, taught me to work with restaurants and shops and turn an idea into a service people actually used. Since then, I have sold websites to companies and built apps around studying, fitness, and daily life.</p>
        <p>Hackathons give me another way to explore. At EPFL and START HACK, I worked on ideas as different as dating through Telegram and protecting customers from the wrong AI purchases.</p>
        <a className="text-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Read my resume <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
