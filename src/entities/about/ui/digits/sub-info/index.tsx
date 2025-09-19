import React from "react";

import classes from "./about-sub-info.module.scss";
import Info from "~/public/homepage/about/info.svg";
import AnimatedItem from "~/src/shared/ui/on-view-item/ui";

interface Props {
  inView: boolean;
}

export default function AboutSubInfo({ inView }: Props) {
  return (
    <AnimatedItem
      index={2}
      slideIn
      inView={inView}
      className={`${classes.container} flex-row align-center gap-3`}
    >
      <Info className={classes.icon} />
      <p className="teal-600 variant-numeric second-family text-18 regular">
        Поддерживаются очные аспиранты и адъюнкты с&nbsp;руководителем и
        утверждённой темой.
      </p>
    </AnimatedItem>
  );
}
