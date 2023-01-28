import { Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ProgressBar({ open }: { open: boolean }) {
  return (
    <Transition appear show={open ? true : false} as={Fragment}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {open && (
          <div className="fixed top-0 left-0 right-0">
            <div className="relatvie">
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: "45%" }} />
              </div>
            </div>
          </div>
        )}
      </Transition.Child>
    </Transition>
  );
}
