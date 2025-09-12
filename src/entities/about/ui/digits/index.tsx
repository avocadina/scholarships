import React from "react";

import classes from "./about-digits.module.scss";
import AboutItem from "./item";
import AboutSubInfo from "./sub-info";
import { aboutItems } from "~/src/entities/about/model/about.const";

export default function AboutDigits() {
  return (
    <div className={classes.container}>
      {aboutItems.map((item, index) => (
        <AboutItem {...item} key={index + item.title} />
      ))}
      <AboutSubInfo />
    </div>
  );
}
