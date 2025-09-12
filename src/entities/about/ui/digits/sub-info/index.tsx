import React from "react";

import classes from "./about-sub-info.module.scss";
import Info from "~/public/homepage/about/info.svg";
import Container from "~/src/shared/ui/container";

export default function AboutSubInfo() {
  return (
    <Container className={`${classes.container} flex-row align-center gap-3`}>
      <Info />
      <p className="teal-600 variant-numeric second-family text-18 regular">
        Поддерживаются очные аспиранты и адъюнкты с&nbsp;руководителем и
        утверждённой темой.
      </p>
    </Container>
  );
}
