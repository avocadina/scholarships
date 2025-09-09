import React from "react";
import Hero from "~/src/entities/hero/ui";
import SectionContainer from "~/src/entities/section-container";
import Selection from "~/src/entities/selection/ui";
import { IHomepageSection } from "~/src/pages-compontents/homepage/model/homepage.interface";

export default function HomePage() {
  const sections: IHomepageSection[] = [
    {
      heading: "Конкурсный отбор 2025",
      component: <Selection />,
    },
  ];
  return (
    <main className={`page-wrapper__main`}>
      <Hero />
      {sections.map((section, index) => (
        <SectionContainer
          key={index}
          heading={section.heading}
          headingClassName="text-28 blue-300 second-family semibold"
        >
          {section.component}
        </SectionContainer>
      ))}
    </main>
  );
}
