"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, TelegramIcon, LeetCodeIcon } from "@/components/ui/Icons";
import { PERSONAL } from "@/lib/data";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-[var(--bg)] relative overflow-hidden">
      {/* Background radial highlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.02] pointer-events-none select-none"
        style={{
          background: "radial-gradient(circle, var(--gold-warm) 0%, transparent 70%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="relative mb-24 flex items-center">
          {/* Huge background watermark "05" (matching section numbering layout) */}
          <span 
            className="absolute left-0 -top-8 text-[9rem] md:text-[12rem] font-bold leading-none select-none pointer-events-none opacity-[0.02] tracking-tighter"
            style={{ fontFamily: "var(--font-body)", color: "var(--ivory)" }}
          >
            05
          </span>
          <div className="relative z-10 flex items-center w-full gap-4">
            <span 
              className="text-[0.7rem] tracking-[0.25em] uppercase font-mono text-[var(--gold)]"
            >
              Contact
            </span>
            <div className="flex-1 h-px bg-[rgba(240,236,226,0.08)]" />
          </div>
        </div>

        {/* Centered Main Content */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto pt-8 pb-16"
        >
          {/* Heading */}
          <motion.h2 
            variants={fadeUp}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-ivory mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s build<br />
            <span style={{ color: "var(--ivory)" }}>something great.</span>
          </motion.h2>

          {/* Subheading text */}
          <motion.p 
            variants={fadeUp}
            className="text-xs md:text-sm leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "var(--ivory-55)", fontFamily: "var(--font-body)" }}
          >
            Open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi — my inbox is open.
          </motion.p>

          {/* Centered large Email Link */}
          <motion.div variants={fadeUp} className="mb-20">
            <a 
              href={`mailto:${PERSONAL.email}`}
              className="group relative inline-flex items-center gap-2 text-lg md:text-2xl font-light tracking-wide transition-all duration-300 pb-1 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]"
              style={{ 
                color: "var(--gold)", 
                fontFamily: "var(--font-body)" 
              }}
            >
              <span>{PERSONAL.email}</span>
              <motion.span 
                className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-sm md:text-lg"
              >
                ↗
              </motion.span>
              
              {/* Expanding Underline */}
              <span 
                className="absolute bottom-0 left-0 w-full h-[1px] transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-105"
                style={{ backgroundColor: "rgba(201, 162, 39, 0.4)" }}
              />
            </a>
          </motion.div>

        </motion.div>

        {/* Separator line above footer socials */}
        <div className="w-full max-w-3xl mx-auto h-px bg-[rgba(240,236,226,0.06)] mb-8" />

        {/* Inline Centered Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-[0.7rem] uppercase tracking-[0.2em] font-mono mb-6">
          <a 
            href="https://github.com/Yaikob92" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-[var(--ivory-40)] transition-all duration-300 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <GithubIcon size={12} />
            GitHub
          </a>
          <span className="opacity-[0.15]" style={{ color: "var(--ivory)" }}>·</span>
          <a 
            href="https://www.linkedin.com/in/yaikob/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-[var(--ivory-40)] transition-all duration-300 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <LinkedInIcon size={12} />
            LinkedIn
          </a>
          <span className="opacity-[0.15]" style={{ color: "var(--ivory)" }}>·</span>
          <a 
            href="https://t.me/An_n_em" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-[var(--ivory-40)] transition-all duration-300 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <TelegramIcon size={12} />
            Telegram
          </a>
          <span className="opacity-[0.15]" style={{ color: "var(--ivory)" }}>·</span>
          <a 
            href="https://leetcode.com/Yaikob92" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-[var(--ivory-40)] transition-all duration-300 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <LeetCodeIcon size={12} />
            LeetCode
          </a>
        </div>

      </div>
    </section>
  );
}
