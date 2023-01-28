import { Dialog, Transition } from "@headlessui/react";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  open: boolean;
  classParent?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export default function ModalBase({ open: isShowing, classParent, setIsOpen, className, children, ...props }: Props) {
  return (
    <Transition appear as={Fragment} show={isShowing}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0">
          <Transition.Child
            as={Fragment}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="transform duration-[0.4s] transition ease-in-out"
            leaveFrom="scale-100 "
            leaveTo="opacity-0 translate-y-full "
          >
            <div className={twMerge("min-h-full flex justify-center items-center", classParent)}>
              <Dialog.Panel as="div" {...props} className={twMerge("body-modal", className)}>
                {children}
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
