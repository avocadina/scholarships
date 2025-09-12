import React from "react";

import classes from "./about-content.module.scss";
import ImageSrc from "~/public/homepage/about/image.png";
import Image from "next/image";
import AboutDigits from "./digits";

export default function AboutContent() {
  return (
    <div className={`flex-row ${classes.container}`}>
      <div className={classes.imageContainer}>
        <Image
          width={334}
          height={334}
          src={ImageSrc}
          placeholder="blur"
          alt="A book with a blue cover"
        />
      </div>
      <AboutDigits />
    </div>
  );
}
