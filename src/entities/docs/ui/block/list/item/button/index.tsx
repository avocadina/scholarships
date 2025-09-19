import React from "react";
import Link from "next/link";

import Eye from "~/public/docspage/eye.svg";
import Button from "~/src/shared/ui/button";

export default function DocsItemButton({ itemIndex }: { itemIndex: number }) {
  // TO DO: прикрутить просмотр файлов
  return (
    <Link href={"#!"} rel="noopener noreferrer">
      <Button typeButton="white" size="8-12" radius={12} asLink>
        <div className="flex-row gap-6px align-center">
          <Eye />
          <span className="blue-500 second-family text-16 semibold">
            Смотреть
          </span>
        </div>
      </Button>
    </Link>
  );
}
