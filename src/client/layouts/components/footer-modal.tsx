import { Dialog, Transition } from "@headlessui/react";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  open: boolean;
  classParent?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export default function FooterModal({ open, setIsOpen, children, classParent = "", className = "", ...props }: Props) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={(e) => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={twMerge(
                  "mx-auto w-full sm:max-w-[80%]   transform  bg-[#101014] p-5 sm:p-10 py-16 text-left align-middle shadow-xl transition-all relative",
                  classParent
                )}
              >
                <div className="absolute right-0 top-0 sm:-translate-y-1/2 sm:translate-x-1/2">
                  <img src={`/static/icons/icon_close_white.png`} className="opacity-50 cursor-pointer hover:opacity-100" onClick={(e) => setIsOpen(false)} />
                </div>
                <div {...props} className={twMerge("body-modal", className)}>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
