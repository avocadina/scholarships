import type { Metadata } from "next";

import "./styles/reset.scss";
import "./styles/global.scss";
import "./styles/template.scss";
import "./styles/fonts.scss";
import "./styles/text.scss";
import ClientLayout from "../entities/client-layout/ui";

export const metadata: Metadata = {
  title: "Стипендии",
  description: "Стипендии для аспирантов 2025",
  icons: ["icon.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`scrollbar page-wrapper`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
