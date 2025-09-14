import React from "react";
import classNames from "classnames";

import classes from "./application-item.module.scss";
import { AnimatedItem } from "~/src/shared/ui/on-view-item/ui";
import ApplicationItemHeading from "./heading";
import ApplicationItemText from "./text";
import { IApplicationItem } from "~/src/entities/application/model/application.interface";

interface Props extends IApplicationItem {
  inView: boolean;
}

export default function ApplicationItem({
  title,
  isBig,
  blue,
  text,
  index,
  inView,
}: Props) {
  return (
    <li
      className={classNames(classes.container, {
        [classes.big]: isBig,
      })}
    >
      <AnimatedItem
        className={classNames(`${classes.item} flex-column`, {
          [classes.blue]: blue,
        })}
        stagger={0.2}
        duration={0.5}
        slideIn
        direction="up"
        amount={0.2}
        index={index}
        inView={inView}
      >
        <ApplicationItemHeading index={index} blue={blue} />
        <ApplicationItemText title={title} text={text} blue={blue} />
      </AnimatedItem>
    </li>
  );
}
