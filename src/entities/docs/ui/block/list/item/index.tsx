import React from "react";
import classNames from "classnames";

import classes from "./docs-item.module.scss";
import DocsItemButton from "./button";
import AnimatedItem from "~/src/shared/ui/on-view-item/ui";
import { IDocsItem } from "~/src/entities/docs/model/docs.interface";

interface Props extends IDocsItem {
  itemIndex: number;
}

export default function DocsItem({ title, descr, itemIndex }: Props) {
  return (
    <AnimatedItem
      tag={"li"}
      slideIn
      direction="up"
      className={classNames(
        classes.container,
        `flex-row space-between align-center`,
      )}
    >
      <div className={`flex-column gap-6px ${classes.text}`}>
        <h4 className="blue-800 second-family semibold text-16">{title}</h4>
        <p className="blue-800 variant-numeric second-family text-16 regular">
          {descr}
        </p>
      </div>
      <DocsItemButton itemIndex={itemIndex} />
    </AnimatedItem>
  );
}
