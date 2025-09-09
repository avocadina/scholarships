import React from "react";

import classes from "./table-heading.module.scss";
import { selectionTableHeading } from "~/src/entities/selection/model/selection.const";

export default function TableHeading() {
  return (
    <thead className={classes.container}>
      {selectionTableHeading.map((Item, index) => (
        <th key={index} className={classes.item}>
          <Item />
        </th>
      ))}
    </thead>
  );
}
