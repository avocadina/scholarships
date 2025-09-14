"use client";
import React, { useRef } from "react";

import classes from "./footer.module.scss";
import Navigation from "~/src/entities/navigation/ui";
import { AnimatedItem } from "~/src/shared/ui/on-view-item/ui";
import { useInView } from "framer-motion";

interface Props {
  paddingBottom?: number;
}

export default function Footer({ paddingBottom = 43 }: Props) {
  return (
    <footer
      style={{
        paddingBottom: `${paddingBottom}px`,
      }}
    >
      <div className="wrapper">
        <AnimatedItem
          slideIn
          direction="up"
          className={`${classes.container} flex-row space-between align-center`}
        >
          <p className={`text-16 neutral-600 ${classes.text}`}>
            © 2022-2025 ФГБНУ НИИ РИНКЦЭ
          </p>
          <Navigation forFooter classNameNav={classes.nav} />
        </AnimatedItem>
      </div>
    </footer>
  );
}
