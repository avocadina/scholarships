import React from "react";

import classes from "./digital-info.module.scss";
import SelectionContainer from "../container";
import { selectionDigitalInfo } from "~/src/entities/selection/model/selection.const";

export default function SelectionDigitalInfo() {
  return (
    <div className={`gap-4 ${classes.container}`}>
      {selectionDigitalInfo.map((item, index) => {
        const isLast = index === selectionDigitalInfo.length - 1;
        const commontTextClass = "text-center second-family";
        return (
          <SelectionContainer
            key={index}
            className={`${classes.item} align-center `}
          >
            <h3
              className={`text-48 bold ${commontTextClass} ${isLast ? "teal-500" : "blue-500"}`}
            >
              {item.digit}
            </h3>
            <p className={`neutral-600 text-16 regular ${commontTextClass}`}>
              {item.title}
            </p>
          </SelectionContainer>
        );
      })}
    </div>
  );
}
