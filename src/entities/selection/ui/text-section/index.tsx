import React from "react";

import classes from "./text-section.module.scss";
import TextList from "./list";
import SelectionLeader from "./leader";
import { selectionText } from "~/src/entities/selection/model/selection.const";

interface Props {
  inView: boolean;
}

export default function SelectionText({ inView }: Props) {
  return (
    <div className={`flex-column gap-4 ${classes.container}`}>
      {selectionText.map((item, index) => (
        <TextList key={index} inView={inView} index={index} {...item} />
      ))}
      <SelectionLeader inView={inView} />
    </div>
  );
}
