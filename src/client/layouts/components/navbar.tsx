import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavbarSearch from "./navbar-search";
import NavbarCart from "./navbar-cart";
import NavbarMenu from "./navbar-menu";
export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <nav className="border-b-2 bg-[#F2F2F2] sm:bg-white backdrop-blur">
      <div className="flex justify-between items-center container p-2 sm:py-6 sm:px-0 ">
        <div className="w-1/3 ">
          {pathname == "/" ? (
            <Link to={"#"}>
              <img className="navbar-brand w-[35px] sm:w-[45px]" id="navbar-logo" src={"/static/icons/logo.austeread.gif"} />
            </Link>
          ) : (
            <button className="outline-none mt-2" onClick={(e) => navigate(-1)}>
              <img className="w-[35px] sm:w-[45px]" src={"/static/icons/icon_back.png"} />
            </button>
          )}
        </div>
        <Link className="navbar-brand font-GarnettBold text-[22px] sm:text-[29px]" to="/">
          <span className="">austeread</span>
          <span className="font-bold">Shop</span>
        </Link>
        <div className="flex justify-end items-center w-1/3">
          <div className="flex gap-[5px] items-end">
            <NavbarSearch />
            <a className="" id="user" href="/login">
              <img className="w-[23px]" src={"/static/icons/icon_profile.png"} />
            </a>
            <NavbarCart />
          </div>
        </div>
      </div>
    </nav>
  );
}
