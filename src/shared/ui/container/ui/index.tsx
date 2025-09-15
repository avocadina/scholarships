"use client";
import React from "react";
import classNames from "classnames";

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
      className={classNames(className, {
        [`container-${bgColor}`]: bgColor,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
