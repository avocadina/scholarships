import React from "react";

import classes from "./homepage.module.scss";
import AboutContent from "~/src/entities/about/ui";
import Application from "~/src/entities/application/ui";
import Hero from "~/src/entities/hero/ui";
import SectionContainer from "~/src/entities/section-container";
import Selection from "~/src/entities/selection/ui";
import PageWrapper from "~/src/entities/page-wrapper";
import { IHomepageSection } from "~/src/pages-compontents/homepage/model/homepage.interface";

const headingClassName = "text-28 blue-300 second-family semibold";

export default function HomePage() {
  const sections: IHomepageSection[] = [
    {
      heading: "Конкурсный отбор 2025",
      component: <Selection />,
      scrollYAmount: 0.5,
    },
    {
      heading: "О стипендии",
      component: <AboutContent />,
    },
    {
      heading: "Как подать заявку",
      component: <Application />,
    },
  ];

  return (
    <PageWrapper needNav={false} className={classes.container}>
      <Hero />
      {sections.map((section, index) => (
        <SectionContainer
          key={index + section.heading}
          heading={section.heading}
          headingClassName={headingClassName}
          scrollYAmount={section.scrollYAmount}
        >
          {section.component}
        </SectionContainer>
      ))}
    </PageWrapper>
  );
}
