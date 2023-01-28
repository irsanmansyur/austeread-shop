import FooterCategoriesLink from "./footer-categories";
import FooterAbout from "./footer-about";
import FooterContact from "./footer-contact";
import FooterAdvertising from "./footer-advertising";
import { useRecoilValue } from "recoil";
import { configsAtom, scrollInfoAtom } from "@client/commons/data/layoutAtom";
import FooterBottom from "./footer-bottom";

export default function Footer() {
  const mainLayout = useRecoilValue(scrollInfoAtom);
  const configs = useRecoilValue(configsAtom);

  return (
    <footer className="bg-black text-light font-PublicSansRegular">
      <div className="container absolute right-0 bottom-0 flex justify-end">
        <button
          onClick={(e) => {
            mainLayout.refParent?.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src="/static/icons/back@2x.png" className="w-[35px]" />
        </button>
      </div>
      <div className="container px-[15px] py-[30px] sm:px-0">
        <div className="grid grid-cols-1 gap-10 sm:gap-20 sm:grid-cols-2 ">
          <div className="">
            <h6 className="text-uppercase fw-bold mb-4">
              <img src={"/static/icons/logo-white.png"} />
            </h6>
            <div className="flex gap-[18px] mt-2">
              <a className="me-4 text-reset pr-2" href={configs?.instagram} target="blank">
                <img src={"/static/icons/instagram_white_ek2.png"} alt="Insagram" />
              </a>
              <a className="me-4 text-reset pr-2" target="blank">
                <img src={"/static/icons/facebook_white_ek2.png"} alt="Facebook" />
              </a>
              <a className="me-4 text-reset pr-2" href={configs?.twitter} target="blank">
                <img src={"/static/icons/twitter_white_ek2.png"} alt="Twitter" />
              </a>
              <a className="me-4 text-reset pr-2" href={`mailto:${configs?.email}`} target="blank">
                <img src={"/static/icons/mail_white_ek2.png"} alt="Mail" />
              </a>
              <a className="me-4 text-reset pr-2" href={`http://wa.me/${configs?.whatsapp}`} target="blank">
                <img src={"/static/icons/whatsapp_white_ek2.png"} alt="WhatsApp" />
              </a>
            </div>
          </div>
          <div className="mt-[40px]">
            <div className="flex text-xs  sm:text-[18px] flex-col gap-[15px] sm:gap-8 sm:flex-row">
              <FooterAbout />
              <FooterContact />
              <FooterAdvertising />
            </div>
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
