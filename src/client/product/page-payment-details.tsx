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
export default function PagePaymentDetail({ product = { qty: 1 } }: Props) {
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="font-GarnettRegular">
        <div className="py-5 text-center">
          <h1 className="font-PublicSansRegular font-normal text-dark">Complete Payment In</h1>
          <h1 className="font-PublicSansMedium text-lg text-primary">23 : 59 : 16</h1>
        </div>
        <div className="bg-gray-200 p-5 space-y-6 m-2  text-xs sm:w-[530px] sm:mx-auto">
          <h2 className="text-base">BCA Virtual Account</h2>
          <hr className="border-t-2 border-gray-400" />
          <div className="order-number space-y-2">
            <div>Order Number</div>
            <div className="font-bold">#240821</div>
          </div>
          <div className="order-number space-y-2">
            <div>Virtual Account Number</div>
            <div className="font-bold flex justify-between">
              <span>088896755676333</span>
              <button className="outline-none text-primary">Copy</button>
            </div>
          </div>
          <div className="order-number space-y-2">
            <div>Total</div>
            <div className="font-bold flex justify-between">
              <span>Rp. 500.000</span>
              <button className="outline-none text-primary">Copy</button>
            </div>
          </div>
        </div>
        <div className="payment-info-action p-2 space-2  sm:w-[530px] sm:mx-auto flex flex-col sm:flex-row sm:gap-5 sm:px-0">
          <button className="border-2 py-3 w-full border-gray-normal font-GarnettRegular">CONTINUE SHOPPING</button>
          <div className="w-full group">
            <button className="border-2 py-3 w-full border-gray-normal bg-dark text-white font-GarnettRegular group-hover:w-2/3 transform duration-500 sm:group-hover:w-full hover:bg-dark/80">
              CEK PAYMENT STATUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
