"use client";
import React, { useEffect, useState } from "react";

import classes from "./nav-item.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { INavLink } from "~/src/entities/navigation/model/navigation.interface";

interface Props extends INavLink {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  index: number;
}

export default function NavItem({
  title,
  href,
  setActivePage,
  isActive,
  index,
}: Props) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={classNames(`text-18 semibold blue-300 ${classes.link}`, {
        [classes.active]: isActive,
      })}
      onClick={() => setActivePage(index)}
    >
      {title}
    </Link>
  );
}
