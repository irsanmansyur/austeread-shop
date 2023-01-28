import ButtonCustom from "@client/components/form/button";
import { InputCustom } from "@client/components/form/InputGroup";
import React, { useState } from "react";
import ModalBase from "./modal-base";

export default function ChangePassword() {
  const [show, setShow] = useState(false);
  return (
    <>
      <span className="text-sm text-primary-others cursor-pointer" onClick={() => setShow(true)}>
        Change password
      </span>
      <ModalBase open={show} setIsOpen={setShow} classParent="bg-black/60 backdrop-blur-sm" className="relative w-full p-2">
        <button className="absolute right-2 top-0 -translate-y-full outline-none" onClick={() => setShow(false)}>
          <img src="/static/icons/icon_close_white.png" alt="" />
        </button>
        <form autoComplete="off" className="bg-white px-2 py-10 relative space-y-7">
          <h3 className="text-center font-garnet font-bold">Change Password</h3>
          <InputCustom
            type={"password"}
            autoComplete="off"
            className="rounded-none border-gray-normal border-2 py-3 focus:border-gray-normal"
            placeholder="Enter your password"
            label="New Password"
          />
          <InputCustom
            type={"password"}
            className="rounded-none border-gray-normal border-2 py-3 focus:border-gray-normal"
            placeholder="Enter your password"
            label="Confirm  Password"
          />
          <ButtonCustom className="bg-primary-others w-full rounded-none py-3 text-dark hover:bg-primary font-GarnettBold font-bold">Save</ButtonCustom>
        </form>
      </ModalBase>
    </>
  );
}
