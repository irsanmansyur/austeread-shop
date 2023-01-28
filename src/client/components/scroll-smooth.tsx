import { ReactNode, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
type Props = {
  children: ReactNode;
};
function SmoothScroll({ children }: Props) {
  const location = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);
  return <>{children}</>;
}
export default SmoothScroll;
