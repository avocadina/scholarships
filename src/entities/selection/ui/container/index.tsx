import React from "react";
import classNames from "classnames";

import classes from "./selection-container.module.scss";
import AnimatedItem from "~/src/shared/ui/on-view-item/ui";

interface Props {
  children: React.ReactNode;
  className?: string;
  flexDirection?: "row" | "column";
  index: number;
  inView: boolean;
}

export default function SelectionContainer({
  children,
  className,
  flexDirection = "column",
  index,
  inView,
}: Props) {
  return (
    <AnimatedItem
      slideIn
      index={index}
      className={classNames(
        `flex-${flexDirection}`,
        className,
        classes.container,
      )}
      inView={inView}
      duration={0.3}
    >
      {children}
    </AnimatedItem>
  );
}
