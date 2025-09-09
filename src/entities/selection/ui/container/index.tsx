import React from "react";
import classNames from "classnames";

import classes from "./selection-container.module.scss";
import Container from "~/src/shared/ui/container";

interface Props {
  children: React.ReactNode;
  className?: string;
  flexDirection?: "row" | "column";
}

export default function SelectionContainer({
  children,
  className,
  flexDirection = "column",
}: Props) {
  return (
    <Container
      className={classNames(
        `flex-${flexDirection}`,
        className,
        classes.container,
      )}
    >
      {children}
    </Container>
  );
}
