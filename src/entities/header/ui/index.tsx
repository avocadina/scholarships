import React from "react";

import classes from "./header.module.scss";
import Container from "~/src/shared/ui/container";
import HeaderTop from "./top";
import Navigation from "~/src/entities/navigation/ui";

interface Props {
  needBottom?: boolean;
}

export default function Header({ needBottom = true }: Props) {
  return (
    <header className={classes.section}>
      <Container className={`flex-column wrapper ${classes.wrapper}`}>
        <HeaderTop />
        {needBottom && <Navigation />}
      </Container>
    </header>
  );
}
