import classNames from "classnames";
import React from "react";
import PageNavLinks from "../page-links-nav/ui";

interface Props {
  children: React.ReactNode;
  className?: string;
  needNav?: boolean;
}

export default function PageWrapper({
  children,
  needNav = true,
  className,
}: Props) {
  return (
    <main className={classNames(`page-wrapper__main`, className)}>
      {needNav && <PageNavLinks />}
      {children}
    </main>
  );
}
