import React from "react";

import classes from "./hero-bg.module.scss";
import BgImage from "~/public/homepage/hero/bg.png";
import Image from "next/image";

export default function HeroBg() {
  return (
    <div className={classes.container}>
      <Image src={BgImage} width={460} height={245} alt="background" />
    </div>
  );
}
