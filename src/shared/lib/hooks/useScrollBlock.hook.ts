import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const useScrollBlock = <T extends HTMLElement>() => {
  const blockRef = useRef<T>(null);
  const { scrollYProgress } = useScroll({
    target: blockRef,
  });
  const [scrollYNum, setScrollYNum] = useState<number>(0);

  useEffect(() => {
    const el = blockRef.current;
    if (!el) return;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollYNum(latest);
    });

    return () => unsubscribe();
  }, [blockRef, scrollYProgress]);

  return {
    scrollYNum,
    blockRef,
    scrollYProgress,
  };
};
