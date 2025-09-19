"use client";
import React, { ElementType } from "react";
import classNames from "classnames";

export interface ContainerProps<T extends ElementType>
  extends React.HTMLAttributes<HTMLDivElement> {
  bgColor?: string | null;
  ref?: React.Ref<HTMLDivElement>;
  tag?: T;
}

export default function Container<T extends ElementType>({
  bgColor = "neutral-100",
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Tag = rest.tag || "div";

  return (
    <Tag
      className={classNames(className, {
        [`container-${bgColor}`]: bgColor,
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
}
