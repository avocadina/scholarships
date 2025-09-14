import React from "react";

import classes from "./hero-warning.module.scss";
import WarningIcon from "~/public/homepage/hero/warning-icon.svg";
import Container from "~/src/shared/ui/container/ui";

export default function HeroWarning() {
  return (
    <Container
      bgColor="red-100"
      className={`flex-row align-center gap-6px ${classes.container}`}
    >
      <WarningIcon className={classes.icon} />
      <span className="text-16 semibold second-family red-500">
        Приём заявок завершён 28 февраля 2025 года
      </span>
    </Container>
  );
}
