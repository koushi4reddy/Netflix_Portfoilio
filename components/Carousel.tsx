"use client";

import { useRef, useState, useEffect } from "react";

type CarouselItem = {
  title: string;
  desc: string;
  bg: string;
};

export default function Carousel({ items }: { items: CarouselItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Check if we can scroll
  const checkScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    setShowLeft(container.scrollLeft > 0);
    setShowRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    const container = containerRef.current;
    container?.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("resize", checkScroll);
      container?.removeEventListener("scroll", checkScroll);
    };
  }, [items]);

  const scrollAmount = 280; // adjust for card width + gap

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full flex items-center">
      {/* Left Arrow */}
      {showLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 z-20"
        >
          ◀
        </button>
      )}

      {/* Cards */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-hidden px-4"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 h-48 rounded-lg p-4 flex flex-col justify-center"
            style={{ backgroundColor: item.bg }}
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showRight && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 z-20"
        >
          ▶
        </button>
      )}
    </div>
  );
}
