import React from "react";

import classes from "./text-section.module.scss";
import TextList from "./list";
import SelectionLeader from "./leader";
import { selectionText } from "~/src/entities/selection/model/selection.const";

export default function SelectionText() {
  return (
    <div className={`flex-column gap-4 ${classes.container}`}>
      {selectionText.map((item, index) => (
        <TextList key={index} {...item} />
      ))}
      <SelectionLeader />
    </div>
  );
}
