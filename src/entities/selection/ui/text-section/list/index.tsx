import React from "react";

import classes from "./list.module.scss";
import SelectionContainer from "~/src/entities/selection/ui/container";
import { ISelectionTextList } from "~/src/entities/selection/model/selection.interface";

interface Props extends ISelectionTextList {
  index: number;
  inView: boolean;
}

export default function TextList({ title, index, list, inView }: Props) {
  return (
    <SelectionContainer
      index={index + 2}
      className={`gap-5 ${classes.container}`}
      inView={inView}
    >
      <h6 className="neutral-900 second-family text-16 semibold">{title}</h6>
      <ul className={`flex-column gap-5`}>
        {list.map((item, index) => (
          <li key={index} className={classes.item}>
            <span className="neutral-600 variant-numeric text-16 regular second-family">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </SelectionContainer>
  );
}
