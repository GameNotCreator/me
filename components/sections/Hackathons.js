"use client";
import { hackathonsData } from "@/libs/data";
import { motion, useReducedMotion } from "framer-motion";

export default function Hackathons() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="hackathons-block" aria-labelledby="hackathons-heading">
      <h3 id="hackathons-heading" className="section-title">Hackathons</h3>
      <p className="section-copy">Two challenges I explored with a team, in Lausanne and St. Gallen.</p>
      <div className="hackathon-list">
        {hackathonsData.map((hackathon) => <motion.article className="hackathon-card" key={hackathon.id}
          initial={reduceMotion ? false : { opacity: 0.8, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <h4>{hackathon.title}</h4>
          <p>{hackathon.event} · {hackathon.location}</p>
          <p className="project-description">{hackathon.description}</p>
          <p className="project-role"><span>My contribution</span>{hackathon.role}</p>
          {hackathon.outcome && <p className="project-outcome">{hackathon.outcome}</p>}
          <ul className="project-tags" aria-label={`${hackathon.event} details`}>{hackathon.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </motion.article>)}
      </div>
    </div>
  );
}
