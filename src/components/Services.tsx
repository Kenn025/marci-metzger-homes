import { useSectionReveal } from "@/hooks";
import { SERVICES } from "@/lib/constants";

export function Services() {
  const headerReveal = useSectionReveal<HTMLDivElement>({
    direction: "up",
    distance: 24,
    duration: "0.8s",
  });

  return (
    <section
      id="services"
      data-section="services"
      aria-label="Real Estate Services"
      className="bg-secondary pt-20 pb-14 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          ref={headerReveal.ref}
          style={headerReveal.style}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] text-primary">
            Our services
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl">Every step, handled</h2>
        </div>

        {/* 3 Services Cards Grid with Staggered Motion */}
        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
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
      itemScope
      itemType="https://schema.org/Service"
      className="group bg-card shadow-md md:grid md:grid-cols-2 lg:block rounded-lg overflow-hidden transition-all duration-300 hover:shadow-soft"
    >
      <div className="overflow-hidden rounded-sm">
        <img
          src={service.img}
          alt={service.alt}
          itemProp="image"
          loading="lazy"
          decoding="async"
          width={600}
          height={450}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105 md:aspect-auto md:h-full md:min-h-64 lg:aspect-[4/3] lg:h-auto lg:min-h-0"
        />
      </div>
      <div className="p-6 sm:p-8 md:self-center">
        <h3 itemProp="name" className="text-xl sm:text-3xl font-medium">
          {service.title}
        </h3>
        <p
          itemProp="description"
          className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base"
        >
          {service.body}
        </p>
      </div>
    </article>
  );
}
