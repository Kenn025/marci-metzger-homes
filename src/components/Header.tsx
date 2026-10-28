import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useActiveSection, useHeaderScroll } from "@/hooks";
import { NAV, NAV_IDS, PHONE, TEL, logoImg } from "@/lib/constants";

export function Header() {
  const scrolled = useHeaderScroll(40);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useActiveSection([...NAV_IDS]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close the mobile menu on Escape, and when viewport grows into desktop nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        data-landmark="header"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "border-b border-border bg-background/95 shadow-xs backdrop-blur"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-300 md:px-8 ${
            solid ? "py-3" : "py-3 sm:py-6"
          }`}
        >
          <a
            href="/"
            aria-label="Marci Metzger Homes – home"
            className="shrink-0 transition-opacity hover:opacity-90"
          >
            <img
              src={logoImg}
              alt="Marci Metzger Homes logo"
              width={180}
              height={48}
              fetchPriority="high"
              className={`h-7 w-auto transition-all sm:h-10 md:h-12 ${solid ? "" : "invert"}`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 lg:flex xl:gap-8"
            aria-label="Main Navigation"
            data-nav="desktop"
          >
            {NAV.map((n) => {
              const isActive = activeSection === n.href.slice(1);
              return (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setActiveSection(n.href.slice(1))}
                  aria-current={isActive ? "true" : undefined}
                  className={`eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] relative py-2 transition-all duration-200 ${
                    isActive
                      ? "text-primary font-bold after:scale-x-100"
                      : solid
                        ? "text-foreground/85 hover:text-primary after:scale-x-0"
                        : "text-ink-foreground/90 hover:text-primary after:scale-x-0"
                  } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  {n.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className={`-mr-1.5 inline-flex h-9 w-9 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:-mr-2 sm:h-11 sm:w-11 lg:hidden ${
              solid ? "text-foreground" : "text-ink-foreground"
            }`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <X className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <nav
        id="mobile-nav"
        aria-label="Mobile Navigation"
        data-nav="mobile"
        className={`fixed inset-0 z-40 flex flex-col bg-background/98 backdrop-blur-md px-6 pb-8 pt-20 transition-all duration-300 ease-out sm:px-8 sm:pb-10 sm:pt-24 lg:hidden ${
          open
            ? "pointer-events-auto visible opacity-100 translate-y-0"
            : "pointer-events-none invisible opacity-0 -translate-y-4"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-between">
          <div className="flex flex-col divide-y divide-border/60">
            {NAV.map((n, idx) => {
              const isActive = activeSection === n.href.slice(1);
              return (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => {
                    setActiveSection(n.href.slice(1));
                    setOpen(false);
                  }}
                  aria-current={isActive ? "true" : undefined}
                  style={{
                    transitionDelay: open ? `${idx * 40}ms` : "0ms",
                  }}
                  className={`flex items-center justify-between py-3.5 font-display text-xl transition-all sm:py-4 sm:text-2xl ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  } ${
                    isActive ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  <span>{n.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-6">
            <a
              href={TEL}
              className="btn btn-primary max-sm:!px-5 max-sm:!py-3 max-sm:!text-[0.7rem] max-sm:!tracking-[0.14em] w-full justify-center sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {PHONE}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
