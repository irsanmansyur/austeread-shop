import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  product?: {
    qty: number;
  };
};
export default function ProductCardHome({ product = { qty: 1 } }: Props) {
  return (
    <Link to={"/product/sdsds"} className="product-card">
      <div className="product-card-image h-[225px] sm:h-[332px]">
        <img src="/static/product-image.jpg" alt="image" className="h-full w-full" />
      </div>
      <div className="product-card-detail">
        <div className="product-nama font-bold text-lg">Austeread x Jane Doe</div>
        <div className="product-desc text-gray-700">Austeread Clasic</div>
        <div className="product-harga text-gray-900 text-base">Rp. 100.000</div>
      </div>
    </Link>
  );
}
