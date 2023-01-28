import Breadcrumbs from "@client/components/breadcrumbs";
import ProductCardCheckout from "@client/product/product-card-checkut";
import React from "react";
import { useParams } from "react-router-dom";

export default function PageOrderSummary() {
  const { idOrder } = useParams<"idOrder">();
  const breads = [{ label: "orders", url: "/product/checkout" }, ...(idOrder ? [{ label: idOrder }] : [])];

  return (
    <div className="container">
      <Breadcrumbs breads={breads} />
      <div className="py-4 space-y-4">
        <div className="section-shipping p-2 space-y-4">
          <div className="header font-garnet font-bold">Shipping Details</div>
          <div className="body">
            <table className="w-full">
              <tbody className="text-sm font-garnet font-[400]">
                <tr>
                  <td className="text-gray-700 py-1 whitespace-nowrap">Shipping to</td>
                  <td className="py-1 align-top">Ranti</td>
                </tr>
                <tr>
                  <td className="text-gray-700 align-top py-1 whitespace-nowrap pr-2">Phone Number</td>
                  <td className="py-1 align-top">08889997675</td>
                </tr>
                <tr>
                  <td className="text-gray-700 align-top py-1 whitespace-nowrap pr-2">Ship to</td>
                  <td className="align-top py-1">AZ Solusindo, Suri Kosambi, Cengkareng, Jakarta Barat, DKI Jakarta, 15504</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="section-payment p-2 space-y-4">
          <div className="header font-garnet font-bold">Payment Information </div>
          <div className="body">
            <table className="w-full">
              <tbody className="text-sm font-garnet font-[400]">
                <tr>
                  <td className="text-gray-700 py-1 whitespace-nowrap">Payment Method</td>
                  <td className="py-1 align-top">BCA Virtual Account</td>
                </tr>
                <tr>
                  <td className="text-gray-700 py-1 whitespace-nowrap">Amount</td>
                  <td className="py-1 align-top">Rp. 615.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-2 space-y-6">
          <ul className="flex gap-2 flex-col">
            {[1, 2, 3].map((s) => {
              return (
                <li className="border-b pb-2 last:pb-0 last:border-b-0" key={s}>
                  <ProductCardCheckout />
                </li>
              );
            })}
          </ul>
          <hr className="mx-2 border-t-2 border-gray-400" />
          <div className="font-garnet font-bold">
            <div className="flex justify-between mt-2 text-sm">
              <span>Subtotal</span>
              <span>Rp. 597.000</span>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span>Shipping</span>
              <span>Rp. 18.000</span>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span>Total Diskon</span>
              <span>- Rp. 10.000</span>
            </div>
          </div>
          <hr className="mx-2 border-t-2 border-gray-400" />
          <div className="flex justify-between mt-2 text-sm font-bold pb-4">
            <span>Total</span>
            <span>Rp. 600.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
