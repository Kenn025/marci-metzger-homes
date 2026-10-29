import {
  useState,
  useEffect,
  useId,
  type FormEvent,
  type FocusEvent,
  type FormEvent as ReactFormEvent,
} from "react";
import { MapPin, Phone, Clock, ArrowRight, Mail } from "lucide-react";
import { useSectionReveal } from "@/hooks";
import { Field } from "./Field";
import { PHONE, TEL } from "@/lib/constants";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  // True only while the textarea is focused AND its content overflows
  const [messageScrollable, setMessageScrollable] = useState(false);

  const nameId = useId();
  const nameErrorId = useId();
  const emailId = useId();
  const emailErrorId = useId();
  const messageId = useId();

  const detailsReveal = useSectionReveal<HTMLDivElement>({
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
  const [formAnimated, setFormAnimated] = useState(false);

  useEffect(() => {
    if (!formReveal.isInView) return;
    const t = setTimeout(() => setFormAnimated(true), 950);
    return () => clearTimeout(t);
  }, [formReveal.isInView]);

  const updateMessageScrollable = (el: HTMLTextAreaElement) => {
    setMessageScrollable(el.scrollHeight > el.clientHeight);
  };

  const handleMessageFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    updateMessageScrollable(e.currentTarget);
  };

  const handleMessageInput = (e: ReactFormEvent<HTMLTextAreaElement>) => {
    updateMessageScrollable(e.currentTarget);
  };

  const handleMessageBlur = () => {
    setMessageScrollable(false);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = String(new FormData(form).get("name") || "").trim();
    const email = String(new FormData(form).get("email") || "").trim();

    let hasError = false;

    if (!name) {
      setNameError("Full name is required.");
      hasError = true;
    } else {
      setNameError(null);
    }

    if (!email) {
      setEmailError("Email address is required.");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    } else {
      setEmailError(null);
    }

    if (hasError) {
      setStatus("error");
      return;
    }

    setNameError(null);
    setEmailError(null);
    setStatus("sent");
    setMessageScrollable(false);
    form.reset();
  };

  return (
    <section
      id="contact"
      data-section="contact"
      aria-label="Contact Marci Metzger"
      itemScope
      itemType="https://schema.org/RealEstateAgent"
      className="pt-20 pb-14 sm:py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 md:px-8 min-[900px]:grid-cols-2 min-[900px]:items-start min-[900px]:gap-16">
        {/* Contact Info & Location */}
        <div ref={detailsReveal.ref} style={detailsReveal.style} className="min-w-0">
          <p className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] text-primary">
            Call or visit
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl">Let's talk about your move</h2>

          <address className="mt-8 not-italic space-y-6 text-sm sm:mt-10 sm:text-base">
            <div
              className="flex gap-4"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <MapPin
                className="mt-1 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p itemProp="name" className="font-semibold text-foreground">
                  Marci Metzger — The Ridge Realty Group
                </p>
                <p className="text-muted-foreground">
                  <span itemProp="streetAddress">3190 HW-160, Suite F</span>,{" "}
                  <span itemProp="addressLocality">Pahrump</span>,{" "}
                  <span itemProp="addressRegion">NV</span> <span itemProp="postalCode">89048</span>,{" "}
                  <span itemProp="addressCountry">United States</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone
                className="mt-1 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <a
                href={TEL}
                itemProp="telephone"
                className="font-semibold text-foreground hover:text-primary transition-colors"
              >
                {PHONE}
              </a>
            </div>

            <div className="flex gap-4">
              <Mail
                className="mt-1 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <a
                href="mailto:marci@marcimetzgerhomes.com"
                itemProp="email"
                className="font-semibold text-foreground hover:text-primary transition-colors"
              >
                marci@marcimetzgerhomes.com
              </a>
            </div>

            <div className="flex gap-4">
              <Clock
                className="mt-1 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="font-semibold text-foreground">
                  Office hours: open daily 8:00 am – 7:00 pm
                </p>
                <p className="text-muted-foreground">
                  Appointments outside office hours available upon request. Just call!
                </p>
              </div>
            </div>
          </address>

          {/* Interactive Map Embed */}
          <div className="mt-8 overflow-hidden border border-border sm:mt-10 rounded-lg">
            <iframe
              title="Interactive Google Map to The Ridge Realty Group in Pahrump NV"
              src="https://www.google.com/maps?q=3190+HW-160+Suite+F,+Pahrump,+NV+89048&output=embed"
              className="block h-64 w-full rounded-sm grayscale transition-all duration-500 hover:grayscale-0 sm:h-72 md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=3190+HW-160+Suite+F,+Pahrump,+NV+89048"
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] mt-3 inline-flex min-h-11 items-center gap-2 text-primary hover:text-foreground transition-colors min-[900px]:mt-4 min-[900px]:min-h-0 min-[900px]:leading-none"
          >
            Get directions <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formReveal.ref}
          style={formAnimated ? undefined : formReveal.style}
          onSubmit={onSubmit}
          noValidate
          aria-label="Send a direct inquiry message"
          className="min-w-0 self-start rounded-lg border border-border/40 bg-card p-5 shadow-md sm:p-8 md:p-10 min-[900px]:sticky min-[900px]:top-[120px]"
        >
          <h3 className="text-xl sm:text-3xl font-medium">Send a message</h3>

          <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-7">
            <Field label="Full Name" id={nameId}>
              <input
                id={nameId}
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                aria-invalid={Boolean(nameError)}
                aria-describedby={nameError ? nameErrorId : undefined}
                onChange={() => {
                  if (nameError) {
                    setNameError(null);
                    if (!emailError) setStatus("idle");
                  }
                }}
                className={`field w-full placeholder:text-muted-foreground/65 ${
                  nameError ? "!border-destructive" : ""
                }`}
                placeholder="John Doe"
              />
              {nameError && (
                <span
                  id={nameErrorId}
                  role="alert"
                  className="mt-2 block text-sm text-destructive animate-rise"
                >
                  {nameError}
                </span>
              )}
            </Field>

            <Field label="Email Address" id={emailId}>
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-required="true"
                aria-invalid={Boolean(emailError)}
                aria-describedby={emailError ? emailErrorId : undefined}
                onChange={() => {
                  if (emailError) {
                    setEmailError(null);
                    if (!nameError) setStatus("idle");
                  }
                }}
                className={`field w-full placeholder:text-muted-foreground/65 ${
                  emailError ? "!border-destructive" : ""
                }`}
                placeholder="john@example.com"
              />
              {emailError && (
                <span
                  id={emailErrorId}
                  role="alert"
                  className="mt-2 block text-sm text-destructive animate-rise"
                >
                  {emailError}
                </span>
              )}
            </Field>

            <Field label="How Can We Help?" id={messageId}>
              <textarea
                id={messageId}
                name="message"
                rows={4}
                // Lenis ignores wheel/touch here ONLY when focused and overflowing,
                // otherwise the page scrolls normally even while hovering the textarea.
                data-lenis-prevent={messageScrollable ? "true" : undefined}
                onFocus={handleMessageFocus}
                onInput={handleMessageInput}
                onBlur={handleMessageBlur}
                className={`field w-full resize-none placeholder:text-muted-foreground/65 pr-2.5 ${
                  messageScrollable ? "overscroll-contain" : ""
                }`}
                placeholder="Tell us about your timeline, buying or selling goals..."
              />
            </Field>
          </div>

          <button
            type="submit"
            className="btn btn-primary max-sm:!px-5 max-sm:!py-3 max-sm:!text-[0.7rem] max-sm:!tracking-[0.14em] mt-6 w-full justify-center sm:mt-8 shadow-md hover:scale-[1.01] active:scale-[0.99]"
          >
            Send Message
          </button>

          {status === "sent" && (
            <p
              role="status"
              aria-live="polite"
              className="mt-4 text-sm font-semibold text-primary animate-rise"
            >
              Thank you — Marci has received your message and will be in touch shortly!
            </p>
          )}

          <p className="mt-6 text-xs text-muted-foreground">
            This inquiry form is protected by reCAPTCHA and the Google Privacy Policy and Terms of
            Service apply.
          </p>
        </form>
      </div>
    </section>
  );
}
