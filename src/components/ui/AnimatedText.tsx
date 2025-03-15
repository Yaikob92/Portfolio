"use client";

import { motion } from "framer-motion";
import { containerVariants, charVariants } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  el: Element = "p",
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      <Element className="inline">
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={charVariants}
            className="inline-block mr-[0.25em]"
            style={{ transitionDelay: `${delay + i * 0.05}s` }}
          >
            {word}
          </motion.span>
        ))}
      </Element>
    </motion.div>
  );
}
