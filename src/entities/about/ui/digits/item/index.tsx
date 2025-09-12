import React from "react";

import classes from "./about-item.module.scss";
import Vector from "~/public/homepage/about/vector.svg";
import Container from "~/src/shared/ui/container";
import AboutItemHeading from "./heading";
import { IAboutItem } from "~/src/entities/about/model/about.interface";

interface Props extends IAboutItem {}

export default function AboutItem({ title, subTitle, text }: Props) {
  return (
    <Container className={`${classes.container} flex-column gap-6`}>
      <AboutItemHeading title={title} subTitle={subTitle} />
      <Vector className={classes.vector} />
      <p className="neutral-600 variant-numeric second-family text-16 regular">
        {text}
      </p>
    </Container>
  );
}
