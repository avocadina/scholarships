import React from "react";
import classNames from "classnames";

import classes from "./table-body.module.scss";
import { selectionTBody } from "~/src/entities/selection/model/selection.const";

export default function TableBody() {
  return (
    <tbody className="flex-column">
      {selectionTBody.map((item, index) => {
        const rowItems: string[] = Object.values(item);
        return (
          <tr key={index} className={classes.row}>
            {rowItems.map((item, index) => (
              <td
                key={index}
                className={classNames(
                  "text-16 second-family blue-400 variant-numeric text-center regular",
                  classes.item,
                )}
              >
                {item}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}
