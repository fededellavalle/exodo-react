import { useEffect, useRef } from "react";

export function useCarouselAutoplay({
  index,
  setIndex,
  maxIndex,
  delay = 4000,
}) {
  const timeoutRef = useRef(null);

  const resetAutoplay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, delay);
  };

  useEffect(() => {
    resetAutoplay();
    return () => clearTimeout(timeoutRef.current);
  }, [index, maxIndex, delay]);

  return { resetAutoplay };
}
