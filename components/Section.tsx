import { ReactNode } from "react";

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`max-w-[1480px] mx-auto px-5 ${className}`}>{children}</section>
  );
}

