import { configsAtom, scrollInfoAtom } from "@client/commons/data/layoutAtom";
import { AppInterface } from "@client/commons/interface/app";
import SmoothScroll from "@client/components/scroll-smooth";
import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import ScrollToTop from "../commons/helpers/scrolltop";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ProgressBar from "./components/progress-bar";

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  children?: string | JSX.Element | JSX.Element[];
};
export default function PublicLayout({ children, ...props }: Props) {
  const setConfigs = useSetRecoilState(configsAtom);

  const loaderData = useLoaderData() as { configs: AppInterface.Config };

  const parentMain = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setConfigs(loaderData.configs);
    return () => {};
  }, []);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  // untuk mendapatkan info scroll dan window main utama
  const setScrollInfo = useSetRecoilState(scrollInfoAtom);
  const handleScroll = (event: any) => {
    if (parentMain.current)
      setScrollInfo({
        refParent: parentMain.current,
        top: event.currentTarget.scrollTop,
        height: event.currentTarget.scrollHeight,
      });
  };

  return (
    <div className="relative overflow-hidden">
      <ProgressBar open={progress} />
      <ScrollToTop main={parentMain.current} />
      <SmoothScroll>
        <div ref={parentMain} className="flex justify-between flex-col h-screen overflow-y-auto overflow-x-hidden scroll-smooth" scroll-region="true" onScroll={handleScroll}>
          <div>
            <Navbar />
            <main {...props}>
              <Outlet />
            </main>
          </div>
          <Footer />
        </div>
      </SmoothScroll>
    </div>
  );
}
