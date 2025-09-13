import React from "react";
import classNames from "classnames";

import classes from "./application-text.module.scss";

interface Props {
  title: string;
  text: string;
  blue?: boolean;
}

export default function ApplicationItemText({ title, text, blue }: Props) {
  return (
    <div
      className={classNames(`flex-column gap-2`, {
        [classes.blue]: blue,
      })}
    >
      <h4 className="neutral-800 second-family text-16 semibold">{title}</h4>
      <p className="variant-numeric second-family regular text-16 neutral-600">
        {text}
      </p>
    </div>
  );
}
