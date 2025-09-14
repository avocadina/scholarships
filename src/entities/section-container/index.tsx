"use client";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useScroll } from "framer-motion";

interface Props {
  heading?: string;
  headingClassName?: string;
  className?: string;
  gap?: number;
  children: React.ReactNode;
  scrollYAmount?: number;
}

export default function SectionContainer({
  heading,
  headingClassName = "blue-300 second-family text-28 semibold",
  className,
  gap = 8,
  children,
  scrollYAmount = 0.5,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollY(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={ref}
      className={classNames(`flex-column gap-${gap} wrapper`, className)}
      style={{
        transform:
          scrollY > scrollYAmount ? `translateY(-100%)` : `translateY(0)`,
        transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {heading && <h2 className={headingClassName}>{heading}</h2>}
      {children}
    </section>
  );
}
