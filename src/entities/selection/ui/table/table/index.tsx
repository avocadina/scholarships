import React from "react";

import classes from "./table.module.scss";
import TableHeading from "./heading";
import TableBody from "./body";

export default function SelectionTableTable() {
  return (
    <table className={`flex-column ${classes.container}`}>
      <TableHeading />
      <TableBody />
    </table>
  );
}
