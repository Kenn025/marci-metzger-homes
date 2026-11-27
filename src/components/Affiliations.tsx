import { useSectionReveal } from "@/hooks";
import { AFFILIATION_LOGOS } from "@/lib/constants";

export function Affiliations({
  activeInteraction,
  onActivate,
}: {
  activeInteraction: string | null;
  onActivate: (id: string) => void;
}) {
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
        {AFFILIATION_LOGOS.map(([src, alt], index) => (
          <div key={alt} className="flex justify-center items-center">
            <button
              type="button"
              aria-label={`Highlight ${alt} logo`}
              aria-pressed={activeInteraction === `affiliation-${index}`}
              onClick={() => onActivate(`affiliation-${index}`)}
              data-active-interaction
              className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                width={160}
                height={80}
                className={`mx-auto h-12 w-auto max-w-full object-contain grayscale opacity-80 transition-all duration-300 [@media(hover:hover)]:hover:grayscale-0 [@media(hover:hover)]:hover:opacity-100 sm:h-20 md:h-24 ${activeInteraction === `affiliation-${index}` ? "[@media(hover:none)]:grayscale-0 [@media(hover:none)]:opacity-100" : ""}`}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
