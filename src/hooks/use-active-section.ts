import { useEffect, useState } from "react";

/**
 * Tracks which section is currently active based on scroll position.
 * Uses the header height to determine when a section is "reached".
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // When reached near bottom of page, activate last section
      if (windowHeight + scrollY >= docHeight - 60) {
        setActiveSection(sectionIds[sectionIds.length - 1] ?? "");
        return;
      }

      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 70;
      const trigger = headerHeight + 5;

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= trigger) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return [activeSection, setActiveSection] as const;
}
