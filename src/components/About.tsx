import { Phone } from "lucide-react";
import { useSectionReveal } from "@/hooks";
import { marciImg, PHONE, TEL } from "@/lib/constants";

export function About() {
  const imageReveal = useSectionReveal<HTMLDivElement>({
    direction: "left",
    distance: 40,
    duration: "0.85s",
  });

  const contentReveal = useSectionReveal<HTMLDivElement>({
    direction: "right",
    distance: 40,
    duration: "0.85s",
    delay: "0.15s",
  });

  return (
    <section
      id="about"
      data-section="about"
      aria-label="About Marci Metzger"
      itemScope
      itemType="https://schema.org/Person"
      className="pt-20 pb-14 sm:py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-12 md:gap-12 md:px-8 lg:gap-14">
        {/* Agent Portrait with Desert Sand Accent */}
        <div
          ref={imageReveal.ref}
          style={imageReveal.style}
          className="relative mx-auto w-full max-w-sm pl-4 pt-4 sm:max-w-md md:col-span-5 md:max-w-none md:pl-6 md:pt-6"
        >
          <div
            className="absolute inset-0 bottom-4 right-4 rounded-sm bg-sand md:bottom-6 md:right-6"
            aria-hidden="true"
          />
          <img
            src={marciImg}
            alt="Marci Metzger, Pahrump NV Real Estate Agent"
            itemProp="image"
            width={500}
            height={625}
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full rounded-sm object-cover object-top shadow-soft transition-transform duration-700 hover:scale-[1.01]"
          />
        </div>

        {/* Bio Copy */}
        <div
          ref={contentReveal.ref}
          style={contentReveal.style}
          className="md:col-span-7 lg:col-span-6 lg:col-start-7"
        >
          <p className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] text-primary">
            Meet your agent
          </p>
          <h2 itemProp="name" className="mt-4 text-3xl leading-tight sm:text-5xl md:text-6xl">
            Marci Metzger
          </h2>
          <p
            itemProp="jobTitle"
            className="mt-2 font-display text-lg italic text-muted-foreground sm:text-2xl"
          >
            Realtor for nearly 3 decades
          </p>
          <p
            itemProp="description"
            className="mt-6 text-[0.9375rem] leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg"
          >
            Our team works hard every day to grow and learn, so that we may continue to excel in our
            market. Our clients deserve our best — and we want to make sure our best is better every
            year.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-10">
            <a
              href="#contact"
              className="btn btn-primary max-sm:!px-5 max-sm:!py-3 max-sm:!text-[0.7rem] max-sm:!tracking-[0.14em] shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Get It Sold
            </a>
            <a
              href={TEL}
              aria-label={`Call Marci Metzger at ${PHONE}`}
              className="flex min-h-11 items-center gap-2 text-sm font-semibold transition-colors sm:text-base hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
