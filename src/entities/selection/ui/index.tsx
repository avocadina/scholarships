"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./selection.module.scss";
import SelectionDigitalInfo from "./digital-info";
import SelectionTable from "./table";
import SelectionText from "./text-section";

export default function Selection() {
  const blockRef = useRef<HTMLDivElement>(null);
  const inView = useInView(blockRef, { amount: 0.4, once: false });

  return (
    <div className={`flex-row gap-4 ${classes.container}`} ref={blockRef}>
      <div className={`flex-column gap-4 ${classes.inner}`}>
        <SelectionDigitalInfo inView={inView} />
        <SelectionTable inView={inView} />
      </div>
      <SelectionText inView={inView} />
    </div>
  );
}
