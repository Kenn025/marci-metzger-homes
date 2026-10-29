import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Initialises Lenis smooth-scroll, intercepts same-page `#hash` links, and
 * tears everything down on unmount.  Respects `prefers-reduced-motion`.
 *
 * @param headerOffset Extra px offset on top of CSS `scroll-margin-top` (default 0).
 */
export function useSmoothScroll(headerOffset = 0) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>(
        'a[href^="#"], a[href="/"]',
      );
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const href = link.getAttribute("href") ?? "";

      // Smooth scroll to top when clicking home link "/" while on homepage
      if (href === "/") {
        if (window.location.pathname === "/") {
          e.preventDefault();
          lenis.scrollTo(0, { offset: 0 });
          if (window.location.hash) {
            window.history.replaceState(window.history.state, "", window.location.pathname);
          }
        }
        return;
      }

      if (href.length < 2) return;

      const target = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target, { offset: headerOffset });
      window.history.replaceState(window.history.state, "", href);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, [headerOffset]);
}
