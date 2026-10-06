"use client";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import { useSectionInView } from "@/libs/hooks";

export default function Hero() {
  const { ref } = useSectionInView("home", 0.3);
  return (
    <section id="home" ref={ref} className="hero-section page-width">
      <div className="hero-copy">
        <p className="eyebrow">Developer and founder</p>
        <p className="hero-introduction">Hey, I&apos;m Hedi Fourati.</p>
        <h1>I turn ideas into <em>things people use.</em></h1>
        <p className="hero-description">From my first business in Tunisia to student tools and iOS apps, I build projects that grow out of everyday needs and my own curiosity.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={18} /></a>
          <a className="button button-secondary" href="#contact">Let&apos;s talk <ArrowUpRight size={18} /></a>
        </div>
        <a className="text-link hero-github" href="https://github.com/GameNotCreator" target="_blank" rel="noopener noreferrer"><Github size={17} /> What I&apos;m building on GitHub <ArrowUpRight size={15} /></a>
      </div>
      <div className="hero-portrait">
        <div className="portrait-frame"><Image src="/photo.jpg" alt="Hedi Fourati" width={470} height={470} priority className="portrait-image" /></div>
        <div className="portrait-caption"><span className="status-dot" /> Learning by building, since age 8.</div>
        <p className="portrait-note">I learn by<br />building things.</p>
      </div>
      <div className="hero-facts" aria-label="Selected experience">
        <div><strong>20+</strong><span>Restaurants and shops served by TunisianPass</span></div>
        <div><strong>500+</strong><span>Monthly users on TunisianPass</span></div>
        <div><strong>2</strong><span>Hackathons, in Lausanne and St. Gallen</span></div>
      </div>
    </section>
  );
}
