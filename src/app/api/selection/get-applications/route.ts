import { NextResponse } from "next/server";

interface IRandom {
  min?: number;
  max?: number;
}
const getRandomNumber = ({ min = 4000, max = 5000 }: IRandom): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export async function GET() {
  const randomTotal = getRandomNumber({});
  const randomSite = getRandomNumber({
    max: randomTotal,
  });
  const randomEnter = getRandomNumber({ max: randomSite });

  return NextResponse.json({
    total: randomTotal,
    fromSite: randomSite,
    accessed: randomEnter,
  });
}
