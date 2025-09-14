import { useEffect, useMemo, useRef, useState } from "react";

interface Props {
  classNameText?: string;
  animTrigger?: boolean;
  numbers: string | number;
}

export const useNumberCounter = ({
  classNameText,
  animTrigger,
  numbers,
}: Props) => {
  const splittedNumber = useMemo(() => {
    return String(numbers)
      .split("")
      .filter((d) => d !== " ");
  }, [numbers]);
  const [offsets, setOffsets] = useState<number[]>([]);
  const [heights, setHeights] = useState<number[]>([]);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const newHeights = refs.current.map((el) => el?.offsetHeight ?? 0);
    setHeights(newHeights);
  }, [numbers, classNameText]);

  useEffect(() => {
    if (animTrigger && heights.length > 0) {
      const newOffsets = splittedNumber.map((digit) => {
        const randomSpins = Math.floor(Math.random() * 3) + 2;
        return randomSpins * 10 + Number(digit);
      });
      setOffsets(newOffsets);
    }
  }, [animTrigger, splittedNumber, heights]);

  return {
    splittedNumber,
    offsets,
    refs,
    heights,
  };
};
