import { useEffect, useRef, useState } from "react";

type UseScrollAnimationOptions = {
  threshold?: number | number[];
  root?: Element | Document | null;
  rootMargin?: string;
  once?: boolean;
};

type UseScrollAnimationReturn<T extends Element> = {
  ref: React.MutableRefObject<T | null>;
  isVisible: boolean;
};

export const useScrollAnimation = <T extends Element = HTMLElement>(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn<T> => {
  const { threshold = 0.1, root = null, rootMargin = "0px", once = true } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, once]);

  return { ref, isVisible };
};

