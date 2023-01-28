import Breadcrumbs from "@client/components/breadcrumbs";
import { InputCustom } from "@client/components/form/InputGroup";
import { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import ProductCardCheckout from "./product-card-checkut";
import ProductCardHome from "./product-card-home";

type Props = {
  product?: {
    qty: number;
  };
};
export default function PageSearchProduct({ product = { qty: 1 } }: Props) {
  const { search } = useParams<"search">();
  const breads = [{ label: "search" }, ...(search ? [{ label: search }] : [])];

  return (
    <div className="container">
      <Breadcrumbs breads={breads} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 px-2 my-2">
        {[1, 22, 2, 3, 4, 5, 6, 12, 14, 13].map((e) => {
          return <ProductCardHome key={e} />;
        })}
      </div>
    </div>
  );
}
