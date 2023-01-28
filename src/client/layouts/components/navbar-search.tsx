import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { MdClose } from "react-icons/md/index";

export default function NavbarSearch() {
  const [openInput, setOpenInput] = useState(false);
  return (
    <div className="relative flex">
      <Transition
        appear={true}
        show={openInput}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute right-0 -translate-y-[3px] overflow-hidden max-w-[280px] sm:max-w-min flex items-center space-x-1 sm:space-x-2   ">
          <button className="outline-none" onClick={() => setOpenInput(false)}>
            <MdClose />
          </button>
          <div className="bg-light rounded-md px-2 py-1">
            <input autoFocus className="outline-none" type="search" placeholder="Type something..." />
            <button className="outline-none">
              <img className="w-[23px] absolute right-[3px] top-[3px]" src={"/static/icons/icon_search.png"} />
            </button>
          </div>
        </div>
      </Transition>
      <button className="" onClick={() => setOpenInput(true)}>
        <img className="w-[23px]" src={"/static/icons/icon_search.png"} />
      </button>
    </div>
  );
}
