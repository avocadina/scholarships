"use client";
import React from "react";
import { useInView } from "framer-motion";

import classes from "./application.module.scss";
import ApplicationItem from "./item";
import { applicationItems } from "../model/application.const";

export default function Application() {
  const listRef = React.useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, { amount: 0.4, once: false });

  return (
    <ul className={classes.container} ref={listRef}>
      {applicationItems.map((item) => (
        <ApplicationItem
          key={item.index + item.title}
          inView={inView}
          {...item}
        />
      ))}
    </ul>
  );
}
