import React from "react";
import DocsBlockTitle from "./title";
import { IDocsBlock } from "~/src/entities/docs/model/docs.interface";
import DocsBlockList from "./list";

interface Props extends IDocsBlock {
  sub?: boolean;
}

export default function DocsBlock({
  title,
  items,
  subBlocks,
  sub = false,
}: Props) {
  return (
    <section className={`flex-column gap-5`}>
      <DocsBlockTitle title={title} sub={sub} />
      {!items && subBlocks
        ? subBlocks.map((block, index) => (
            <DocsBlock key={index + block.title} {...block} sub />
          ))
        : items && <DocsBlockList items={items} />}
    </section>
  );
}
