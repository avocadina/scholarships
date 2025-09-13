import React from "react";

import classes from "./application.module.scss";
import ApplicationItem from "./item";
import { applicationItems } from "../model/application.const";

export default function Application() {
  return (
    <ul className={classes.container}>
      {applicationItems.map((item) => (
        <ApplicationItem key={item.index + item.title} {...item} />
      ))}
    </ul>
  );
}
