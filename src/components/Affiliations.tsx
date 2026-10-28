import { useSectionReveal } from "@/hooks";
import { AFFILIATION_LOGOS } from "@/lib/constants";

export function Affiliations() {
  const sectionReveal = useSectionReveal<HTMLElement>({
    direction: "zoom",
    duration: "0.8s",
    distance: 20,
  });

  return (
    <section
      ref={sectionReveal.ref}
      style={sectionReveal.style}
      aria-label="Professional Affiliations and Licenses"
      data-section="affiliations"
      className="border-b py-12 sm:py-16 bg-background/50"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-8 px-5 sm:gap-10 md:grid-cols-4 md:px-8">
        {AFFILIATION_LOGOS.map(([src, alt]) => (
          <div key={alt} className="flex justify-center items-center">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              width={160}
              height={80}
              className="mx-auto h-12 w-auto max-w-full object-contain mix-blend-multiply grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-20 md:h-24"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
