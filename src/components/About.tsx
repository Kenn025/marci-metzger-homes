import { Phone } from "lucide-react";
import { useSectionReveal } from "@/hooks";
import { marciImg, PHONE, TEL } from "@/lib/constants";

export function About() {
  const imageReveal = useSectionReveal<HTMLDivElement>({
    direction: "left",
    distance: 28,
    duration: "0.85s",
  });

  const contentReveal = useSectionReveal<HTMLDivElement>({
    direction: "right",
    distance: 28,
    duration: "0.85s",
    delay: "0.12s",
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
            className="absolute inset-0 bottom-4 right-4 rounded-lg bg-sand md:bottom-6 md:right-6"
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
            className="relative aspect-[4/5] w-full rounded-lg object-cover object-top shadow-soft transition-transform duration-700 hover:scale-[1.01] active:scale-[1.01]"
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
            Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is enjoying the
            sunshine, and helping clients in Southern Nevada. Having helped buyers and sellers in
            many markets since 1995, she is a wealth of knowledge.
          </p>

          <h3 className="mt-8 font-display text-xl sm:mt-10 sm:text-3xl">In Her Words</h3>
          <blockquote className="mt-3 space-y-3 border-l-2 border-primary/60 pl-4 text-[0.9375rem] leading-relaxed text-muted-foreground sm:mt-4 sm:pl-5 sm:text-base">
            <p>
              “I love that small-town feeling that our community offers. Spectacular golf courses,
              parks, pool, and easy access to Las Vegas make Pahrump a great place to call home.
              Working or retired, fast-paced or looking to relax... there's a place for you here!
            </p>
            <p>
              I enjoy living in the Mountain Falls community and will strive to find you a home that
              will suit you just as this community does me.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
