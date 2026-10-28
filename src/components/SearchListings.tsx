import { useState, useId, type FormEvent } from "react";
import { Search } from "lucide-react";
import { useSectionReveal } from "@/hooks";
import { Field } from "./Field";
import { dreamImg, PHONE, TEL } from "@/lib/constants";

export function SearchListings() {
  const [sent, setSent] = useState(false);
  const locationId = useId();
  const typeId = useId();
  const bedsId = useId();
  const bathsId = useId();
  const minPriceId = useId();
  const maxPriceId = useId();
  const sortId = useId();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const sel = "field w-full appearance-none cursor-pointer bg-transparent";

  const copyReveal = useSectionReveal<HTMLDivElement>({
    direction: "left",
    distance: 35,
    duration: "0.8s",
  });

  const formReveal = useSectionReveal<HTMLFormElement>({
    direction: "right",
    distance: 35,
    duration: "0.8s",
    delay: "0.15s",
  });

  return (
    <section
      id="search"
      data-section="search"
      aria-label="Search Pahrump Real Estate Listings"
      className="relative flex min-h-[700px] items-center overflow-hidden scroll-mt-0 py-20 sm:min-h-[760px] sm:py-28 md:py-32 lg:min-h-[820px]"
    >
      <img
        src={dreamImg}
        alt="Modern luxury home with infinity pool at dusk in Nye County"
        loading="lazy"
        decoding="async"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-side-veil" aria-hidden="true" />
      {/* Extra scrim below lg, where the heading sits over the photo */}
      <div className="absolute inset-0 bg-ink/50 lg:hidden" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div
          ref={copyReveal.ref}
          style={copyReveal.style}
          className="text-ink-foreground lg:col-span-5"
        >
          <p className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] text-accent">
            Search listings
          </p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-5xl md:text-6xl">
            Find your dream home
          </h2>
          <p className="mt-5 max-w-lg text-[0.9375rem] leading-relaxed text-ink-foreground/85 sm:mt-6 sm:text-base">
            From fixer-uppers to luxury estates — tell us what you're looking for and explore homes
            across Pahrump and Nye County.
          </p>
        </div>

        <form
          ref={formReveal.ref}
          style={formReveal.style}
          onSubmit={onSubmit}
          aria-label="Filter property listings"
          className="bg-card p-6 text-card-foreground shadow-soft sm:p-8 md:p-10 lg:col-span-7 rounded-sm"
        >
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 md:gap-7">
            <Field label="Location" id={locationId}>
              <select id={locationId} name="location" className={sel} defaultValue="any">
                <option value="any">Any</option>
                <option value="pahrump">Pahrump</option>
                <option value="alamo">Alamo</option>
                <option value="alton">Alton</option>
                <option value="amargosa-valley">Amargosa Valley</option>
                <option value="beatty">Beatty</option>
                <option value="blue-diamond">Blue Diamond</option>
                <option value="boulder-city">Boulder City</option>
                <option value="cal-nev-ari">Cal Nev Ari</option>
                <option value="caliente">Caliente</option>
                <option value="cold-creek">Cold Creek</option>
                <option value="crystal">Crystal</option>
                <option value="dyer">Dyer</option>
                <option value="elko">Elko</option>
                <option value="ely">Ely</option>
                <option value="goldfield">Goldfield</option>
                <option value="goodsprings">Goodsprings</option>
                <option value="henderson">Henderson</option>
                <option value="indian-springs">Indian Springs</option>
                <option value="las-vegas">Las Vegas</option>
                <option value="laughlin">Laughlin</option>
                <option value="mesquite">Mesquite</option>
                <option value="mount-charleston">Mount Charleston</option>
                <option value="north-las-vegas">North Las Vegas</option>
              </select>
            </Field>

            <Field label="Property Type" id={typeId}>
              <select id={typeId} name="propertyType" className={sel} defaultValue="any">
                <option value="any">Any</option>
                <option value="residential">Residential</option>
                <option value="land">Land / Acreage</option>
                <option value="high-rise">High Rise</option>
                <option value="commercial">Commercial</option>
              </select>
            </Field>

            <Field label="Bedrooms" id={bedsId}>
              <select id={bedsId} name="bedrooms" className={sel} defaultValue="any">
                <option value="any">Any number</option>
                <option value="studio">Studio</option>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={String(n)}>
                    {n}+
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Bathrooms" id={bathsId}>
              <select id={bathsId} name="bathrooms" className={sel} defaultValue="any">
                <option value="any">Any number</option>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={String(n)}>
                    {n}+
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Min Price ($)" id={minPriceId}>
              <input
                id={minPriceId}
                name="minPrice"
                type="text"
                className="field w-full"
                inputMode="numeric"
                placeholder="No min"
              />
            </Field>

            <Field label="Max Price ($)" id={maxPriceId}>
              <input
                id={maxPriceId}
                name="maxPrice"
                type="text"
                className="field w-full"
                inputMode="numeric"
                placeholder="No max"
              />
            </Field>

            <Field label="Sort By" id={sortId}>
              <select id={sortId} name="sortBy" className={sel} defaultValue="new">
                <option value="new">Newest</option>
                <option value="old">Oldest</option>
                <option value="price-asc">Least Expensive to Most</option>
                <option value="price-desc">Most Expensive to Least</option>
                <option value="bedrooms-desc">Bedrooms (High to Low)</option>
                <option value="bathrooms-desc">Bathrooms (High to Low)</option>
              </select>
            </Field>

            <div className="flex items-end">
              <button
                type="submit"
                className="btn btn-primary max-sm:!px-5 max-sm:!py-3 max-sm:!text-[0.7rem] max-sm:!tracking-[0.14em] w-full justify-center shadow-md hover:scale-[1.01] active:scale-[0.99]"
              >
                <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" /> Search Now
              </button>
            </div>
          </div>

          {sent && (
            <p
              role="status"
              aria-live="polite"
              className="mt-6 border-l-2 border-primary pl-4 text-sm text-muted-foreground animate-rise"
            >
              Thanks! Marci will send you listings that match your criteria. For an immediate
              response, call{" "}
              <a href={TEL} className="font-semibold text-primary underline">
                {PHONE}
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
