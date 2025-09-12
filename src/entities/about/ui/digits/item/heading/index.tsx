import React from "react";

import classes from "./about-item-heading.module.scss";

interface Props {
  title: string;
  subTitle: string;
}

export default function AboutItemHeading({ title, subTitle }: Props) {
  return (
    <div className="flex-row gap-4 flex-end">
      <h3 className={`blue-500 text-48 second-family bold ${classes.title}`}>
        {title}
      </h3>
      <h6
        className={`blue-400 variant-numeric regular second-family text-16 ${classes.sub}`}
      >
        {subTitle}
      </h6>
    </div>
  );
}
