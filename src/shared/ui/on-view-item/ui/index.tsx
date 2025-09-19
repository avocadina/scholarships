"use client";
import React, { useRef, ReactNode, ElementType } from "react";
import { useInView } from "framer-motion";
import Container from "../../container/ui";

interface AnimatedItemProps<T extends ElementType> {
  children: ReactNode;
  amount?: number;
  duration?: number;
  delay?: number;
  index?: number;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right";
  slideIn?: boolean;
  onMouseEnter?: () => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  color?: string | null;
  inView?: boolean;
  role?: string;
  tag?: T;
}

export default function AnimatedItem<T extends ElementType>({
  children,
  amount = 0.5,
  duration = 0.5,
  delay = 0,
  index = 0,
  stagger = 0.2,
  direction = "up",
  slideIn = false,
  onMouseEnter,
  onClick,
  className,
  style,
  color,
  inView,
  role,
  tag,
}: AnimatedItemProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewLocal = useInView(ref, { amount, once: false });

  const offset = 50;

  const initialPositions: Record<string, string> = {
    up: `translateY(${offset}px)`,
    down: `translateY(${-offset}px)`,
    left: `translateX(${offset}px)`,
    right: `translateX(${-offset}px)`,
  };

  const hiddenTransform = slideIn ? initialPositions[direction] : "scale(0.7)";

  const visibleTransform = "translate(0,0) scale(1)";
  const Tag = tag;

  return (
    <Container
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      style={{
        transitionProperty: "transform, opacity",
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay + index * stagger}s`,
        transitionTimingFunction: "ease-out",
        transform: (inView ?? inViewLocal) ? visibleTransform : hiddenTransform,
        opacity: (inView ?? inViewLocal) ? 1 : 0,
        ...style,
      }}
      className={className}
      bgColor={color}
      role={role}
      tag={tag}
    >
      {children}
    </Container>
  );
}
