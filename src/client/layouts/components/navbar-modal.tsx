import { Dialog, Transition } from "@headlessui/react";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  open: boolean;
  classParent?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export default function NavbarModal({ open, setIsOpen, children, classParent = "", className = "", ...props }: Props) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={(e) => setIsOpen(false)}>
        <div className="fixed inset-0 overflow-y-auto">
          <Transition.Child as={Fragment} enter="transform" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform ease-in" leaveFrom="" leaveTo="translate-x-full">
            <Dialog.Panel className={twMerge("w-full h-full", classParent)}>
              <div {...props} className={twMerge("body-modal", className)}>
                {children}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
