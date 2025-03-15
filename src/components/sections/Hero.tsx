"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GithubIcon, LinkedInIcon, ArrowDownIcon } from "@/components/ui/Icons";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const iconMap: Record<string, React.ReactNode> = {
    github: <GithubIcon size={18} />,
    linkedin: <LinkedInIcon size={18} />,
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient orbs */}
      <motion.div
        style={{ y: yOrb1 }}
        className="orb w-[600px] h-[600px] bg-[rgba(201,162,39,0.06)] -top-40 -left-60"
      />
      <motion.div
        style={{ y: yOrb2 }}
        className="orb w-[500px] h-[500px] bg-[rgba(201,162,39,0.04)] bottom-20 -right-40"
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,236,226,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(240,236,226,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ y: yText, opacity }}
        className="max-w-7xl mx-auto px-6 w-full pt-28 pb-20"
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="section-number">Software Engineer</span>
          <div className="gold-line" />
          <span
            className="text-xs tracking-widest"
            style={{ color: "var(--ivory-40)", fontFamily: "var(--font-mono)" }}
          >
            Addis Ababa, ET
          </span>
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,10vw,9rem)] font-light leading-[0.9] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-display)", color: "var(--ivory)" }}
          >
            Yaikob
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,10vw,9rem)] font-light leading-[0.9] tracking-[-0.03em] italic"
            style={{ fontFamily: "var(--font-display)", color: "var(--gold-warm)" }}
          >
            Wasihun
          </motion.h1>
        </div>

        {/* Tagline + actions */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="max-w-md text-base leading-relaxed"
            style={{ color: "var(--ivory-55)", fontFamily: "var(--font-body)" }}
          >
            {PERSONAL.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex items-center gap-5"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-gold text-bg text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-gold-warm hover:shadow-[0_0_30px_rgba(201,162,39,0.3)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-[rgba(201,162,39,0.3)] text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:border-gold-warm hover:text-gold-warm"
              style={{ fontFamily: "var(--font-mono)", color: "var(--ivory-55)" }}
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex items-center justify-center mt-20 md:mt-28"
        >
          <a href="#about" className="flex flex-col items-center gap-2" aria-label="Scroll down">
            <span
              className="text-[0.6rem] tracking-[0.3em] uppercase"
              style={{ color: "var(--ivory-40)", fontFamily: "var(--font-mono)" }}
            >
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-gold"
            >
              <ArrowDownIcon size={14} />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, var(--gold), rgba(201,162,39,0.1), transparent)" }}
      />
    </section>
  );
}
