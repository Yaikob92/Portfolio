"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@/components/ui/Icons";
import { useTheme } from "@/lib/theme";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "py-3 backdrop-blur-md border-b"
            : "py-5 bg-transparent"
          }`}
        style={scrolled ? { backgroundColor: "color-mix(in srgb, var(--bg) 90%, transparent)", borderColor: "var(--ivory-20)" } : undefined}
      >
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl font-light tracking-widest hover-underline"
            style={{ fontFamily: "var(--font-display)", color: "var(--ivory)" }}
          >
            YW<span style={{ color: "var(--gold)" }}>.</span>
          </a>

          <div className="flex items-center ml-auto">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 mr-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${activeSection === item.href.slice(1)
                      ? "text-gold-warm"
                      : "text-[var(--ivory-55)] hover:text-ivory"
                    }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Desktop Separator */}
            <div className="hidden md:block w-px h-4 mr-6" style={{ backgroundColor: "var(--ivory-20)" }} />

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center transition-all duration-300 hover:text-gold mr-4 md:mr-0"
              style={{ color: "var(--ivory-55)" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden transition-colors"
            style={{ color: "var(--ivory-55)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
            style={{ backgroundColor: "color-mix(in srgb, var(--bg) 98%, transparent)" }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-light transition-colors"
                style={{ fontFamily: "var(--font-display)", color: "var(--ivory)" }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
