import { useState, useId, type FormEvent } from "react";
import { MapPin, Phone, Clock, ArrowRight, Mail } from "lucide-react";
import { useSectionReveal } from "@/hooks";
import { Field } from "./Field";
import { PHONE, TEL } from "@/lib/constants";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const messageId = useId();
  const errorId = useId();

  const detailsReveal = useSectionReveal<HTMLDivElement>({
    direction: "left",
    distance: 35,
    duration: "0.8s",
  });

  const formReveal = useSectionReveal<HTMLFormElement>({
    direction: "right",
    distance: 35,
    duration: "0.8s",
    delay: "0.15s",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    e.currentTarget.reset();
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
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
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
          <div className="mt-8 overflow-hidden border border-border sm:mt-10 rounded-sm">
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
            className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] mt-3 inline-flex min-h-11 items-center gap-2 text-primary hover:text-foreground transition-colors"
          >
            Get driving directions{" "}
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formReveal.ref}
          style={formReveal.style}
          onSubmit={onSubmit}
          noValidate
          aria-label="Send a direct inquiry message"
          className="min-w-0 self-start bg-card p-5 shadow-soft sm:p-8 md:p-10 rounded-sm border border-border/40"
        >
          <h3 className="text-xl sm:text-3xl font-medium">Send a message</h3>

          <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-7">
            <Field label="Full Name" id={nameId}>
              <input
                id={nameId}
                name="name"
                type="text"
                autoComplete="name"
                className="field w-full"
                placeholder="Jane Doe"
              />
            </Field>

            <Field label="Email Address" id={emailId} required>
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-required="true"
                aria-invalid={status === "error"}
                aria-describedby={status === "error" ? errorId : undefined}
                onChange={() => status === "error" && setStatus("idle")}
                className={`field w-full ${status === "error" ? "border-destructive text-destructive" : ""}`}
                placeholder="jane@example.com"
              />
              {status === "error" && (
                <span
                  id={errorId}
                  role="alert"
                  className="mt-2 block text-sm text-destructive animate-rise"
                >
                  Please enter a valid email address.
                </span>
              )}
            </Field>

            <Field label="Phone (Optional)" id={phoneId}>
              <input
                id={phoneId}
                name="phone"
                type="tel"
                autoComplete="tel"
                className="field w-full"
                placeholder="(775) 000-0000"
              />
            </Field>

            <Field label="How Can We Help?" id={messageId}>
              <textarea
                id={messageId}
                name="message"
                rows={4}
                className="field w-full resize-none"
                placeholder="Tell us about your timeline, buying or selling goals..."
              />
            </Field>
          </div>

          <button
            type="submit"
            className="btn btn-primary max-sm:!px-5 max-sm:!py-3 max-sm:!text-[0.7rem] max-sm:!tracking-[0.14em] mt-8 w-full justify-center sm:mt-10 shadow-md hover:scale-[1.01] active:scale-[0.99]"
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
