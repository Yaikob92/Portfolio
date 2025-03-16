"use client";

import { motion } from "framer-motion";
import { ArrowUpIcon } from "@/components/ui/Icons";
import { PERSONAL } from "@/lib/data";
import { VIEWPORT } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(240,236,226,0.05)] bg-[#07070c]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left Side: Brand and Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          className="flex items-center gap-3"
        >
          <span className="text-base font-light" style={{ fontFamily: "var(--font-display)", color: "var(--ivory)" }}>
            YW<span style={{ color: "var(--gold)" }}>.</span>
          </span>
          <span className="text-[0.6rem] tracking-[0.1em]" style={{ color: "var(--ivory-40)", fontFamily: "var(--font-mono)" }}>
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </span>
        </motion.div>

        {/* Right Side: Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          className="flex items-center"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-8 h-8 flex items-center justify-center border border-[rgba(201,162,39,0.15)] transition-all duration-300 hover:border-gold hover:text-gold hover:bg-[rgba(201,162,39,0.03)]"
            style={{ color: "var(--ivory-40)" }}
          >
            <ArrowUpIcon size={12} />
          </button>
        </motion.div>

      </div>
    </footer>
  );
}
