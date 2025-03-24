"use client";

import React from "react";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { POSTS_PER_PAGE } from "@/constants";

interface InfiniteScrollLayoutProps {
  children: React.ReactNode;
  className?: string;
  loadMoreThreshold?: number;
}

export default function InfiniteScrollLayout({
  children,
  className,
  loadMoreThreshold = 200,
}: InfiniteScrollLayoutProps) {
  const childrenArray = React.Children.toArray(children);
  const [visibleItems, setVisibleItems] = useState(POSTS_PER_PAGE);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = loaderRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && visibleItems < childrenArray.length) {
          // Add more items when user scrolls near the bottom
          setTimeout(() => {
            setVisibleItems((prev) => Math.min(prev + 3, childrenArray.length));
          }, 2000); // Simulate loading delay
        }
      },
      {
        root: null, // Use the viewport as root
        rootMargin: `0px 0px ${loadMoreThreshold}px 0px`, // Extra space at bottom
        threshold: 0.1, // Trigger when 10% of element is visible
      }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [childrenArray.length, loadMoreThreshold, visibleItems]);

  return (
    <div className={cn("space-y-6", className)}>
      {childrenArray.slice(0, visibleItems).map((child, index) => (
        <div key={index} className="animate-fadeIn">
          {child}
        </div>
      ))}
      {visibleItems < childrenArray.length && (
        <div ref={loaderRef} className="flex justify-center py-8">
          <div className="flex space-x-2">
            <div className="bg-violet-600 dark:bg-violet-400 rounded-full w-2 h-2 animate-bounce duration-100 delay-0"></div>
            <div className="bg-violet-600 dark:bg-violet-400 rounded-full w-2 h-2 animate-bounce duration-100 delay-200"></div>
            <div className="bg-violet-600 dark:bg-violet-400 rounded-full w-2 h-2 animate-bounce duration-100 delay-500"></div>
          </div>
        </div>
      )}
    </div>
  );
}
