"use client";
import React, { useEffect } from "react";
import { useAppDispatch } from "~/src/app/store/hooks";
import {
  addPageLink,
  deletePageLink,
} from "~/src/app/store/reducer/navigaiton.slice";

import Docs from "~/src/entities/docs/ui";
import PageWrapper from "~/src/entities/page-wrapper";

export default function DocsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      addPageLink({
        title: "Документы",
        href: "docs",
        id: "docs",
      }),
    );

    return () => {
      dispatch(deletePageLink("docs"));
    };
  }, [dispatch]);

  return (
    <PageWrapper className="wrapper">
      <Docs />
    </PageWrapper>
  );
}
