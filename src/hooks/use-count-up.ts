import { useEffect, useState } from "react";

/**
 * Animated number counter hook with cubic easing.
 */
export function useCountUp(target: number, duration = 1800, enabled = false, decimals = 0) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(target);
      return;
    }

    let rafId: number;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(parseFloat((eased * target).toFixed(decimals)));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [enabled, target, duration, decimals]);

  return current;
}
