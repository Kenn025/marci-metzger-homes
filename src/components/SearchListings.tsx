import { useState, useId, type FormEvent, type KeyboardEvent, type ChangeEvent } from "react";
import { Search } from "lucide-react";
import { useSectionReveal } from "@/hooks";
import { Field } from "./Field";
import { dreamImg, PHONE, TEL } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LOCATIONS = [
  { value: "any", label: "Any" },
  { value: "pahrump", label: "Pahrump" },
  { value: "alamo", label: "Alamo" },
  { value: "alton", label: "Alton" },
  { value: "amargosa-valley", label: "Amargosa Valley" },
  { value: "beatty", label: "Beatty" },
  { value: "blue-diamond", label: "Blue Diamond" },
  { value: "boulder-city", label: "Boulder City" },
  { value: "cal-nev-ari", label: "Cal Nev Ari" },
  { value: "caliente", label: "Caliente" },
  { value: "cold-creek", label: "Cold Creek" },
  { value: "crystal", label: "Crystal" },
  { value: "dyer", label: "Dyer" },
  { value: "elko", label: "Elko" },
  { value: "ely", label: "Ely" },
  { value: "goldfield", label: "Goldfield" },
  { value: "goodsprings", label: "Goodsprings" },
  { value: "henderson", label: "Henderson" },
  { value: "indian-springs", label: "Indian Springs" },
  { value: "las-vegas", label: "Las Vegas" },
  { value: "laughlin", label: "Laughlin" },
  { value: "mesquite", label: "Mesquite" },
  { value: "mount-charleston", label: "Mount Charleston" },
  { value: "north-las-vegas", label: "North Las Vegas" },
] as const;

const PROPERTY_TYPES = [
  { value: "any", label: "Any" },
  { value: "residential", label: "Residential" },
  { value: "land", label: "Land / Acreage" },
  { value: "high-rise", label: "High Rise" },
  { value: "commercial", label: "Commercial" },
] as const;

const BEDROOM_OPTIONS = [
  { value: "any", label: "Any number" },
  { value: "studio", label: "Studio" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
  { value: "5", label: "5+" },
  { value: "6", label: "6+" },
] as const;

const BATHROOM_OPTIONS = [
  { value: "any", label: "Any number" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
  { value: "5", label: "5+" },
  { value: "6", label: "6+" },
] as const;

const SORT_OPTIONS = [
  { value: "new", label: "Newest" },
  { value: "old", label: "Oldest" },
  { value: "price-asc", label: "Least Expensive to Most" },
  { value: "price-desc", label: "Most Expensive to Least" },
  { value: "bedrooms-desc", label: "Bedrooms (High to Low)" },
  { value: "bathrooms-desc", label: "Bathrooms (High to Low)" },
] as const;

const selectTriggerClassName =
  "field flex h-auto w-full items-center justify-between rounded-none border-x-0 border-t-0 border-b border-input bg-transparent px-0 py-2.5 text-[0.95rem] font-normal shadow-none ring-0 ring-offset-0 transition-colors cursor-pointer focus:border-primary focus:outline-none focus:ring-0 data-[state=open]:border-primary [&>span]:text-left [&>span]:line-clamp-1 [&>svg]:text-muted-foreground [&>svg]:transition-transform [&>svg]:duration-200 data-[state=open]:[&>svg]:rotate-180";

export function SearchListings() {
  const [feedback, setFeedback] = useState<"idle" | "empty" | "sent">("idle");
  const [location, setLocation] = useState("any");
  const [propertyType, setPropertyType] = useState("any");
  const [bedrooms, setBedrooms] = useState("any");
  const [bathrooms, setBathrooms] = useState("any");
  const [sortBy, setSortBy] = useState("new");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const locationId = useId();
  const typeId = useId();
  const bedsId = useId();
  const bathsId = useId();
  const minPriceId = useId();
  const maxPriceId = useId();
  const sortId = useId();

  const handlePriceKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Allow navigation, control keys, and clipboard shortcuts
    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "Tab" ||
      e.key === "Enter" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "Home" ||
      e.key === "End" ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }
    // Block any non-digit characters
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (feedback !== "idle") setFeedback("idle");
    setMinPrice(e.target.value.replace(/\D/g, ""));
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (feedback !== "idle") setFeedback("idle");
    setMaxPrice(e.target.value.replace(/\D/g, ""));
  };

  const onFilterChange = () => {
    if (feedback !== "idle") setFeedback("idle");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const min = minPrice.trim();
    const max = maxPrice.trim();

    const hasCustomCriteria =
      location !== "any" ||
      propertyType !== "any" ||
      bedrooms !== "any" ||
      bathrooms !== "any" ||
      min !== "" ||
      max !== "";

    if (!hasCustomCriteria) {
      setFeedback("empty");
      return;
    }

    setFeedback("sent");
  };

  const copyReveal = useSectionReveal<HTMLDivElement>({
    direction: "left",
    distance: 28,
    duration: "0.85s",
  });

  const formReveal = useSectionReveal<HTMLFormElement>({
    direction: "right",
    distance: 28,
    duration: "0.85s",
    delay: "0.12s",
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
          className="bg-card p-6 text-card-foreground shadow-soft sm:p-8 md:p-10 lg:col-span-7 rounded-lg"
        >
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 md:gap-7">
            <Field label="Location" id={locationId}>
              <Select
                name="location"
                value={location}
                onValueChange={(val) => {
                  setLocation(val);
                  onFilterChange();
                }}
              >
                <SelectTrigger id={locationId} className={selectTriggerClassName}>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent className="max-h-72 border-border/60 bg-card text-card-foreground shadow-soft">
                  {LOCATIONS.map((loc) => (
                    <SelectItem key={loc.value} value={loc.value}>
                      {loc.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Property Type" id={typeId}>
              <Select
                name="propertyType"
                value={propertyType}
                onValueChange={(val) => {
                  setPropertyType(val);
                  onFilterChange();
                }}
              >
                <SelectTrigger id={typeId} className={selectTriggerClassName}>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent className="border-border/60 bg-card text-card-foreground shadow-soft">
                  {PROPERTY_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Bedrooms" id={bedsId}>
              <Select
                name="bedrooms"
                value={bedrooms}
                onValueChange={(val) => {
                  setBedrooms(val);
                  onFilterChange();
                }}
              >
                <SelectTrigger id={bedsId} className={selectTriggerClassName}>
                  <SelectValue placeholder="Any number" />
                </SelectTrigger>
                <SelectContent className="border-border/60 bg-card text-card-foreground shadow-soft">
                  {BEDROOM_OPTIONS.map((bed) => (
                    <SelectItem key={bed.value} value={bed.value}>
                      {bed.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Bathrooms" id={bathsId}>
              <Select
                name="bathrooms"
                value={bathrooms}
                onValueChange={(val) => {
                  setBathrooms(val);
                  onFilterChange();
                }}
              >
                <SelectTrigger id={bathsId} className={selectTriggerClassName}>
                  <SelectValue placeholder="Any number" />
                </SelectTrigger>
                <SelectContent className="border-border/60 bg-card text-card-foreground shadow-soft">
                  {BATHROOM_OPTIONS.map((bath) => (
                    <SelectItem key={bath.value} value={bath.value}>
                      {bath.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Min Price ($)" id={minPriceId}>
              <input
                id={minPriceId}
                name="minPrice"
                type="text"
                className="field w-full placeholder:text-muted-foreground/65"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="No min"
                value={minPrice}
                onKeyDown={handlePriceKeyDown}
                onChange={handleMinPriceChange}
              />
            </Field>

            <Field label="Max Price ($)" id={maxPriceId}>
              <input
                id={maxPriceId}
                name="maxPrice"
                type="text"
                className="field w-full placeholder:text-muted-foreground/65"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="No max"
                value={maxPrice}
                onKeyDown={handlePriceKeyDown}
                onChange={handleMaxPriceChange}
              />
            </Field>

            <Field label="Sort By" id={sortId}>
              <Select
                name="sortBy"
                value={sortBy}
                onValueChange={(val) => {
                  setSortBy(val);
                  onFilterChange();
                }}
              >
                <SelectTrigger id={sortId} className={selectTriggerClassName}>
                  <SelectValue placeholder="Newest" />
                </SelectTrigger>
                <SelectContent className="border-border/60 bg-card text-card-foreground shadow-soft">
                  {SORT_OPTIONS.map((sort) => (
                    <SelectItem key={sort.value} value={sort.value}>
                      {sort.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

          {feedback === "empty" && (
            <p
              role="alert"
              aria-live="polite"
              className="mt-6 border-l-2 border-destructive pl-4 text-sm text-destructive animate-rise font-medium"
            >
              Please select at least one search filter (location, property type, bedrooms, or price
              range) to find matching listings.
            </p>
          )}

          {feedback === "sent" && (
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
