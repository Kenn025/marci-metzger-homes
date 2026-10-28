import type { ReactNode } from "react";

export interface FieldProps {
  label: string;
  id?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Reusable accessible form field wrapper.
 */
export function Field({ label, id, required, children, className = "" }: FieldProps) {
  return (
    <label htmlFor={id} className={`block min-w-0 ${className}`}>
      <span className="eyebrow max-sm:!text-[0.65rem] max-sm:!tracking-[0.18em] text-muted-foreground flex items-center gap-1">
        {label}
        {required && (
          <span className="text-primary font-bold" aria-hidden="true">
            *
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
