"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./about-content.module.scss";
import ImageSrc from "~/public/homepage/about/image.png";
import Image from "next/image";
import AboutDigits from "./digits";
import AnimatedItem from "~/src/shared/ui/on-view-item/ui";

export default function AboutContent() {
  const blockRef = useRef<HTMLDivElement>(null);
  const inView = useInView(blockRef, { amount: 0.3, once: false });

  return (
    <div className={`flex-row ${classes.container}`} ref={blockRef}>
      <AnimatedItem
        color={null}
        className={classes.imageContainer}
        index={0}
        slideIn
        inView={inView}
      >
        <Image
          width={334}
          height={334}
          src={ImageSrc}
          placeholder="blur"
          alt="A book with a blue cover"
        />
      </AnimatedItem>
      <AboutDigits inView={inView} />
    </div>
  );
}
