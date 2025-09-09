import React from "react";

import classes from "./selection-table.module.scss";
import SelectionContainer from "../container";
import SelectionTableTable from "./table";

export default function SelectionTable() {
  return (
    <SelectionContainer className={classes.container}>
      <h6 className="second-family neutral-900 text-16 semibold">
        Участники и победители конкурсных отборов
      </h6>
      <SelectionTableTable />
    </SelectionContainer>
  );
}
