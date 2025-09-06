import React from "react";

import classes from "./header-logo.module.scss";
import Logo from "~/public/logo.svg";
import HeaderLogoText from "./text";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      rel="noopener noreferrer"
      className={`flex-row align-center ${classes.container}`}
    >
      <div className={classes.icon}>
        <Logo />
      </div>
      <HeaderLogoText />
    </Link>
  );
}
