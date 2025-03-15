"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animFrame = requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (ringRef.current) {
          ringRef.current.style.width = "60px";
          ringRef.current.style.height = "60px";
          ringRef.current.style.borderColor = "rgba(201, 162, 39, 0.9)";
        }
      });
      el.addEventListener("mouseleave", () => {
        if (ringRef.current) {
          ringRef.current.style.width = "36px";
          ringRef.current.style.height = "36px";
          ringRef.current.style.borderColor = "rgba(201, 162, 39, 0.5)";
        }
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
