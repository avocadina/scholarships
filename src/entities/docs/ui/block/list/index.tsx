import React from "react";

import DocsItem from "./item";
import { IDocsItem } from "~/src/entities/docs/model/docs.interface";

interface Props {
  items: IDocsItem[];
}

export default function DocsBlockList({ items }: Props) {
  return (
    <ul className="flex-column gap-3">
      {items.map((item, index) => (
        <DocsItem key={index + item.title} {...item} itemIndex={index} />
      ))}
    </ul>
  );
}
