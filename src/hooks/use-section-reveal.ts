import { useEffect, useRef, useState, type CSSProperties } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "zoom" | "none";

export interface UseSectionRevealOptions {
  /** Direction the element slides in from (default "up"). */
  direction?: RevealDirection;
  /** IntersectionObserver threshold 0.0 - 1.0 (default 0.15). */
  threshold?: number;
  /** Root margin for the observer (default "0px 0px -50px 0px"). */
  rootMargin?: string;
  /** Once visible, stay visible (default true). */
  once?: boolean;
  /** Distance in px for the slide (default 40). */
  distance?: number;
  /** CSS transition duration (default "0.8s"). */
  duration?: string;
  /** CSS transition delay (default "0s"). */
  delay?: string;
  /** Custom easing function (default smooth cubic-bezier). */
  easing?: string;
}

const getTransform = (direction: RevealDirection, distance: number, isInView: boolean): string => {
  if (isInView) return "none";
  switch (direction) {
    case "up":
      return `translateY(${distance}px)`;
    case "down":
      return `translateY(-${distance}px)`;
    case "left":
      return `translateX(-${distance}px)`;
    case "right":
      return `translateX(${distance}px)`;
    case "zoom":
      return "scale(0.95)";
    case "none":
    default:
      return "none";
  }
};

/**
 * Returns a ref, visibility state, and CSS style for high-performance,
 * GPU-accelerated motion entrance animations across sections.
 * Automatically respects `prefers-reduced-motion` for accessibility.
 */
export function useSectionReveal<T extends HTMLElement = HTMLElement>(
  opts: UseSectionRevealOptions = {},
) {
  const {
    direction = "up",
    threshold = 0.15,
    rootMargin = "0px 0px -40px 0px",
    once = true,
    distance = 40,
    duration = "0.8s",
    delay = "0s",
    easing = "cubic-bezier(0.16, 1, 0.3, 1)",
  } = opts;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener?.("change", handleMediaChange);

    const element = ref.current;
    if (!element) return;

    if (mediaQuery.matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener?.("change", handleMediaChange);
    };
  }, [threshold, rootMargin, once]);

  const style: CSSProperties = prefersReducedMotion
    ? { opacity: 1, transform: "none" }
    : {
        opacity: isInView ? 1 : 0,
        transform: getTransform(direction, distance, isInView),
        transitionProperty: "opacity, transform",
        transitionDuration: duration,
        transitionTimingFunction: easing,
        transitionDelay: delay,
        willChange: isInView ? "auto" : "opacity, transform",
      };

  return { ref, style, isInView } as const;
}
