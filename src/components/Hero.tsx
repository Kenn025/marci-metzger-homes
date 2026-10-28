import { Phone, ArrowRight } from "lucide-react";
import { useSectionReveal } from "@/hooks";
import { heroImg, STATS, TEL } from "@/lib/constants";

export function Hero() {
  const { ref, style } = useSectionReveal<HTMLDivElement>({
    direction: "none",
    duration: "1.1s",
  });

  return (
    <section
      id="top"
      data-section="hero"
      aria-label="Welcome to Marci Metzger Homes"
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      {/* Background Image with optimized loading for LCP */}
      <img
        src={heroImg}
        alt="Scenic golf course pond with fountains and Spring Mountain views in Pahrump, Nevada"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-hero-veil" />

      {/* Hero Content Container */}
      <div
        ref={ref}
        style={style}
        className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-24 sm:pb-16 sm:pt-28 md:px-8 md:pb-24 md:pt-32"
      >
        <p className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] animate-rise text-white/90">
          Marci Metzger — The Ridge Realty Group
        </p>

        <h1 className="animate-rise mt-4 max-w-4xl text-[2.25rem] leading-[0.98] text-white drop-shadow-lg [animation-delay:120ms] min-[400px]:text-[2.6rem] sm:mt-5 sm:text-7xl sm:leading-[0.95] md:text-8xl">
          Pahrump <em className="text-accent not-italic">Realtor</em>
        </h1>

        <p className="animate-rise mt-5 max-w-xl text-sm text-white/90 sm:text-base drop-shadow-md [animation-delay:240ms] sm:mt-6 md:text-lg">
          Nearly three decades helping families buy and sell in the Pahrump Valley — with local
          knowledge you can't search for.
        </p>

        <div className="animate-rise mt-8 flex flex-col gap-3 [animation-delay:360ms] min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-10">
          <a
            href={TEL}
            className="btn btn-light max-sm:!px-5 max-sm:!py-3 max-sm:!text-[0.7rem] max-sm:!tracking-[0.14em] w-full justify-center min-[480px]:w-auto shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" /> Call Now
          </a>
          <a
            href="#search"
            className="btn btn-outline-light max-sm:!px-5 max-sm:!py-3 max-sm:!text-[0.7rem] max-sm:!tracking-[0.14em] w-full justify-center min-[480px]:w-auto hover:scale-[1.02] active:scale-[0.98]"
          >
            Search Listings <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Key Metrics / Stats */}
        <dl className="animate-rise [animation-delay:480ms] mt-12 flex max-w-3xl flex-wrap justify-center min-[480px]:justify-start gap-x-6 gap-y-5 text-white sm:mt-16 min-[480px]:gap-x-0">
          {STATS.map(([v, l], i) => (
            <div
              key={l}
              className={`flex flex-col-reverse text-center min-[480px]:text-left ${
                i > 0
                  ? "min-[480px]:ml-6 min-[480px]:border-l min-[480px]:border-white/25 min-[480px]:pl-6 sm:ml-10 sm:pl-10"
                  : ""
              }`}
            >
              <dt className="mt-1 text-[0.7rem] text-white/75 sm:text-sm">{l}</dt>
              <dd className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
