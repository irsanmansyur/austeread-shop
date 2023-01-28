import ProductCard from "@client/product/product-card";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarCart() {
  const [show, setShow] = useState(false);
  const sidebarCartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // @ts-ignore
      if (sidebarCartRef.current && !sidebarCartRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarCartRef]);
  return (
    <div className="flex">
      <button className="outline-none" id="user" onClick={() => setShow(true)}>
        <img className="w-[23px]" src={"/static/icons/icon_cart.png"} />
      </button>
      <div className={`absolute inset-0 transform duration-300 ease-in-out  h-full ${!show ? "translate-x-full" : ""}`}>
        <div className="h-full bg-dark sm:bg-white/40 backdrop-blur flex justify-end ">
          <div ref={sidebarCartRef} className="border-l-2 border-l-dark text-dark min-w-[300px] h-full flex flex-col justify-between px-4 bg-white">
            <div>
              <div className="border-b border-light py-3 flex items-center justify-between">
                <h1 className="font-GarnettMedium font-bold text-2xl">Shopping Cart</h1>
                <button className="outline-none">
                  <img src="/static/icons/icon_x.png" onClick={(e) => setShow(false)} className="w-[24px]" />
                </button>
              </div>
              <ul className="navbar-menu PublicSansBlack  flex flex-col gap-3">
                {[1, 2, 3].map((m) => {
                  return (
                    <li key={m}>
                      <ProductCard />
                    </li>
                  );
                })}
              </ul>
              <hr className="my-3" />
              <div className="bg-white border relative w-full">
                <input className="outline-none p-2 w-[calc(100%-110px)]" />
                <button className="absolute right-0 outline-none h-full bg-black text-white w-[102px]">APPLY</button>
              </div>
              <hr className="my-3" />
              <div className="cart-price">
                <div className="flex justify-between font-bold w-full">
                  <span>Total</span>
                  <span>Rp. 597.000</span>
                </div>
              </div>
            </div>
            <div className="sidebar-footer-section mb-4">
              <div className="flex items-center justify-between">
                <Link to={"/"}>continue shopping</Link>
                <button className="bg-primary p-2 text-white hover:bg-opacity-90">CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
