"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents "hydration mismatch" errors
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 p-4 rounded-full bg-slate-800 dark:bg-emerald-500 text-emerald-400 dark:text-slate-900 shadow-2xl hover:scale-110 transition-all z-50 border border-slate-700 dark:border-none"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}