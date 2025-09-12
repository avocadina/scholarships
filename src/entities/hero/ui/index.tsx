import React from "react";

import classes from "./hero.module.scss";
import Container from "~/src/shared/ui/container";
import HeroTextContent from "./text-content";

export default function Hero() {
  return (
    <div className="wrapper">
      <Container className={`${classes.container}`}>
        <HeroTextContent />
      </Container>
    </div>
  );
}
