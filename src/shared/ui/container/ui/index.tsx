"use client";
import React from "react";
import classNames from "classnames";

import classes from "./container.module.scss";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  bgColor?: string | null;
  ref?: React.Ref<HTMLDivElement>;
}

export default function Container({
  bgColor = "neutral-100",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={classNames(classes.cardSpotlight, className, {
        [`container-${bgColor}`]: bgColor,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
