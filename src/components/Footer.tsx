"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/data";
import { VIEWPORT } from "@/lib/animations";

export default function Footer() {
  return (
    <footer
      className="pt-0 pb-10"
      style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--ivory-20)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            className="flex flex-col gap-1.5"
          >
            <a
              href="#hero"
              className="text-2xl font-bold tracking-tight hover:text-gold transition-colors"
              style={{ fontFamily: "var(--font-display)", color: "var(--ivory)" }}
            >
              YW<span style={{ color: "var(--gold)" }}>.</span>
            </a>
            <span className="text-sm font-light" style={{ color: "var(--ivory-55)", fontFamily: "var(--font-body)" }}>
              {PERSONAL.name} — {PERSONAL.title}
            </span>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            className="flex items-center gap-6 text-sm"
            style={{ color: "var(--ivory-55)", fontFamily: "var(--font-body)" }}
          >
            <a href="https://github.com/Yaikob92" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/yaikob/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
            <a href="https://t.me/An_n_em" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Telegram</a>
            <a href={`mailto:${PERSONAL.email}`} className="hover:text-gold transition-colors">Email</a>
          </motion.div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px mb-7" style={{ backgroundColor: "var(--ivory-20)" }} />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
          >
            <span className="text-xs" style={{ color: "var(--ivory-40)", fontFamily: "var(--font-mono)" }}>
              © {new Date().getFullYear()} {PERSONAL.name}. Built with Next.js & Tailwind CSS.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-xs transition-colors duration-300 hover:text-gold"
              style={{ color: "var(--ivory-40)", fontFamily: "var(--font-mono)" }}
            >
              {"Back to top"}
              <svg
                className="inline-block transition-transform duration-300 group-hover:-translate-y-1"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="9" x2="5" y2="1" />
                <polyline points="2,4 5,1 8,4" />
              </svg>
            </button>
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
