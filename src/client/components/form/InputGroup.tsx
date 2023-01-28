import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs/index";
import InputError from "./InputError";
import { lastId } from "@client/commons/helpers";

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  error?: string;
  classParent?: string;
}
export const InputCustom = ({ classParent = "", id, label = "", className = "", error, ...props }: Props) => {
  const idCustom = lastId(id ?? "input-");
  const [type, setType] = useState(props.type ?? "text");
  return (
    <div className={twMerge("mb-3 last:mb-1", classParent)}>
      <label htmlFor={idCustom} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          id={idCustom}
          type={type}
          className={twMerge(
            "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-base text-xs focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary focus:outline-none focus:bg-transparent/10",
            className
          )}
        />
        {props.type && props.type == "password" && <ShowEye setType={setType} />}
      </div>
      <InputError message={error} />
    </div>
  );
};

const ShowEye = (props: { setType: any }) => {
  const [show, setShow] = useState(false);
  const handleShow = (e: React.MouseEvent) => {
    e.preventDefault();
    setShow(!show);
  };
  useEffect(() => {
    props.setType(show ? "text" : "password");
  }, [show]);

  return (
    <div onClick={handleShow} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
      {show ? <BsEyeFill className="h-6 text-gray-700" /> : <BsEyeSlashFill className="h-6 text-gray-700" />}
    </div>
  );
};
