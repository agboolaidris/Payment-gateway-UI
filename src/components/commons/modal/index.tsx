import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";

import classNames from "classnames";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  title?: string;
  className?: string;
  showHeader?: boolean;
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  showHeader = true,
}: Props) => {
  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[rgba(255, 255, 255, 0.1)]  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex h-full items-center justify-center overflow-hidden  text-center md:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  "relative h-full max-h-full w-full transform overflow-auto bg-white p-4 text-left shadow-xl transition-all sm:w-full md:h-max md:rounded",
                  className
                )}
              >
                {showHeader && (
                  <div className="flex items-start justify-between">
                    <Dialog.Title className="flex flex-1 items-center justify-center text-center font-sans">
                      {title}
                    </Dialog.Title>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                        onClick={onClose}
                        type="button"
                      >
                        <HiXMark aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                )}

                <div className="relative mt-6">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
