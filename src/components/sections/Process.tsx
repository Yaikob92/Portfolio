"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

export default function Process() {
  return (
    <section id="process" className="section-pad bg-[var(--bg-soft)]">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-center gap-4 mb-20"
        >
          <motion.span variants={fadeUp} className="section-number">
            05 — Process
          </motion.span>
          <motion.div variants={fadeUp} className="gold-line" />
        </motion.div>

        {/* Editorial quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p
            className="text-[clamp(1.6rem,4vw,3rem)] font-light leading-[1.2] tracking-[-0.01em] max-w-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--ivory-55)" }}
          >
            "Good software is{" "}
            <em style={{ color: "var(--gold-warm)" }}>invisible</em> — it just
            works, beautifully, without friction."
          </p>
        </motion.blockquote>

        {/* Steps grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="card-obsidian p-7 group"
            >
              <div
                className="text-4xl font-light mb-6 transition-colors duration-300 group-hover:text-[var(--gold-warm)]"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--ivory-20)",
                }}
              >
                {step.number}
              </div>
              <h3
                className="text-base mb-3 tracking-wide"
                style={{ color: "var(--ivory)", fontFamily: "var(--font-body)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ivory-40)" }}
              >
                {step.description}
              </p>
              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "var(--gold)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
