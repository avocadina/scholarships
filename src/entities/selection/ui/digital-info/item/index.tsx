import React from "react";

import classes from "./digital-item.module.scss";
import SelectionContainer from "~/src/entities/selection/ui/container";
import NumberCounter from "~/src/shared/ui/number-counter/ui";
import { ISelectionDigits } from "~/src/entities/selection/model/selection.interface";

interface Props extends ISelectionDigits {
  inView: boolean;
  index: number;
  commonTextClass: string;
  isLast: boolean;
}

export default function SelectionDigitalItem({
  index,
  inView,
  commonTextClass,
  isLast,
  digit,
  title,
}: Props) {
  return (
    <SelectionContainer
      className={`${classes.item} align-center`}
      index={index}
      inView={inView}
    >
      <NumberCounter
        classNameText={`text-48 bold ${commonTextClass} ${isLast ? "teal-500" : "blue-500"}`}
        numbers={digit}
        animTrigger={inView}
        classNameContainer={classes.counter}
      />
      <p className={`neutral-600 text-16 regular ${commonTextClass}`}>
        {title}
      </p>
    </SelectionContainer>
  );
}
