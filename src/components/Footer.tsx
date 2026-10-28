import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSectionReveal } from "@/hooks";
import { NAV, SOCIALS, logoImg } from "@/lib/constants";

export function Footer() {
  const footerReveal = useSectionReveal<HTMLElement>({
    direction: "up",
    distance: 25,
    duration: "0.7s",
  });

  return (
    <footer
      ref={footerReveal.ref}
      style={footerReveal.style}
      data-landmark="footer"
      className="bg-ink pb-10 pt-12 text-ink-foreground sm:pb-12 sm:pt-16 md:pt-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <a
            href="/"
            aria-label="Marci Metzger Homes – home"
            className="shrink-0 transition-opacity hover:opacity-90"
          >
            <img
              src={logoImg}
              alt="Marci Metzger Homes"
              width={160}
              height={48}
              loading="lazy"
              decoding="async"
              className="h-8 w-auto invert transition-opacity hover:opacity-85 sm:h-12"
            />
          </a>

          <p className="mt-3 text-xs text-ink-foreground/75 sm:text-sm">
            The Ridge Realty Group • Pahrump, Nevada
          </p>

          {/* Quick Footer Navigation */}
          <nav
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-1 sm:gap-x-8"
            aria-label="Footer Navigation"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] py-2 text-ink-foreground/75 transition-colors hover:text-accent"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Social Profiles */}
          <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Marci Metzger on ${s.name}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-ink-foreground/80 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white sm:h-11 sm:w-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <FontAwesomeIcon
                  icon={s.icon}
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Legal & Attribution */}
        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-[0.65rem] leading-relaxed tracking-wider text-ink-foreground/60 sm:text-xs md:flex-row md:gap-4 md:text-left">
            <p>COPYRIGHT © {new Date().getFullYear()} MARCI METZGER – ALL RIGHTS RESERVED</p>
            <p>
              Made with{" "}
              <a
                href="https://kennethfrancisco.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-foreground/80 underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                Kenneth Francisco
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
