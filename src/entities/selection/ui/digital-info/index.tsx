import React from "react";

import classes from "./digital-info.module.scss";
import SelectionDigitalItem from "./item";
import { selectionDigitalInfo } from "~/src/entities/selection/model/selection.const";

interface Props {
  inView: boolean;
}

export default function SelectionDigitalInfo({ inView }: Props) {
  return (
    <div className={`gap-4 ${classes.container}`}>
      {selectionDigitalInfo.map((item, index) => {
        const isLast = index === selectionDigitalInfo.length - 1;
        const commontTextClass = "text-center second-family";
        return (
          <SelectionDigitalItem
            key={index + item.title}
            index={index}
            inView={inView}
            commonTextClass={commontTextClass}
            isLast={isLast}
            {...item}
          />
        );
      })}
    </div>
  );
}
