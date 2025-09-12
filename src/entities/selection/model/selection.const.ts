import { FC, SVGProps } from "react";
import Calendar from "~/public/homepage/selection/calendar.svg";
import People from "~/public/homepage/selection/people.svg";
import Award from "~/public/homepage/selection/award.svg";
import {
  ISelectionDigits,
  ISelectionTBodyItem,
  ISelectionTextList,
} from "./selection.interface";

export const selectionDigitalInfo: ISelectionDigits[] = [
  {
    title: "Всего заявок",
    digit: "4 682",
  },
  {
    title: "Через сайт совета",
    digit: "4 669",
  },
  {
    title: "Допущено к экспертизе",
    digit: "4 598",
  },
  {
    title: "Признаны победителями",
    digit: "500",
  },
];

export const selectionTableHeading: FC<SVGProps<SVGSVGElement>>[] = [
  Calendar,
  People,
  Award,
];

export const selectionTBody: ISelectionTBodyItem[] = [
  {
    date: "2024 год",
    people: "4 777",
    awards: "500",
  },
  {
    date: "2025 год",
    people: "4 682",
    awards: "500",
  },
  {
    date: "2026 год",
    people: "Скоро",
    awards: "Скоро",
  },
];

export const selectionText: ISelectionTextList[] = [
  {
    title: "Приоритеты СНТР (больше всего победителей):",
    list: [
      "Передовые технологии проектирования и создания высокотехнологичной продукции",
      "Персонализированная, предиктивная и профилактическая медицина, здравоохранение и технологии здоровьесбережения",
    ],
  },
  {
    title: "Наукоёмкие технологии (лидеры по заявкам):",
    list: [
      "Новые материалы с заданными свойствами и характеристиками",
      "Лекарственные средства и платформы нового поколения (биотех., высокотех., радиофарм.)",
    ],
  },
];
