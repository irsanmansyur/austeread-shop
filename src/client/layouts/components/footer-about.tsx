import { configsAtom } from "@client/commons/data/layoutAtom";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import FooterModal from "./footer-modal";

export default function FooterAbout() {
  const configs = useRecoilValue(configsAtom);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={(e) => setIsOpen(true)} className="text-left cursor-pointer hover:bg-white/20 rounded px-2 py-2">
        About
      </button>
      <FooterModal open={isOpen} setIsOpen={setIsOpen}>
        <div className="flex gap-3 sm:gap-10  sm:flex-row">
          <div className="image mx-auto !w-[170px]">
            <img className="w-full" src="https://article.austeread.com/assets/austeread/sdpk-1-min.png" alt="sdpk-1-min.png" />
          </div>
          <div className="w-2/3">
            <h2 className="text-light font-PublicSansBlack">About Us</h2>
            <div className="content font-PublicSansRegular max-h-[50vh] overflow-y-auto  text-light pb-2 text-xs sm:text-sm hide-scroll-bar text-justify">
              <div dangerouslySetInnerHTML={{ __html: configs?.about ?? "" }} />
            </div>
            <button
              type="button"
              className="inline-flex justify-center  bg-primary px-4 py-2 text-sm font-medium text-light hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
              onClick={(e) => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </FooterModal>
    </>
  );
}
