import React from "react";

import classes from "./selection.module.scss";
import SelectionDigitalInfo from "./digital-info";
import SelectionTable from "./table";
import SelectionText from "./text-section";

export default function Selection() {
  return (
    <div className={`flex-row gap-4 ${classes.container}`}>
      <div className={`flex-column gap-4 ${classes.inner}`}>
        <SelectionDigitalInfo />
        <SelectionTable />
      </div>
      <SelectionText />
    </div>
  );
}
