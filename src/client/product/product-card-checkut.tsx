import { useState } from "react";

type Props = {
  product?: {
    qty: number;
  };
};
export default function ProductCardCheckout({ product = { qty: 1 } }: Props) {
  const [qty, setQty] = useState(product.qty);
  if (qty < 1) return <></>;
  return (
    <div className="product-card flex gap-2">
      <div className="product-card-image">
        <img src="/static/product-image.jpg" alt="image" className="w-[62px] sm:w-[100px] h-[78px] sm:h-[110px]" />
      </div>
      <div className="product-card-detail w-full">
        <div className="product-nama">Austeread x Jane Doe</div>
        <div className="product-variant text-xs text-gray-500">Size : L</div>
        <div className="product-variant text-xs text-gray-500">Qty : L</div>
        <div className="flex justify-between text-xs items-center">
          <div className="product-harga text-gray-800 ">Rp. 100.000</div>
          <div className="product-harga text-gray-800 text-sm">Rp. 300.000</div>
        </div>
      </div>
    </div>
  );
}
