import Link from "next/link";
import React from "react";
import Button from "~/src/shared/ui/button";

export default function NavigationButton() {
  return (
    <Link href={"/login"} rel="noopener noreferrer">
      <Button typeButton="blue" size="10-16" radius={12} asLink>
        <span className="text-16">Войти</span>
      </Button>
    </Link>
  );
}
