import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ main }: { main: HTMLDivElement | null }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (main) main.scrollTop = 0;
  }, [pathname]);

  return null;
}
