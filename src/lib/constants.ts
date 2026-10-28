import heroImg from "@/assets/site/hero.jpg";
import logoImg from "@/assets/site/logo-main.png";
import marciImg from "@/assets/site/marci-portrait.jpg";
import kitchenImg from "@/assets/site/kitchen.jpg";
import poolImg from "@/assets/site/pool-villa.jpg";
import keysImg from "@/assets/site/house-keys.jpg";
import dreamImg from "@/assets/site/dream-home.jpg";
import livingImg from "@/assets/site/living-room.jpg";
import modernImg from "@/assets/site/modern-home.jpg";
import handshakeImg from "@/assets/site/handshake.jpg";
import ridgeLogo from "@/assets/site/logo-ridge.png";
import ehoLogo from "@/assets/site/logo-eho.png";
import realtorLogo from "@/assets/site/logo-realtor.jpg";
import chamberLogo from "@/assets/site/logo-chamber.jpg";
import g1 from "@/assets/site/gallery-ailanto-sunroom.jpg";
import g2 from "@/assets/site/gallery-roseworthy-aerial.jpg";
import g3 from "@/assets/site/gallery-beacon-aerial.jpg";
import g4 from "@/assets/site/gallery-beacon-exterior.jpg";
import g5 from "@/assets/site/gallery-beacon-interior.jpg";
import g6 from "@/assets/site/gallery-ailanto-exterior.jpg";
import g7 from "@/assets/site/gallery-ailanto-backyard.jpg";
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
export { heroImg, logoImg, marciImg, kitchenImg, poolImg, keysImg, dreamImg };
export { livingImg, modernImg, handshakeImg };
export { ridgeLogo, ehoLogo, realtorLogo, chamberLogo };

export const GALLERY = [g1, g2, g3, g4, g5, g6, g7];

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
