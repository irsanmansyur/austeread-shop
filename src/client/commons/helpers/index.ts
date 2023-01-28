import { useLocation, useNavigate } from "react-router-dom";

export const urlAsset = (path: string): string => {
  return `https://austeread.com/assets/${path}`;
};

export const backAction = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return pathname == "/" ? navigate("/") : navigate(-1);
};

let lastGenerateId = 0;
export const lastId = (prefix = "id") => {
  lastGenerateId++;
  return `${prefix}${lastGenerateId}`;
};
