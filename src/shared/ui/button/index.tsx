import React from "react";

import classes from "./button.module.scss";
import classNames from "classnames";

export type ButtonTypeButtonT = "ghost" | "blue";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  typeButton: ButtonTypeButtonT;
  size: string; //4-12 6-10 10, из переменных
  radius?: number;
  needActiveScale?: boolean;
  className?: string;
  justifyCenter?: boolean;
  disabled?: boolean;
  asLink?: boolean;
}

export default function Button({
  typeButton,
  size,
  radius,
  needActiveScale = true,
  onClick,
  className,
  justifyCenter = true,
  children,
  disabled,
  asLink = false,
  ...rest
}: Props) {
  const classNameLocal = classNames(
    className,
    classes.button,
    classes[typeButton],
    `padding-${size}`,
    {
      "center-element": justifyCenter,
      [classes.activeScale]: needActiveScale,
    },
  );

  if (asLink) {
    return (
      <div
        className={`${classNameLocal}`}
        style={{
          borderRadius: `${radius}px`,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${classNameLocal}`}
      {...rest}
      style={{
        borderRadius: `${radius}px`,
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
