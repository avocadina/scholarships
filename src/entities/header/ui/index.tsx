import React from "react";

import classes from "./header.module.scss";
import HeaderTop from "./top";
import Navigation from "~/src/entities/navigation/ui";
import { AnimatedItem } from "~/src/shared/ui/on-view-item/ui";

interface Props {
  needBottom?: boolean;
}

export default function Header({ needBottom = true }: Props) {
  return (
    <header className={classes.section}>
      <div className="wrapper">
        <AnimatedItem
          slideIn
          direction="down"
          className={`flex-column ${classes.wrapper}`}
        >
          <HeaderTop />
          {needBottom && <Navigation />}
        </AnimatedItem>
      </div>
    </header>
  );
}
