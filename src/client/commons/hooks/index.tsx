import { RefObject, useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { scrollInfoAtom } from "../data/layoutAtom";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const { top } = useRecoilValue(scrollInfoAtom);
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    setIntersecting(ref.current.offsetTop - top + 200 < window.innerHeight);
  }, [top]);

  return isIntersecting;
}
