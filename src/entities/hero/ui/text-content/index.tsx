import React from "react";

import classes from "./text-content.module.scss";
import HeroWarning from "./warning";
import HeroBg from "./bg";

export default function HeroTextContent() {
  return (
    <div className={`flex-column gap-8 relative ${classes.container}`}>
      <h1 className={`blue-500 text-48 bold second-family ${classes.text}`}>
        Стипендии Президента России для аспирантов и адъюнктов
      </h1>
      <p
        className={`neutral-600 regular text-16 variant-numeric second-family ${classes.text}`}
      >
        Поддержка научных исследований по ключевым приоритетам
        научно-технологического развития. Конкурсный отбор проводится
        Минобрнауки России совместно с Советом по президентским стипендиям.
      </p>
      <HeroWarning />
      <HeroBg />
    </div>
  );
}
