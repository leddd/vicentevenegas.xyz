import { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-stroke bg-tile px-3 py-1 text-[14px] font-medium text-textSecondary">
      {children}
    </span>
  );
}
