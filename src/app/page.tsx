import { Metadata } from "next";
import HomePage from "../pages-compontents/homepage/ui";

export const metadata: Metadata = {
  title: "О стипендии",
  description: "Государственная программа стипендии для аспирантов",
  openGraph: {
    title: "О стипендии",
    description: "Государственная программа стипендии для аспирантов",
    type: "website",
    images: [
      {
        url: "https://scholarships-steel.vercel.app/og/image.png",
        width: "1200",
        height: "630",
        alt: "О стипендии",
      },
    ],
  },
};

export default function Home() {
  return <HomePage />;
}
