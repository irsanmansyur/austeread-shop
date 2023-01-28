import CardOrderUser from "@client/product/card-order-user";
import { useState } from "react";
import AddressUser from "./address-user";
import OrdersUser from "./orders-user";
import ProfileUser from "./profile-user";

export default function PageAccount() {
  const [show, setShow] = useState<"account" | "address" | "orders">("account");

  return (
    <div className="py-10 space-y-10  px-3 sm:px-0 sm:w-[323px] mx-auto">
      <div className="flex justify-center gap-3 font-GarnettBold font-bold text-gray-normal">
        <button className={`flex whitespace-nowrap ${show == "account" ? "text-dark" : ""}`} onClick={() => setShow("account")}>
          My Account
        </button>
        <button className={`flex whitespace-nowrap ${show == "address" ? "text-dark" : ""}`} onClick={() => setShow("address")}>
          Addresses
        </button>
        <button className={`flex whitespace-nowrap ${show == "orders" ? "text-dark" : ""}`} onClick={() => setShow("orders")}>
          Orders
        </button>
      </div>
      {show == "account" && <ProfileUser />}
      {show == "address" && <AddressUser />}
      {show == "orders" && <OrdersUser />}
    </div>
  );
}
