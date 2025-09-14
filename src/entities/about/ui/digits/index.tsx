import React from "react";

import classes from "./about-digits.module.scss";
import AboutItem from "./item";
import AboutSubInfo from "./sub-info";
import { aboutItems } from "~/src/entities/about/model/about.const";

interface Props {
  inView: boolean;
}

export default function AboutDigits({ inView }: Props) {
  return (
    <div className={classes.container}>
      {aboutItems.map((item, index) => (
        <AboutItem
          index={index + 1}
          inView={inView}
          {...item}
          key={index + item.title}
        />
      ))}
      <AboutSubInfo inView={inView} />
    </div>
  );
}
