"use client";

import { motion } from "framer-motion";
import { SKILLS, TECH_MARQUEE } from "@/lib/data";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-center gap-4 mb-20"
        >
          <motion.span variants={fadeUp} className="section-number">
            02 — Skills
          </motion.span>
          <motion.div variants={fadeUp} className="gold-line" />
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {SKILLS.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="card-obsidian p-6"
            >
              <h3
                className="text-[0.65rem] tracking-[0.2em] uppercase mb-5"
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee strip */}
        <div className="border-t border-b border-[rgba(201,162,39,0.12)] py-5 overflow-hidden">
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-6 px-6"
                  style={{
                    color: "var(--ivory-40)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {tech}
                  <span
                    className="inline-block w-1 h-1 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
