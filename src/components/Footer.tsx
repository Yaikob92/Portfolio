"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/data";
import { VIEWPORT } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            className="flex flex-col gap-2"
          >
            <span className="text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--ivory)" }}>
              YW<span style={{ color: "var(--gold)" }}>.</span>
            </span>
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
            <a href="https://leetcode.com/Yaikob92" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LeetCode</a>
            <a href="https://t.me/An_n_em" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Telegram</a>
            <a href={`mailto:${PERSONAL.email}`} className="hover:text-gold transition-colors">Email</a>
          </motion.div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px mb-8" style={{ backgroundColor: "var(--ivory-20)" }} />

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
              className="text-xs hover:text-gold transition-colors"
              style={{ color: "var(--ivory-40)", fontFamily: "var(--font-mono)" }}
            >
              Back to top ↑
            </button>
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
