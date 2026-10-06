"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useSectionInView } from "@/libs/hooks";

export default function About() {
  const { ref } = useSectionInView("about", 0.2);
  const reduceMotion = useReducedMotion();
  return (
    <section id="about" ref={ref} className="about-section portfolio-section">
      <h2 className="section-title">About me</h2>
      <motion.div className="about-portrait" initial={{ opacity: 0.8 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4 }} whileHover={reduceMotion ? undefined : { scale: 1.02 }}>
        <Image src="/photo.jpg" alt="Hedi Fourati" width={470} height={470} sizes="(max-width: 639px) 280px, (max-width: 1023px) 380px, 470px" className="portrait-image" />
      </motion.div>
      <div className="about-copy">
        <p>I started coding at eight, teaching myself as I went. Building things became my way of learning, whether that meant a website for a local business or a product of my own.</p>
        <p>My first company, TunisianPass, taught me to work with restaurants and shops and turn an idea into a service people actually used. Since then, I have sold websites to companies and built apps around studying, fitness, and daily life.</p>
        <p>Hackathons give me another way to explore. At EPFL and START HACK, I worked on ideas as different as dating through Telegram and protecting customers from the wrong AI purchases.</p>
      </div>
    </section>
  );
}
