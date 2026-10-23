"use client";

import * as m from "framer-motion/m";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import portrait from "@/public/photo.jpg";
import { Github, Linkedin, Mail } from "lucide-react";
import { useSectionInView } from "@/libs/hooks";

export default function Hero() {
  const { ref } = useSectionInView("home", 0.3);
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section" id="home" ref={ref}>
      <div className="hero-content">
        <m.div className="hero-portrait" initial={reduceMotion ? false : { opacity: 0.8, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <Image src={portrait} alt="Hedi Fourati" width={240} height={240} sizes="(max-width: 639px) 168px, 208px" className="portrait-image" priority />
        </m.div>
        <h1 aria-label="Hedi Fourati">
          {Array.from("Hedi Fourati").map((letter, index) => <m.span key={index} aria-hidden="true" className="hero-letter"
            initial={{ opacity: 0.65, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.03, ease: [0.16, 1, 0.3, 1] }}>{letter === " " ? "\u00a0" : letter}</m.span>)}
        </h1>
        <m.p className="hero-study" initial={{ opacity: 0.75 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.2 }}>EPFL student · Second-year Computer Science</m.p>
        <p className="hero-role">Tunisian · Self-taught developer · Founder</p>
        <p className="hero-description">I build things I’m curious about, from student apps to a solar-electric car made with friends at school. That car is still my favourite project. I’ve learned as much from the people around me and the decisions along the way as from the things we built.</p>
        <m.div className="hero-actions" initial={{ opacity: 0.8, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
          <a className="button button-primary" href="#contact">Get in touch</a>
          <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">See my resume</a>
          <div className="hero-socials">
            <m.a className="social-link" href="https://github.com/GameNotCreator" target="_blank" rel="noopener noreferrer" aria-label="Hedi Fourati on GitHub" whileHover={reduceMotion ? undefined : { y: -3 }} whileTap={reduceMotion ? undefined : { scale: 0.95 }}><Github size={23} aria-hidden="true" /></m.a>
            <m.a className="social-link" href="mailto:hedi.fourati@epfl.ch" aria-label="Email Hedi Fourati" whileHover={reduceMotion ? undefined : { y: -3 }} whileTap={reduceMotion ? undefined : { scale: 0.95 }}><Mail size={23} aria-hidden="true" /></m.a>
            <m.a className="social-link" href="https://www.linkedin.com/in/hedi-fourati-816304218/" target="_blank" rel="noopener noreferrer" aria-label="Hedi Fourati on LinkedIn (opens in a new tab)" whileHover={reduceMotion ? undefined : { y: -3 }} whileTap={reduceMotion ? undefined : { scale: 0.95 }}><Linkedin size={23} aria-hidden="true" /></m.a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
