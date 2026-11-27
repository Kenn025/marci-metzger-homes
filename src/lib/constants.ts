import heroImg from "@/assets/site/hero.webp";
import heroSmallImg from "@/assets/site/hero-sm.webp";
import heroMediumImg from "@/assets/site/hero-md.webp";
import heroLargeImg from "@/assets/site/hero-lg.webp";
import logoImg from "@/assets/site/logo-main.webp";
import marciImg from "@/assets/site/marci-portrait.webp";
import kitchenImg from "@/assets/site/kitchen.webp";
import poolImg from "@/assets/site/pool-villa.webp";
import keysImg from "@/assets/site/house-keys.webp";
import dreamImg from "@/assets/site/dream-home.webp";
import livingImg from "@/assets/site/living-room.webp";
import modernImg from "@/assets/site/modern-home.webp";
import handshakeImg from "@/assets/site/handshake.webp";
import ridgeLogo from "@/assets/site/logo-ridge.webp";
import ehoLogo from "@/assets/site/logo-eho.webp";
import realtorLogo from "@/assets/site/logo-realtor.webp";
import chamberLogo from "@/assets/site/logo-chamber.webp";
import g1 from "@/assets/site/gallery-ailanto-sunroom.webp";
import g2 from "@/assets/site/gallery-roseworthy-aerial.webp";
import g3 from "@/assets/site/gallery-beacon-aerial.webp";
import g4 from "@/assets/site/gallery-beacon-exterior.webp";
import g5 from "@/assets/site/gallery-beacon-interior.webp";
import g6 from "@/assets/site/gallery-ailanto-exterior.webp";
import g7 from "@/assets/site/gallery-ailanto-backyard.webp";
import g1Small from "@/assets/site/sunroom-sm.webp";
import g1Medium from "@/assets/site/sunroom-md.webp";
import g1Thumb from "@/assets/site/sunroom-thumb.webp";
import g2Small from "@/assets/site/roseworthy-sm.webp";
import g2Medium from "@/assets/site/roseworthy-md.webp";
import g2Thumb from "@/assets/site/roseworthy-thumb.webp";
import g3Small from "@/assets/site/beacon-aerial-sm.webp";
import g3Medium from "@/assets/site/beacon-aerial-md.webp";
import g3Thumb from "@/assets/site/beacon-aerial-thumb.webp";
import g4Small from "@/assets/site/beacon-exterior-sm.webp";
import g4Medium from "@/assets/site/beacon-exterior-md.webp";
import g4Thumb from "@/assets/site/beacon-exterior-thumb.webp";
import g5Small from "@/assets/site/beacon-interior-sm.webp";
import g5Medium from "@/assets/site/beacon-interior-md.webp";
import g5Thumb from "@/assets/site/beacon-interior-thumb.webp";
import g6Small from "@/assets/site/ailanto-exterior-sm.webp";
import g6Medium from "@/assets/site/ailanto-exterior-md.webp";
import g6Thumb from "@/assets/site/ailanto-exterior-thumb.webp";
import g7Small from "@/assets/site/backyard-sm.webp";
import g7Medium from "@/assets/site/backyard-md.webp";
import g7Thumb from "@/assets/site/backyard-thumb.webp";
import { faFacebookF, faInstagram, faLinkedinIn, faYelp } from "@fortawesome/free-brands-svg-icons";

/* ---- Contact ---- */
export const PHONE = "(206) 919-6886";
export const TEL = "tel:+12069196886";

/* ---- Navigation ---- */
export const NAV = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#search", label: "Search" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export const NAV_IDS = ["about", "approach", "search", "gallery", "services", "contact"] as const;

/* ---- Images ---- */
export {
  heroImg,
  heroSmallImg,
  heroMediumImg,
  heroLargeImg,
  logoImg,
  marciImg,
  kitchenImg,
  poolImg,
  keysImg,
  dreamImg,
};
export { livingImg, modernImg, handshakeImg };
export { ridgeLogo, ehoLogo, realtorLogo, chamberLogo };

export const GALLERY = [g1, g2, g3, g4, g5, g6, g7];
export const GALLERY_SMALL = [g1Small, g2Small, g3Small, g4Small, g5Small, g6Small, g7Small];
export const GALLERY_MEDIUM = [
  g1Medium,
  g2Medium,
  g3Medium,
  g4Medium,
  g5Medium,
  g6Medium,
  g7Medium,
];
export const GALLERY_THUMB = [g1Thumb, g2Thumb, g3Thumb, g4Thumb, g5Thumb, g6Thumb, g7Thumb];

/* ---- Hero stats ---- */
export const STATS: [string, string][] = [
  ["~30", "Years in real estate"],
  ["$28.5M", "Closed in 2021"],
  ["90", "Clients helped in 2021"],
];

/* ---- Approach features ---- */
export const FEATURES = [
  {
    img: kitchenImg,
    alt: "Bright modern kitchen with marble island",
    kicker: "Track record",
    title: "Top Residential Sales Last 5 Years",
    body: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market.",
  },
  {
    img: poolImg,
    alt: "Spanish-style home with lit pool at dusk",
    kicker: "For sellers",
    title: "Don't Just List It… Get It Sold",
    body: "We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
  },
  {
    img: keysImg,
    alt: "House keys with a red house keychain on wood",
    kicker: "For buyers",
    title: "Guide to Buyers",
    body: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
  },
] as const;

/* ---- Services ---- */
export const SERVICES = [
  {
    img: livingImg,
    alt: "Bright living room with a white coffee table",
    title: "Real Estate Done Right",
    body: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },
  {
    img: modernImg,
    alt: "Modern home with lawn and pool",
    title: "Commercial & Residential",
    body: "Large or small, condo or mansion, we can find it and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
  },
  {
    img: handshakeImg,
    alt: "Clients shaking hands after a meeting",
    title: "Rely on Expertise",
    body: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
  },
] as const;

/* ---- Affiliation logos ---- */
export const AFFILIATION_LOGOS: [string, string][] = [
  [ridgeLogo, "The Ridge Realty Group"],
  [ehoLogo, "Equal Housing Opportunity"],
  [realtorLogo, "REALTOR®"],
  [chamberLogo, "Pahrump Valley Chamber of Commerce"],
];

/* ---- Social links ---- */
export const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/MarciHomes/",
    icon: faFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/marcimetzger_theridge/",
    icon: faInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marci-metzger-30642496/",
    icon: faLinkedinIn,
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w",
    icon: faYelp,
  },
] as const;
