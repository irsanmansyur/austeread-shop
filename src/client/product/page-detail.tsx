import Breadcrumbs from "@client/components/breadcrumbs";
import React, { useState } from "react";

type Props = {
  product?: {
    qty: number;
  };
};
export default function PageProductDetail({ product = { qty: 1 } }: Props) {
  const [qty, setQty] = useState(product.qty);
  if (qty < 1) return <></>;
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="flex p-2 flex-wrap sm:flex-nowrap gap-2 sm:space-x-4">
        <div className="product-image flex gap-2 w-full sm:w-1/2 h-[339px] sm:h-[524px]">
          <div className="h-[339px] sm:h-full flex flex-col overflow-y-auto overflow-x-hidden hide-scroll-bar gap-3 box-border box-content">
            <div className="image h-[75px]">
              <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
            </div>
            <div className="image h-[75px] ">
              <img src="/static/product-image.jpg" alt="image" className="h-[75px] w-full" />
            </div>
            <div className="image h-[75px] ">
              <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
            </div>
            <div className="image h-[75px] ">
              <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
            </div>
            <div className="image h-[75px] ">
              <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
            </div>
            <div className="image h-[75px] ">
              <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
            </div>
            <div className="image h-[75px] border border-dark box-border ">
              <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
            </div>
            <div className="image h-[75px] w-[75px]">
              <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
            </div>
            <div className="image h-[75px] w-[75px]">
              <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
            </div>
          </div>
          <div className="w-full">
            <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
          </div>
        </div>
        <div className="product-card-detail text-gray-800 space-y-3 w-full sm:w-1/2">
          <div>
            <div className="product-nama font-bold text-2xl">Austeread x Jane Doe</div>
            <div className="product-desc text-gray-700 ">Austeread Clasic</div>
          </div>
          <div className="product-harga font-bold text-gray-900 text-base">Rp. 100.000</div>
          <div className="product-variant  flex gap-2 items-center py-2">
            <span>Size :</span>
            <div className="space-x-2 text-sm">
              <button className="border-2 text-dark border-dark py-[1px] w-[35px] font-bold">XS</button>
              <button className="border-2 text-dark border-dark py-[1px] w-[35px] font-bold">S</button>
              <button className="border-2 text-dark border-dark py-[1px] w-[35px] font-bold">LG</button>
            </div>
          </div>
          <div className="product-card-action flex justify-center gap-2 flex-col w-full">
            <div className="flex items-center gap-2">
              <span>Quantity : </span>
              <button className="outline-none p-2 font-bold" onClick={() => setQty(qty - 1)}>
                -
              </button>
              <span className="">{qty}</span>
              <button className="outline-none p-2  font-bold" onClick={() => setQty(qty + 1)}>
                +
              </button>
            </div>
            <div className="w-full">
              <button className="sm:w-auto sm:px-10 w-full font-bold text-base font-GarnettBold py-2 bg-dark text-white">Add to Cart</button>
            </div>
          </div>
          <div className="overflow-hidden divide-y">
            <Item
              q="Descriptions"
              a="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing"
            />
            <Item q="Details" a="Answer 2" />
            <Item q="Size chart" a="Answer 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Item = ({ q, a }: any) => (
  <div className="relative overflow-hidden">
    <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
    <div className="h-12 w-full pl-5 flex items-center font-bold uppercase text-dark font-PublicSansMedium ">
      <h1>{q}</h1>
    </div>
    <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
    <div className="overflow-hidden bg-white transition-all duration-300 max-h-0 peer-checked:max-h-fit">
      <div className="p-5 border-t">{a}</div>
    </div>
  </div>
);
