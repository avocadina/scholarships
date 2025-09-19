"use client";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "~/src/app/store/hooks";
import { selectNav } from "~/src/app/store/reducer/navigaiton.slice";

import classes from "./page-link.module.scss";
import { INavLink } from "~/src/entities/navigation/model/navigation.interface";
import ArrayUtils from "~/src/shared/lib/utils/array.utils";

export default function PageNavLinks() {
  const { pageNavLinks } = useAppSelector(selectNav);

  const links: INavLink[] = [
    {
      title: "Главная",
      href: "/",
    },
    ...pageNavLinks,
  ];

  return (
    <nav>
      <div className={`flex-row gap-2 ${classes.container}`}>
        {links.map((link, index) => {
          const isLast = ArrayUtils.isLast(links.length, index);
          console.log(isLast);
          return (
            <Link
              key={index + link.href}
              href={link.href}
              rel="noopener noreferrer"
              className={classNames(
                classes.link,
                `second-family ${isLast ? "blue-500" : "blue-400"} text-16 regular variant-numeric`,
              )}
            >
              {index !== 0 && ` / `}
              {link.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
