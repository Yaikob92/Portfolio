"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portImage from "@/app/port.png";
import { PERSONAL } from "@/lib/data";
import { fadeUp, fadeLeft, fadeRight, stagger, VIEWPORT } from "@/lib/animations";

const STATS = [
  { value: "3+", label: "Years Building" },
  { value: "10+", label: "Projects Shipped" },
  { value: "Full", label: "Stack Engineer" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-[var(--bg-soft)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-center gap-4 mb-20"
        >
          <motion.span variants={fadeLeft} className="section-number">
            01 — About
          </motion.span>
          <motion.div variants={fadeLeft} className="gold-line flex-1 max-w-[4rem]" />
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-5"
          >
            {/* Premium framed image container */}
            <div className="relative group overflow-hidden border border-[rgba(201,162,39,0.15)] rounded-sm bg-gradient-to-b from-[rgba(201,162,39,0.03)] to-transparent p-2 transition-all duration-500 hover:border-[rgba(201,162,39,0.35)] hover:shadow-[0_0_40px_rgba(201,162,39,0.08)] mb-8">
              {/* Luxury gold corner accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-gold z-10" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-gold z-10" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-gold z-10" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-gold z-10" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1px] bg-[#07070c]">
                <Image
                  src={portImage}
                  alt="Yaikob Wasihun"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  placeholder="blur"
                />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-[rgba(201,162,39,0.12)]">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl font-light mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--gold-warm)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[0.65rem] tracking-[0.15em] uppercase"
                    style={{
                      color: "var(--ivory-40)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio + details */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="border-l-[2px] border-gold pl-6 md:pl-10 py-2 md:-mt-24 lg:-mt-32">
              <h3
                className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-[1.15]"
                style={{ color: "var(--ivory)", fontFamily: "var(--font-body)" }}
              >
                Software Engineer.<br />
                Mobile App developer.
              </h3>

              <div>
                {PERSONAL.bio.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-base md:text-[1.05rem] leading-[1.8] mb-6 last:mb-0"
                    style={{ color: "var(--ivory-55)" }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap items-center gap-4 mt-10 text-sm md:text-[0.95rem] tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="text-gold transition-all duration-300 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]"
                >
                  {PERSONAL.email}
                </a>
                <span className="opacity-40" style={{ color: "var(--ivory)" }}>·</span>
                <a
                  href="https://github.com/Yaikob92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ivory-55)] transition-all duration-300 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]"
                >
                  GitHub
                </a>
                <span className="opacity-40" style={{ color: "var(--ivory)" }}>·</span>
                <a
                  href="https://www.linkedin.com/in/yaikob/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ivory-55)] transition-all duration-300 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]"
                >
                  LinkedIn
                </a>
                <span className="opacity-40" style={{ color: "var(--ivory)" }}>·</span>
                <a
                  href="https://t.me/An_n_em"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ivory-55)] transition-all duration-300 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]"
                >
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
