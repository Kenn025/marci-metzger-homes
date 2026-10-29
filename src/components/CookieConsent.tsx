import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the banner only when no prior choice has been stored
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Short delay so the banner animates in after the page paints
      const id = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(id);
    }
    return undefined;
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-3 right-3 z-[90] w-[calc(100%-1.5rem)] max-w-sm animate-rise sm:bottom-5 sm:right-5 sm:w-80 md:bottom-6 md:right-6 md:w-[22rem]"
    >
      <div className="rounded-xl border border-border bg-card px-4 py-4 shadow-soft sm:rounded-2xl sm:px-5 sm:py-5">
        {/* Icon + text */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Cookie
              className="h-[1.1rem] w-[1.1rem] text-primary"
              aria-hidden="true"
            />
          </div>

          <p className="text-[0.8rem] leading-relaxed text-card-foreground/85">
            We use cookies to improve your experience and analyse site traffic.
            By clicking{" "}
            <strong className="text-foreground">&ldquo;Accept&rdquo;</strong> you
            consent to our use of cookies.
          </p>
        </div>

        {/* Buttons — stacked on mobile, inline on sm+ */}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-2.5 sm:pl-12">
          <button
            onClick={accept}
            className="btn btn-primary w-full !py-2.5 !text-[0.65rem] sm:w-auto sm:!px-5 sm:!py-2"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="btn w-full !border-border !py-2.5 !text-[0.65rem] !text-muted-foreground border hover:!bg-secondary hover:!text-foreground sm:w-auto sm:!px-5 sm:!py-2"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
