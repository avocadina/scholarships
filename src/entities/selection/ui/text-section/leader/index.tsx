import React from "react";

import classes from "./leader.module.scss";
import Mgu from "~/public/homepage/selection/mgu.svg";
import SelectionContainer from "~/src/entities/selection/ui/container";
import Link from "next/link";

interface Props {
  inView: boolean;
}

export default function SelectionLeader({ inView }: Props) {
  return (
    <SelectionContainer
      flexDirection="row"
      className={`${classes.container} relative`}
      index={4}
      inView={inView}
    >
      <div className={classes.icon}>
        <Mgu />
      </div>
      <div className="flex-column gap-2">
        <Link
          href={"https://msu.ru"}
          rel={"noopener noreferrer"}
          className={`neutral-800 second-family text-16 semibold ${classes.link}`}
        >
          МГУ им. Ломоносова
        </Link>
        <p className="neutral-600 second-family text-16 regular variant-numeric">
          Организация-лидер
          <br />
          по победителям
        </p>
      </div>
    </SelectionContainer>
  );
}
