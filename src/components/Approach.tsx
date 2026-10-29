import { useSectionReveal } from "@/hooks";
import { FEATURES } from "@/lib/constants";

export function Approach() {
  const headerReveal = useSectionReveal<HTMLDivElement>({
    direction: "up",
    distance: 24,
    duration: "0.8s",
  });

  return (
    <section
      id="approach"
      data-section="approach"
      aria-label="Our Approach and Track Record"
      className="bg-ink pt-20 pb-14 text-ink-foreground sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          ref={headerReveal.ref}
          style={headerReveal.style}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] text-accent">
              Why work with us
            </p>
            <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-5xl md:text-6xl">
              Results built on local expertise
            </h2>
          </div>
          <a
            href="#contact"
            className="btn btn-outline-light max-sm:!px-5 max-sm:!py-3 max-sm:!text-[0.7rem] max-sm:!tracking-[0.14em] self-start md:self-auto hover:scale-[1.02] active:scale-[0.98]"
          >
            Talk to Marci
          </a>
        </div>

        {/* 3 Pillars / Features Grid with Staggered Motion Entrance */}
        <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[number]; index: number }) {
  const cardReveal = useSectionReveal<HTMLElement>({
    direction: "up",
    distance: 28,
    delay: `${index * 0.12}s`,
    duration: "0.8s",
  });

  return (
    <article
      ref={cardReveal.ref}
      style={cardReveal.style}
      className="group md:grid md:grid-cols-2 md:items-center md:gap-8 lg:block rounded-lg border border-border/40"
    >
      <div className="overflow-hidden rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg lg:rounded-tr-lg lg:rounded-bl-none">
        <img
          src={feature.img}
          alt={feature.alt}
          loading="lazy"
          decoding="async"
          width={600}
          height={450}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-lg text-accent sm:text-xl" aria-hidden="true">
            0{index + 1}
          </span>
          <p className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] text-ink-foreground/60">
            {feature.kicker}
          </p>
        </div>
        <h3 className="mt-3 text-xl font-medium sm:text-3xl">{feature.title}</h3>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-foreground/70 sm:text-base">
          {feature.body}
        </p>
      </div>
    </article>
  );
}
