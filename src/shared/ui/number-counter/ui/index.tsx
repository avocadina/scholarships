import React from "react";
import classNames from "classnames";
import { useNumberCounter } from "../lib/hooks/useNumberCounter.hook";

import classes from "./number-counter.module.scss";

interface Props {
  numbers: string | number;
  animTrigger?: boolean;
  classNameContainer?: string;
  classNameText?: string;
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function NumberCounter({
  numbers,
  animTrigger,
  classNameContainer,
  classNameText,
}: Props) {
  const { splittedNumber, offsets, heights, refs } = useNumberCounter({
    numbers,
    classNameText,
    animTrigger,
  });

  return (
    <div className={classNames("flex-row align-center", classNameContainer)}>
      {splittedNumber.map((_, index) => {
        const height = heights[index] || 0;
        return (
          <div
            key={index}
            className={`flex-column ${classes.counterContainer}`}
            style={{ height }}
          >
            <div
              className={classes.digitsList}
              style={{
                transform: `translateY(-${offsets[index] * height}px)`,
                transitionDuration: `${1 + index * 0.3}s`,
              }}
            >
              {Array.from({ length: 5 }).map((_, loopIndex) =>
                digits.map((digit, dIndex) => (
                  <span
                    ref={(el) => {
                      if (loopIndex === 0 && dIndex === 0) {
                        refs.current[index] = el;
                      }
                    }}
                    className={classNames(classes.digit, classNameText)}
                    key={`${loopIndex}-${digit}`}
                  >
                    {digit}
                  </span>
                )),
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
