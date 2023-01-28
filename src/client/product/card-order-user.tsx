import React from "react";

export default function CardOrderUser() {
  return (
    <div className="section-address bg-gray-200 space-y-4 p-2">
      <div className="section-header font-bold flex flex-col gap-1 font-garnet">
        <span className="text-gray-normal text-xs">25 August 2021</span>
        <h5 className="font-medium">#240821</h5>
      </div>
      <div className="body flex gap-4">
        <div className="image w-[51px] h-[64px]">
          <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
        </div>
        <div className="product-card-detail">
          <div className="product-nama font-bold">Austeread x Jane Doe</div>
          <div className="product-harga text-gray-normal text-sm">3 x Rp. 100.000</div>
          <div className="product-variant text-gray-700">Total : Rp. 597.000</div>
        </div>
      </div>
      <div>
        <div className="status">
          <div className="text-gray-normal">Status : </div>
          <div className="font-normal">Waiting for Payment</div>
        </div>
        <hr className="my-3 mx-2" />
        <div className="flex justify-center flex-col space-y-2">
          <button className="text-primary hover:underline">Pay Now</button>
          <button className="">Download invoice</button>
        </div>
      </div>
    </div>
  );
}
