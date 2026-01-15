"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "@/components/ui/Icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Giant Background Text */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden flex justify-end w-full z-0">
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.025, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[clamp(15rem,30vw,40rem)] font-black leading-none tracking-tighter mr-[vw]"
          style={{ fontFamily: "var(--font-display)", color: "var(--ivory)" }}
        >
          YW
        </motion.span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8 pl-4 border-l-[3px] border-gold"
          >
            <span
              className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium flex items-center"
              style={{ color: "var(--ivory-55)" }}
            >
              Software Engineer
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-2 font-medium text-sm md:text-base"
            style={{ color: "var(--ivory-55)" }}
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(3.5rem,8vw,6rem)] font-bold leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--ivory)" }}
          >
            Yaikob Wasihun
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg max-w-xl leading-relaxed mb-10"
            style={{ color: "var(--ivory-55)" }}
          >
            Building scalable, secure backend systems and high-performance APIs that power reliable digital products. Focused on clean architecture, system design, and engineering solutions that prioritize speed, stability, and maintainability.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-gold px-7 py-3 rounded text-sm font-bold hover:bg-gold-warm transition-colors"
              style={{ color: "var(--bg)" }}
            >
              View Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-medium transition-all"
              style={{
                color: "var(--ivory-55)",
                border: "1px solid var(--ivory-20)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-card)";
                (e.currentTarget as HTMLElement).style.color = "var(--ivory)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--ivory-40)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--ivory-55)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--ivory-20)";
              }}
            >
              Download CV
              <DownloadIcon size={16} />
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px w-full max-w-2xl origin-left mb-10"
            style={{ backgroundColor: "var(--ivory-20)" }}
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-16 md:gap-24"
          >
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-bold text-gold leading-none">
                3<span className="text-2xl">+</span>
              </div>
              <div className="text-[10px] sm:text-xs font-medium tracking-wide" style={{ color: "var(--ivory-40)" }}>Years exp.</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-bold text-gold leading-none">
                20<span className="text-2xl">+</span>
              </div>
              <div className="text-[10px] sm:text-xs font-medium tracking-wide" style={{ color: "var(--ivory-40)" }}>Projects</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-bold text-gold leading-none">
                Full
              </div>
              <div className="text-[10px] sm:text-xs font-medium tracking-wide" style={{ color: "var(--ivory-40)" }}>Stack Engineer</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
