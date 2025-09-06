import React from "react";
import classNames from "classnames";

import classes from "./navigation.module.scss";
import NavigationButton from "./button";
import NavigationNav from "./nav";

interface Props {
  forFooter?: boolean;
  className?: string;
  classNameNav?: string;
}
export default function Navigation({
  forFooter = false,
  className,
  classNameNav,
}: Props) {
  return (
    <div
      className={classNames(
        `flex-row ${classes.container}`,
        {
          "space-between": !forFooter,
        },
        className,
      )}
    >
      <NavigationNav className={classNameNav} />
      <NavigationButton />
    </div>
  );
}
