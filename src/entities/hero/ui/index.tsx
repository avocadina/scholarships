import React from "react";

import classes from "./hero.module.scss";
import HeroTextContent from "./text-content";
import { AnimatedItem } from "~/src/shared/ui/on-view-item/ui";

export default function Hero() {
  return (
    <section className={classes.section}>
      <div className="wrapper">
        <AnimatedItem
          slideIn
          direction="down"
          className={`${classes.container}`}
        >
          <HeroTextContent />
        </AnimatedItem>
      </div>
    </section>
  );
}
