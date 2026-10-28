import { useState, useRef, useEffect, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSectionReveal } from "@/hooks";
import { GALLERY } from "@/lib/constants";

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const total = GALLERY.length;

  const sectionReveal = useSectionReveal<HTMLDivElement>({
    direction: "up",
    distance: 30,
    duration: "0.75s",
  });

  const go = (delta: number) => {
    setCurrentIndex((prev) => (prev + delta + total) % total);
  };

  // Auto-advance gallery image every 3.5 seconds
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(timer);
  }, [currentIndex, total]);

  // Keep active thumbnail visible in horizontal scroll on mobile
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    if (!container || window.innerWidth >= 640) return;
    const activeButton = container.children[currentIndex] as HTMLElement | undefined;
    if (activeButton) {
      const left = activeButton.offsetLeft;
      const right = left + activeButton.offsetWidth;
      if (left < container.scrollLeft) {
        container.scrollTo({ left, behavior: "smooth" });
      } else if (right > container.scrollLeft + container.clientWidth) {
        container.scrollTo({ left: right - container.clientWidth, behavior: "smooth" });
      }
    }
  }, [currentIndex]);

  // Swipe / drag support for touch screens and mouse
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pointerStartX.current = e.clientX;
    pointerStartY.current = e.clientY;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null || pointerStartY.current === null) return;
    const dx = e.clientX - pointerStartX.current;
    const dy = e.clientY - pointerStartY.current;
    pointerStartX.current = null;
    pointerStartY.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? 1 : -1);
    }
  };

  const onPointerCancel = () => {
    pointerStartX.current = null;
    pointerStartY.current = null;
  };

  return (
    <section
      id="gallery"
      data-section="gallery"
      aria-label="Photo Gallery: Life in the Pahrump Valley"
      className="pt-20 pb-14 sm:py-24 md:py-32"
    >
      <div
        ref={sectionReveal.ref}
        style={sectionReveal.style}
        className="mx-auto max-w-7xl px-5 md:px-8"
      >
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-4">
          <div>
            <p className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] text-primary">
              Photo gallery
            </p>
            <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl">Life in the Pahrump Valley</h2>
          </div>
          <p className="font-display text-lg text-muted-foreground sm:text-2xl" aria-live="polite">
            <span className="sr-only">Viewing slide </span>
            {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>

        {/* Carousel Viewport */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Properties and Neighborhoods in Pahrump"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              go(-1);
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              go(1);
            }
          }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          className="relative mt-8 select-none touch-pan-y overflow-hidden bg-muted outline-none sm:mt-12 rounded-sm focus-visible:ring-2 focus-visible:ring-primary"
        >
          {GALLERY.map((src, k) => (
            <img
              key={src}
              src={src}
              alt={`Pahrump neighborhood and luxury home visual showcase ${k + 1}`}
              loading={k === 0 ? "eager" : "lazy"}
              decoding={k === 0 ? "sync" : "async"}
              draggable={false}
              width={1280}
              height={720}
              className={`aspect-[4/3] w-full select-none rounded-sm object-cover transition-opacity duration-700 pointer-events-none sm:aspect-[16/9] ${
                k === currentIndex ? "relative opacity-100" : "absolute inset-0 opacity-0"
              }`}
            />
          ))}

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 bottom-0 flex justify-end gap-2 p-3 sm:p-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="btn btn-light !p-3 max-sm:!p-2.5 shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="btn btn-light !p-3 max-sm:!p-2.5 shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Thumbnail Selector (Mobile scroll strip, Desktop grid) */}
        <div
          ref={thumbnailContainerRef}
          aria-label="Choose a photo to view"
          className="mt-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-4 sm:grid sm:grid-cols-7 sm:overflow-visible"
        >
          {GALLERY.map((src, k) => (
            <button
              key={src}
              type="button"
              onClick={() => setCurrentIndex(k)}
              aria-label={`View photo ${k + 1} of ${total}`}
              aria-current={k === currentIndex}
              className={`relative w-16 shrink-0 select-none overflow-hidden rounded-xs transition-all sm:w-auto ${
                k === currentIndex
                  ? "opacity-100 scale-100 ring-2 ring-primary"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                draggable={false}
                width={120}
                height={120}
                className="aspect-square w-full select-none rounded-sm object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
