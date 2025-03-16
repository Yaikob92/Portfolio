"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRightIcon, GithubIcon } from "@/components/ui/Icons";
import { PROJECTS } from "@/lib/data";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="projects" className="section-pad bg-[var(--bg-soft)]">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-4">
            <motion.span variants={fadeUp} className="section-number">03 — Projects</motion.span>
            <motion.div variants={fadeUp} className="gold-line" />
          </div>
          <motion.p variants={fadeUp} className="text-xs tracking-[0.12em] hidden md:block" style={{ color: "var(--ivory-40)", fontFamily: "var(--font-mono)" }}>
            {PROJECTS.length} selected works
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <div className="border-t border-[rgba(201,162,39,0.12)] cursor-pointer group" onClick={() => setActiveId(activeId === project.id ? null : project.id)}>
                <div className="flex items-start gap-6 py-8 transition-all duration-300 group-hover:pl-2">
                  <span className="text-[0.65rem] tracking-widest mt-1.5 shrink-0" style={{ color: "var(--ivory-40)", fontFamily: "var(--font-mono)" }}>
                    {project.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light leading-tight mb-2 transition-colors duration-300 group-hover:text-[var(--gold-warm)]" style={{ fontFamily: "var(--font-display)", color: "var(--ivory)" }}>
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[0.65rem] tracking-[0.15em] uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-mono)" }}>{project.type}</span>
                          <span style={{ color: "var(--ivory-40)" }}>·</span>
                          <span className="text-[0.65rem]" style={{ color: "var(--ivory-40)", fontFamily: "var(--font-mono)" }}>{project.year}</span>
                          <span style={{ color: "var(--ivory-40)" }}>·</span>
                          <span className="inline-flex items-center gap-1 text-[0.65rem]" style={{ color: project.status === "Production" || project.status === "Live" ? "var(--gold-warm)" : "var(--ivory-55)", fontFamily: "var(--font-mono)" }}>
                            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: project.status === "Production" || project.status === "Live" ? "var(--gold-warm)" : "var(--ivory-40)" }} />
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: activeId === project.id ? 45 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 mt-1" style={{ color: "var(--ivory-40)" }}>
                        <ArrowUpRightIcon size={20} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {activeId === project.id && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                          <div className="pt-6 pb-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--ivory-55)" }}>{project.longDescription}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => <span key={t} className="tag-pill">{t}</span>)}
                              </div>
                            </div>
                            <div>
                              <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase border border-[rgba(201,162,39,0.25)] px-4 py-2.5 transition-all hover:border-gold hover:text-gold-warm w-fit" style={{ color: "var(--ivory-55)", fontFamily: "var(--font-mono)" }}>
                                <GithubIcon size={13} />
                                View Code
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[rgba(201,162,39,0.12)]" />
        </motion.div>
      </div>
    </section>
  );
}
