import React from "react";

import classes from "./logo-text.module.scss";

export default function HeaderLogoText() {
  return (
    <div className={`flex-column ${classes.container}`}>
      <p className="second-family neutral-900 semibold text-18">
        МИНОБРНАУКИ РОССИИ
      </p>
      <p
        className={`second-family neutral-600 regular text-16 ${classes.subText}`}
      >
        Стипендии аспирантам и адъюнктам
      </p>
    </div>
  );
}
