import classNames from "classnames";
import React from "react";

interface Props {
  heading?: string;
  headingClassName?: string;
  className?: string;
  gap?: number;
  children: React.ReactNode;
}

export default function SectionContainer({
  heading,
  headingClassName = "blue-300 second-family text-28 semibold",
  className,
  gap = 8,
  children,
}: Props) {
  return (
    <section
      className={classNames(`flex-column gap-${gap} wrapper`, className)}
    >
      {heading && <h2 className={headingClassName}>{heading}</h2>}
      {children}
    </section>
  );
}
