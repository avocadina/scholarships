import React from "react";

import classes from "./selection-table.module.scss";
import SelectionContainer from "../container";
import SelectionTableTable from "./table";

interface Props {
  inView: boolean;
}

export default function SelectionTable({ inView }: Props) {
  return (
    <SelectionContainer inView={inView} className={classes.container} index={4}>
      <h6 className="second-family neutral-900 text-16 semibold">
        Участники и победители конкурсных отборов
      </h6>
      <SelectionTableTable />
    </SelectionContainer>
  );
}
