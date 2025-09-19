"use client";
import React from "react";
import { usePathname } from "next/navigation";

import classes from "./nav-item.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { INavLink } from "~/src/entities/navigation/model/navigation.interface";

interface Props extends INavLink {}

export default function NavItem({ title, href }: Props) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith("/" + href);

  return (
    <Link
      href={"/" + href}
      rel="noopener noreferrer"
      className={classNames(`text-18 semibold blue-300 ${classes.link}`, {
        [classes.active]: isActive,
      })}
    >
      {title}
    </Link>
  );
}
