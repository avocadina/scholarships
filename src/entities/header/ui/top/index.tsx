import React from "react";

import classes from "./header-top.module.scss";
import HeaderLogo from "./logo";

export default function HeaderTop() {
  return (
    <div className={`flex-row gap-8 space-between ${classes.container}`}>
      <HeaderLogo />
      <div className={classes.line}></div>
      <p className={`self-center neutral-600 text-16 regular`}>
        Совет по вопросам назначения и выплаты стипендий Президента Российской
        Федерации <br />
        для обучающихся по образовательным программам высшего образования
      </p>
    </div>
  );
}
