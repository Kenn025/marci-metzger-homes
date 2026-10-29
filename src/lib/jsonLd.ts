import { heroImg, logoImg, marciImg, PHONE, SOCIALS } from "./constants";

export const SITE_URL = "https://marci-metzger-pahrump.vercel.app";

export function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": `${SITE_URL}/#realestateagent`,
        name: "Marci Metzger Homes – The Ridge Realty Group",
        alternateName: "Marci Metzger Real Estate",
        url: SITE_URL,
        logo: `${SITE_URL}${logoImg}`,
        image: `${SITE_URL}${heroImg}`,
        description:
          "Trusted Pahrump realtor with nearly 30 years of local Southern Nevada real estate expertise helping clients buy and sell residential and commercial properties in Pahrump and Nye County.",
        telephone: "+1-206-919-6886",
        email: "marci@marcimetzgerhomes.com",
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Credit Card, Financing, Mortgage",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3190 HW-160, Suite F",
          addressLocality: "Pahrump",
          addressRegion: "NV",
          postalCode: "89048",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 36.2083,
          longitude: -115.9839,
        },
        hasMap: "https://www.google.com/maps?q=3190+HW-160+Suite+F,+Pahrump,+NV+89048",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Pahrump",
          },
          {
            "@type": "AdministrativeArea",
            name: "Nye County",
          },
          {
            "@type": "State",
            name: "Nevada",
          },
        ],
        sameAs: SOCIALS.map((s) => s.href),
        founder: {
          "@id": `${SITE_URL}/#agent`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#agent`,
        name: "Marci Metzger",
        jobTitle: "Realtor",
        image: `${SITE_URL}${marciImg}`,
        worksFor: {
          "@type": "RealEstateAgent",
          name: "The Ridge Realty Group",
          telephone: "+1-206-919-6886",
        },
        description:
          "Realtor for nearly 3 decades in Pahrump and Nye County, Nevada. Helped 90 clients and closed $28.5M in sales in 2021.",
        telephone: "+1-206-919-6886",
        email: "marci@marcimetzgerhomes.com",
        url: SITE_URL,
        sameAs: SOCIALS.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Marci Metzger Homes",
        description:
          "Pahrump & Nye County real estate with Marci Metzger of The Ridge Realty Group.",
        publisher: {
          "@id": `${SITE_URL}/#realestateagent`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Marci Metzger Homes | Pahrump, NV Realtor – The Ridge Realty Group",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#realestateagent`,
        },
        description:
          "Trusted Pahrump realtor for nearly 30 years. Buy, sell, or invest with Marci Metzger of The Ridge Realty Group. $28.5M closed and 90 clients helped in 2021.",
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${heroImg}`,
        },
      },
    ],
  };
}
