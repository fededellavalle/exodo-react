import { useEffect, useRef } from "react";

export function useCascadeReveal({ delay = 100, threshold = 0.2 } = {}) {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * delay);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [delay, threshold]);

  return elementsRef;
}
