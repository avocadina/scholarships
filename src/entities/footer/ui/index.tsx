import React from "react";

import classes from "./footer.module.scss";
import Container from "~/src/shared/ui/container";
import Navigation from "~/src/entities/navigation/ui";

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
      <Container
        className={`wrapper ${classes.container} flex-row space-between align-center`}
      >
        <p className={`text-16 neutral-600 ${classes.text}`}>
          © 2022-2025 ФГБНУ НИИ РИНКЦЭ
        </p>
        <Navigation forFooter classNameNav={classes.nav} />
      </Container>
    </footer>
  );
}
