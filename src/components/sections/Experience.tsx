"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { fadeUp, fadeLeft, stagger, VIEWPORT } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-[var(--bg)]">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-center gap-4 mb-20"
        >
          <motion.span variants={fadeLeft} className="section-number">
            04 — Experience
          </motion.span>
          <motion.div variants={fadeLeft} className="gold-line" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 md:left-[11rem] top-0 bottom-0 w-px origin-top hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--gold), rgba(0,212,255,0.1))" }}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="space-y-16"
          >
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col md:flex-row gap-6 md:gap-16"
              >
                {/* Period */}
                <div className="md:w-40 shrink-0">
                  <span
                    className="text-xs tracking-[0.1em]"
                    style={{
                      color: "var(--ivory-40)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Dot + content */}
                <div className="relative flex-1">
                  {/* Dot */}
                  <div
                    className="hidden md:block absolute -left-[calc(2rem+1px)] top-1.5 w-2 h-2 rounded-full border border-[var(--gold)]"
                    style={{ background: "var(--bg)" }}
                  />
                  <div
                    className="hidden md:block absolute -left-[calc(2rem+4px)] top-[1.1rem] w-2 h-2 rounded-full opacity-40"
                    style={{ background: "var(--gold)" }}
                  />

                  <div className="card-obsidian p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3
                          className="text-lg font-light mb-1"
                          style={{
                            fontFamily: "var(--font-display)",
                            color: "var(--ivory)",
                            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <span
                          className="text-xs tracking-[0.12em] uppercase"
                          style={{
                            color: "var(--gold)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{ color: "var(--ivory-55)" }}
                    >
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span key={h} className="tag-pill">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
