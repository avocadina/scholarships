import React from "react";

interface Props {
  sub: boolean;
  title: string;
}

export default function DocsBlockTitle({ title, sub }: Props) {
  if (sub)
    return (
      <h4 className="neutral-500 second-family text-14 semibold">{title}</h4>
    );
  return (
    <h3 className="neutral-600 text-18 semibold second-family">{title}</h3>
  );
}
