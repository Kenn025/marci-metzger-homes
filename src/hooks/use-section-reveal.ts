import { useEffect, useRef, useState, type CSSProperties } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "zoom" | "none";

export interface UseSectionRevealOptions {
  /** Direction the element slides in from (default "up"). */
  direction?: RevealDirection;
  /** IntersectionObserver threshold 0.0 - 1.0 (default 0.06). */
  threshold?: number;
  /** Root margin for the observer (default "0px 0px -30px 0px"). */
  rootMargin?: string;
  /** Once visible, stay visible (default true). */
  once?: boolean;
  /** Distance in px for the slide (default 24). */
  distance?: number;
  /** CSS transition duration (default "0.85s"). */
  duration?: string;
  /** CSS transition delay (default "0s"). */
  delay?: string;
  /** Custom easing function (default smooth cubic-bezier). */
  easing?: string;
  /** Force element to start as already in view (e.g. for hero / above-fold content). */
  initialInView?: boolean;
}

const getTransform = (
  direction: RevealDirection,
  distance: number,
  isInView: boolean,
  isMobile: boolean,
): string => {
  if (isInView) return "translate3d(0, 0, 0)";
  // On mobile screens, convert horizontal slides into a clean upward rise to prevent horizontal jitter
  const effectiveDirection =
    isMobile && (direction === "left" || direction === "right") ? "up" : direction;
  const effectiveDistance = isMobile ? Math.min(distance, 20) : distance;

  switch (effectiveDirection) {
    case "up":
      return `translate3d(0, ${effectiveDistance}px, 0)`;
    case "down":
      return `translate3d(0, -${effectiveDistance}px, 0)`;
    case "left":
      return `translate3d(-${effectiveDistance}px, 0, 0)`;
    case "right":
      return `translate3d(${effectiveDistance}px, 0, 0)`;
    case "zoom":
      return "scale3d(0.96, 0.96, 1)";
    case "none":
    default:
      return "translate3d(0, 0, 0)";
  }
};

/**
 * Returns a ref, visibility state, and CSS style for high-performance,
 * GPU-accelerated motion entrance animations across sections on any screen device.
 * Automatically respects `prefers-reduced-motion` for accessibility.
 */
export function useSectionReveal<T extends HTMLElement = HTMLElement>(
  opts: UseSectionRevealOptions = {},
) {
  const {
    direction = "up",
    threshold = 0.06,
    rootMargin = "0px 0px -30px 0px",
    once = true,
    distance = 24,
    duration = "0.85s",
    delay = "0s",
    easing = "cubic-bezier(0.22, 1, 0.36, 1)",
    initialInView = false,
  } = opts;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(initialInView);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsMobile(window.innerWidth < 640);
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize, { passive: true });

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener?.("change", handleMediaChange);

    const element = ref.current;
    if (!element) {
      return () => {
        window.removeEventListener("resize", onResize);
        mediaQuery.removeEventListener?.("change", handleMediaChange);
      };
    }

    if (mediaQuery.matches || initialInView) {
      setIsInView(true);
      return () => {
        window.removeEventListener("resize", onResize);
        mediaQuery.removeEventListener?.("change", handleMediaChange);
      };
    }

    // Check if element is already in viewport on mount (e.g. above fold on any screen)
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsInView(true);
      if (once) {
        return () => {
          window.removeEventListener("resize", onResize);
          mediaQuery.removeEventListener?.("change", handleMediaChange);
        };
      }
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
      window.removeEventListener("resize", onResize);
      mediaQuery.removeEventListener?.("change", handleMediaChange);
    };
  }, [threshold, rootMargin, once, initialInView]);

  const style: CSSProperties = prefersReducedMotion
    ? { opacity: 1, transform: "none" }
    : {
        opacity: isInView ? 1 : 0,
        transform: getTransform(direction, distance, isInView, isMobile),
        transitionProperty: "opacity, transform",
        transitionDuration: duration,
        transitionTimingFunction: easing,
        transitionDelay: delay,
        willChange: "opacity, transform",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      };

  return { ref, style, isInView } as const;
}
