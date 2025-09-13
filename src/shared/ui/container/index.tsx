import React from "react";
import classNames from "classnames";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function Container({
  color = "neutral-100",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div className={classNames(className, `container-${color}`)} {...rest}>
      {children}
    </div>
  );
}
