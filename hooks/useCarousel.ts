import { useState, useCallback, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export function useCarousel(length: number, initialIndex = 1) {
  const [active, setActive] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);

  // Ref keeps swipe callbacks current without recreating useSwipeable on every render
  const activeRef = useRef(active);
  activeRef.current = active;

  const goTo = useCallback(
    (index: number) => setActive(Math.max(0, Math.min(length - 1, index))),
    [length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  goTo(activeRef.current - 1);
      if (e.key === "ArrowRight") goTo(activeRef.current + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goTo]);

  const handlers = useSwipeable({
    onSwipedLeft:  () => goTo(activeRef.current + 1),
    onSwipedRight: () => goTo(activeRef.current - 1),
    onSwiping: () => setIsDragging(true),
    onSwiped:  () => setIsDragging(false),
    trackMouse: true,           // drag-to-swipe on desktop
    touchEventOptions: { passive: false },
    preventScrollOnSwipe: true,
    delta: 10,                  // min px to register as swipe
  });

  return { active, isDragging, goTo, handlers };
}
