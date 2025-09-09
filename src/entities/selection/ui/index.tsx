import React from "react";

import classes from "./selection.module.scss";
import SelectionDigitalInfo from "./digital-info";
import SelectionTable from "./table";

export default function Selection() {
  return (
    <div className={`gap-4 ${classes.container}`}>
      <SelectionDigitalInfo />
      <SelectionTable />
    </div>
  );
}
