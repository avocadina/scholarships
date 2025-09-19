import React from "react";

import classes from "./docs.module.scss";
import Container from "~/src/shared/ui/container/ui";
import classNames from "classnames";
import { docsBlocks } from "../model/docs.const";
import DocsBlock from "./block";

export default function Docs() {
  return (
    <Container className={classNames(classes.container, "flex-column")}>
      <h2 className="neutral-900 second-family text-28 semibold">
        Нормативная база
      </h2>
      {docsBlocks.map((block, index) => (
        <DocsBlock key={index} {...block} />
      ))}
    </Container>
  );
}
