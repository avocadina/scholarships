import type { Metadata } from "next";
import localFont from "next/font/local";
import classNames from "classnames";

import ClientLayout from "../entities/client-layout/ui";

import "./styles/reset.scss";
import "./styles/global.scss";
import "./styles/template.scss";
import "./styles/text.scss";

const raleway = localFont({
  src: [
    {
      path: "../assets/fonts/Raleway-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Raleway-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-raleway",
});

const roboto = localFont({
  src: [
    {
      path: "../assets/fonts/RobotoFlex.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Стипендии",
  description: "Стипендии для аспирантов 2025",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const className = classNames(
    `page-wrapper scrollbar`,
    raleway.variable,
    roboto.variable,
  );

  return (
    <html lang="ru">
      <body className={className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
