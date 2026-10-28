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
} from "@/components";

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
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      // Open Graph
      { property: "og:site_name", content: "Marci Metzger Homes" },
      { property: "og:title", content: "Marci Metzger Homes | Pahrump Realtor" },
      {
        property: "og:description",
        content:
          "Don't just list it — get it SOLD. Nearly 3 decades helping families buy and sell homes in Pahrump, Nevada.",
      },
      { property: "og:type", content: "website" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Marci Metzger Homes | Pahrump, NV Realtor" },
      {
        name: "twitter:description",
        content:
          "Nearly 3 decades helping families buy and sell in the Pahrump Valley — with local knowledge you can't search for.",
      },
    ],
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
    </div>
  );
}
