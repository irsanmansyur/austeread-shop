import { configsAtom } from "@client/commons/data/layoutAtom";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import FooterModal from "./footer-modal";

export default function FooterAdvertising() {
  const configs = useRecoilValue(configsAtom);

  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={(e) => setIsOpen(true)} className="text-left cursor-pointer hover:bg-white/20 rounded px-2">
        Advertising Opportunities
      </button>
      <FooterModal open={isOpen} setIsOpen={setIsOpen}>
        <div className="header text-light pb-10">
          <h2 className="text-[25px] leading-snug">
            AUTHENTIC CONTENT <br /> SHARP OPINION <br /> CREATIVE STORY TELLING
          </h2>
        </div>
        <div className="body mb-10">
          <div className="desc font-PublicSansRegular text-white" dangerouslySetInnerHTML={{ __html: configs?.about ?? "" }} />
        </div>
      </FooterModal>
    </>
  );
}
