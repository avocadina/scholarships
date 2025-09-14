import React from "react";

import classes from "./application-heading.module.scss";
import Container from "~/src/shared/ui/container/ui";
import Image from "next/image";
import classNames from "classnames";

interface Props {
  index: number;
  blue?: boolean;
}

export default function ApplicationItemHeading({ index, blue }: Props) {
  return (
    <div
      className={classNames("flex-row space-between align-center", {
        [classes.blue]: blue,
      })}
    >
      <Container bgColor={null} className={classes.digit}>
        <span className="blue-400 text-center semibold second-family text-28">
          {index}
        </span>
      </Container>
      <div className={classes.image}>
        <Image
          width={60}
          height={60}
          alt="card-image"
          src={`/homepage/application/${index}.png`}
        />
      </div>
    </div>
  );
}
