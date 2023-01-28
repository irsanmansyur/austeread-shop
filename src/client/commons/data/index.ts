import axios, { AxiosRequestConfig, RawAxiosRequestConfig } from "axios";
import { useState } from "react";

export default function useData<T = {} | any>(obj: any = {}) {
  const [messageError, setMessageError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>(obj as T);
  const get = (url: string, config?: RawAxiosRequestConfig<any> | undefined) => {
    setLoading(true);
    return axios
      .get<T>(url, config)
      .then((resp) => {
        if (resp.status == 302) return;
        setData(resp.data);
        return resp;
      })
      .catch((e) => {
        console.error("error get data  ");
      })
      .finally(() => setLoading(false));
  };
  const post = (url: string, data: Record<string, any> = {}, config?: AxiosRequestConfig<any>) => {
    setLoading(true);
    return axios
      .post<T>(url, data, config)
      .then((resp) => {
        setData(resp.data);
        return resp;
      })
      .finally(() => setLoading(false));
  };
  return { loading, get, data, post, messageError };
}
