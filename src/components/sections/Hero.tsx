"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "@/components/ui/Icons";
import { PERSONAL } from "@/lib/data";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Giant Background Text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden flex justify-end w-full z-0">
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.02, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[clamp(15rem,40vw,45rem)] font-black leading-none text-white tracking-tighter mr-[-2vw]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          YW
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8 pl-4 border-l-[3px] border-gold"
          >
            <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-gray-400 font-medium flex items-center">
              Software Engineer
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-gold ml-1 font-bold text-sm"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 mb-2 font-medium text-sm md:text-base"
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(3.5rem,8vw,6rem)] font-bold text-white leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Yaikob Wasihun
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-10"
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
              className="inline-flex items-center gap-2 bg-gold text-[#0a0a0a] px-7 py-3 rounded text-sm font-bold hover:bg-gold-warm transition-colors"
            >
              View Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-[#2a2a2a] text-gray-300 px-7 py-3 rounded text-sm font-medium hover:bg-[#1a1a1a] hover:text-white hover:border-[#3a3a3a] transition-all"
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
            className="h-px bg-[#1f1f1f] w-full max-w-2xl origin-left mb-10"
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
                4<span className="text-2xl">+</span>
              </div>
              <div className="text-[10px] sm:text-xs text-[#888888] font-medium tracking-wide">Years exp.</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-bold text-gold leading-none">
                20<span className="text-2xl">+</span>
              </div>
              <div className="text-[10px] sm:text-xs text-[#888888] font-medium tracking-wide">Projects</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-bold text-gold leading-none">
                Full
              </div>
              <div className="text-[10px] sm:text-xs text-[#888888] font-medium tracking-wide">Stack</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
