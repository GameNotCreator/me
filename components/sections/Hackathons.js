"use client";
import { hackathonsData } from "@/libs/data";
import { useSectionInView } from "@/libs/hooks";

export default function Hackathons() {
  const { ref } = useSectionInView("hackathons", 0.2);
  return (
    <section id="hackathons" ref={ref} className="hackathons-section section-space page-width">
      <p className="eyebrow">Building with a team</p>
      <h2 className="section-title">Two hackathons,<br /><em>two different challenges.</em></h2>
      <div className="hackathon-grid">
        {hackathonsData.map((hackathon, index) => <article className="hackathon-card" key={hackathon.id}>
          <span className="hackathon-number">0{index + 1}</span>
          <p className="eyebrow">{hackathon.event} · {hackathon.location}</p>
          <h3>{hackathon.title}</h3>
          <p>{hackathon.description}</p>
          <p className="project-role"><span>My contribution</span>{hackathon.role}</p>
          {hackathon.outcome && <p className="project-outcome">{hackathon.outcome}</p>}
          <ul className="project-tags" aria-label={`${hackathon.event} details`}>{hackathon.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </article>)}
      </div>
    </section>
  );
}
