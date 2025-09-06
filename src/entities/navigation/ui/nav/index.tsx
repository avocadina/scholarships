"use client";
import React, { useState } from "react";

import NavItem from "./item";
import { navigationLinks } from "~/src/entities/navigation/model/navigation.const";

interface Props {
  className?: string;
}

export default function NavigationNav({ className }: Props) {
  const [activePage, setActivePage] = useState<number>(0);
  return (
    <nav className={`flex-row gap-8 align-center self-end ${className}`}>
      {navigationLinks.map((item, index) => (
        <NavItem
          key={item.href + index}
          {...item}
          setActivePage={setActivePage}
          isActive={activePage === index}
          index={index}
        />
      ))}
    </nav>
  );
}
