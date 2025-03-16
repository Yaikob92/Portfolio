"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Suppress transitions on first load to prevent flash
    const root = document.documentElement;
    root.classList.add("no-theme-transition");

    const stored = localStorage.getItem("portfolio-theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      root.setAttribute("data-theme", stored);
    }

    // Allow transitions again after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.remove("no-theme-transition");
      });
    });
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
