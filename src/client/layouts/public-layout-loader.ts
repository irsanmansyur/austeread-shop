import { AppInterface } from "@client/commons/interface/app";
import axios from "axios";

export const publicLayoutLoader = async () => {
  const { data } = await axios.get<{ data: AppInterface.Config }>("config");
  return { configs: data };
};
