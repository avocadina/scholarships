"use client";
import React from "react";
import classNames from "classnames";

import classes from "./about-item.module.scss";
import Vector from "~/public/homepage/about/vector.svg";
import Container from "~/src/shared/ui/container/ui";
import AboutItemHeading from "./heading";
import { IAboutItem } from "~/src/entities/about/model/about.interface";
import { AnimatedItem } from "~/src/shared/ui/on-view-item/ui";

interface Props extends IAboutItem {
  inView: boolean;
  index: number;
}

export default function AboutItem({
  title,
  subTitle,
  text,
  inView,
  index,
}: Props) {
  return (
    <AnimatedItem
      slideIn
      index={index}
      className={`${classes.container} flex-column gap-6`}
    >
      <AboutItemHeading title={title} subTitle={subTitle} />
      <Vector
        className={classNames(classes.vector, {
          [classes.active]: inView,
        })}
      />
      <p className="neutral-600 variant-numeric second-family text-16 regular">
        {text}
      </p>
    </AnimatedItem>
  );
}
