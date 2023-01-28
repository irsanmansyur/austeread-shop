import Breadcrumbs from "@client/components/breadcrumbs";
import { InputCustom } from "@client/components/form/InputGroup";
import { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductCardCheckout from "./product-card-checkut";

type Props = {
  product?: {
    qty: number;
  };
};
export default function PageSelectPayment({ product = { qty: 1 } }: Props) {
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="p-2 space-y-5">
        <div className="personal-information">
          <div className="flex justify-between">
            <span className="font-GarnettMedium text-2xl">Payment Method </span>
          </div>
        </div>
        <div className="bodi-method-payment">
          <h3 className="title">E-Wallet</h3>
          <div className="flex flex-wrap py-2">
            <div className="bg-gray-normal w-[calc(33.3%-10px)]">
              <img src="/static/icons/shopie-icon.png" className="w-full" />
            </div>
          </div>
        </div>
        <div className="bodi-method-payment">
          <h3 className="title">Virtual Account</h3>
          <div className="flex flex-wrap py-2">
            <div className="bg-gray-normal w-[calc(33.3%-10px)]">
              <img src="/static/icons/shopie-icon.png" className="w-full" />
            </div>
          </div>
        </div>
        <div className="body py-4 space-y-3">
          <div className="flex justify-between gap-3 font-GarnettRegular">
            <Link to={"/product/checkout"} className="w-1/2 flex items-center justify-center">
              Back to Checkout
            </Link>
            <Link to="/invoice/payment-details" className="w-1/2 bg-primary text-white p-3 text-center ">
              Pay Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
