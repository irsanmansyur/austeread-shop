import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {};
export default function BackComponent({ children, ...props }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <button
      {...props}
      type="button"
      className="outline-none"
      onClick={(e) => {
        if (pathname == "/") navigate("/");
        else navigate(-1);
      }}
    >
      {!children ? <img className="navbar-brand" id="navbar-logo" src={"/static/icons/icon_back.png"} width="45px" /> : children}
    </button>
  );
}
