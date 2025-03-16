"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, TelegramIcon, LeetCodeIcon } from "@/components/ui/Icons";
import { PERSONAL } from "@/lib/data";
import { fadeUp, stagger, fadeLeft, VIEWPORT } from "@/lib/animations";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Yaikob92", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yaikob/", icon: LinkedInIcon },
  { label: "Telegram", href: "https://t.me/An_n_em", icon: TelegramIcon },
  { label: "LeetCode", href: "https://leetcode.com/Yaikob92", icon: LeetCodeIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden" style={{ backgroundColor: "var(--bg)", paddingTop: "6rem", paddingBottom: "6rem" }}>

      {/* Warm ambient glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none select-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(201,162,39,0.06) 0%, transparent 70%)"
        }}
      />

      {/* Section Label — left-aligned, full width */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-center gap-4 mb-20"
        >
          <motion.span variants={fadeLeft} className="section-number">
            05 — Contact
          </motion.span>
          <motion.div variants={fadeLeft} className="gold-line" />
        </motion.div>
      </div>

      {/* Centered main content */}
      <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="font-bold leading-[1.05] tracking-[-0.03em] mb-8"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--ivory)",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
          }}
        >
          Let&apos;s build<br />something great.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-sm leading-relaxed max-w-sm mx-auto mb-14"
          style={{ color: "var(--ivory-55)", fontFamily: "var(--font-body)" }}
        >
          Open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi — my inbox is open.
        </motion.p>

        {/* Email */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-14"
        >
          <a
            href={`mailto:${PERSONAL.email}`}
            className="group relative inline-flex items-center gap-2 pb-1 transition-all duration-300"
            style={{
              color: "var(--gold)",
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            <span>{PERSONAL.email}</span>
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-70">↗</span>
            {/* Underline */}
            <span
              className="absolute bottom-0 left-0 w-full h-[1px]"
              style={{ backgroundColor: "rgba(201,162,39,0.35)" }}
            />
          </a>
        </motion.div>

        {/* Horizontal Separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full h-px mb-10 origin-center"
          style={{ backgroundColor: "var(--ivory-20)" }}
        />

        {/* Social Links */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="flex items-center gap-2 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(201,162,39,0.7)]"
              style={{
                color: "var(--ivory-55)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ivory-55)")}
            >
              <Icon size={13} />
              {label}
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
