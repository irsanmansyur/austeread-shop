import { useState } from "react";
import FooterModal from "./footer-modal";

export default function FooterContact() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={(e) => setIsOpen(true)} className="text-left cursor-pointer hover:bg-white/20 rounded px-2">
        Contact
      </button>
      <FooterModal open={isOpen} setIsOpen={setIsOpen} classParent="sm:max-w-3xl mx-auto">
        <div className="header text-light pb-10">
          <h2 className="text-[40px]">Get In Touch</h2>
          <p>If you have any questions or suggestions on how we could work together, please get in touch through.</p>
        </div>
        <div className="body mb-10">
          <div className="mb-3">
            <input type="text" className="outline-none rounded bg-dark/60 py-1 px-2 text-light hover:bg-dark/90 w-full" placeholder="Name" />
          </div>
          <div className="mb-3">
            <input type="text" className="outline-none rounded bg-dark/60 py-1 px-2 text-light hover:bg-dark/90 w-full" placeholder="Address" />
          </div>
          <div className="mb-3">
            <input type="text" className="outline-none rounded bg-dark/60 py-1 px-2 text-light hover:bg-dark/90 w-full" placeholder="Phone Number" />
          </div>
          <div className="mb-3">
            <textarea rows={4} className="outline-none rounded bg-dark/60 py-1 px-2 text-light hover:bg-dark/90 w-full" placeholder="Questions" />
          </div>
          <div className="flex justify-center font-bold">
            <button className="bg-primary hover:opacity-90 text-light py-1 px-2 rounded outline-none">Send Message</button>
          </div>
        </div>
      </FooterModal>
    </>
  );
}
