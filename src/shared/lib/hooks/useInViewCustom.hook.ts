import { useEffect, useRef, useState } from "react";

interface IOptions {
  threshold: number;
}

export const useInViewCustom = <T extends HTMLElement>(options?: IOptions) => {
  const [inViewItems, setInViewItems] = useState<number[]>([]);
  const blockRefs = useRef<T[]>([]);

  const registerRef = (el: T | null) => {
    if (!el) return;
    if (blockRefs.current.includes(el)) return;
    blockRefs.current.push(el);
  };

  useEffect(() => {
    if (!blockRefs.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setInViewItems((prev) => [...prev, index]);
          } else {
            setInViewItems([]);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        ...options,
      },
    );

    blockRefs.current.forEach((el) => observer.observe(el));

    return () => {
      blockRefs.current?.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return {
    registerRef,
    inViewItems,
  };
};
