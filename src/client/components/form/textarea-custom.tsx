import { lastId } from "@client/commons/helpers";
import React from "react";
import { twMerge } from "tailwind-merge";
import InputError from "./InputError";

interface Props extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label?: string;
  error?: string;
  classParent?: string;
}
export const TextAreaCustom = ({ classParent = "", id, label = "", className = "", error, ...props }: Props) => {
  const idCustom = lastId(id ?? "input-");
  return (
    <div className={twMerge("mb-3 last:mb-1", classParent)}>
      <label htmlFor={idCustom} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <div className="relative">
        <textarea
          {...props}
          id={idCustom}
          className={twMerge(
            "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          )}
          rows={3}
        />
      </div>
      <InputError message={error} />
    </div>
  );
};
