import { createFileRoute } from "@tanstack/react-router";
import { useSmoothScroll } from "@/hooks";
import {
  Header,
  Hero,
  About,
  Approach,
  SearchListings,
  Gallery,
  Services,
  Affiliations,
  Contact,
  Footer,
  CookieConsent,
} from "@/components";
import { heroImg } from "@/lib/constants";
import { getJsonLd, SITE_URL } from "@/lib/jsonLd";

const jsonLd = getJsonLd();
const ogImageUrl = `${SITE_URL}${heroImg}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marci Metzger Homes | Pahrump, NV Realtor – The Ridge Realty Group" },
      {
        name: "description",
        content:
          "Trusted Pahrump realtor for nearly 30 years. Buy, sell, or invest with Marci Metzger of The Ridge Realty Group. $28.5M closed and 90 clients helped in 2021.",
      },
      {
        name: "keywords",
        content:
          "Pahrump realtor, Pahrump NV real estate, Marci Metzger, The Ridge Realty Group, homes for sale Pahrump, Nye County properties, desert estates, real estate agent Pahrump",
      },
      { name: "author", content: "Marci Metzger" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      // Geographic / Local SEO
      { name: "geo.region", content: "US-NV" },
      { name: "geo.placename", content: "Pahrump, Nevada" },
      { name: "geo.position", content: "36.2083;-115.9839" },
      { name: "ICBM", content: "36.2083, -115.9839" },
      // Open Graph
      { property: "og:site_name", content: "Marci Metzger Homes" },
      {
        property: "og:title",
        content: "Marci Metzger Homes | Pahrump, NV Realtor – The Ridge Realty Group",
      },
      {
        property: "og:description",
        content:
          "Don't just list it — get it SOLD. Nearly 3 decades helping families buy and sell homes in Pahrump, Nevada.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:secure_url", content: ogImageUrl },
      { property: "og:image:type", content: "image/webp" },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1080" },
      {
        property: "og:image:alt",
        content: "Scenic views of Pahrump, Nevada – Marci Metzger Homes",
      },
      { property: "og:locale", content: "en_US" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Marci Metzger Homes | Pahrump, NV Realtor – The Ridge Realty Group",
      },
      {
        name: "twitter:description",
        content:
          "Nearly 3 decades helping families buy and sell in the Pahrump Valley — with local knowledge you can't search for.",
      },
      { name: "twitter:image", content: ogImageUrl },
      {
        name: "twitter:image:alt",
        content: "Scenic views of Pahrump, Nevada – Marci Metzger Homes",
      },
      // Schema.org JSON-LD structured data for search engines
      {
        "script:ld+json": jsonLd,
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: HomePage,
});

function HomePage() {
  // Initialize smooth scrolling with Lenis & handle #hash clicks
  useSmoothScroll();

  return (
    <div className="overflow-x-clip bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* JSON-LD Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Approach />
        <SearchListings />
        <Gallery />
        <Services />
        <Affiliations />
        <Contact />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
