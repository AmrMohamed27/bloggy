"use client";

import { cn } from "@/lib/utils";
import { Children } from "react";

interface MasonryGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function MasonryGrid({ children, className }: MasonryGridProps) {
  return (
    <div
      className={cn(
        "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6",
        className
      )}
    >
      {Children.map(children, (child, index) => (
        <div key={index} className="break-inside-avoid">
          {child}
        </div>
      ))}
    </div>
  );
}
