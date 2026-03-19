"use client";

import { useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

export function useCarousel(length: number, initialIndex = 1) {
  const [active, setActive] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);

  const goTo = useCallback(
    (index: number) => setActive(Math.max(0, Math.min(length - 1, index))),
    [length]
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => goTo(active + 1),
    onSwipedRight: () => goTo(active - 1),
    onSwiping: () => setIsDragging(true),
    onSwiped: () => setIsDragging(false),
    trackMouse: true,
    preventScrollOnSwipe: true,
    delta: 12,
  });

  return { active, isDragging, goTo, handlers };
}
