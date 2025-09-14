"use client";
import React from "react";

import classes from "./nav-item.module.scss";
import Link from "next/link";
import classNames from "classnames";
import {
  INavLink,
  NavLinkHrefT,
} from "~/src/entities/navigation/model/navigation.interface";

interface Props extends INavLink {
  setActivePage: React.Dispatch<React.SetStateAction<NavLinkHrefT>>;
  activePage: NavLinkHrefT;
}

export default function NavItem({
  title,
  href,
  setActivePage,
  activePage,
}: Props) {
  const isActive = activePage === href;

  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={classNames(`text-18 semibold blue-300 ${classes.link}`, {
        [classes.active]: isActive,
      })}
      onClick={() => setActivePage(href)}
    >
      {title}
    </Link>
  );
}
