import { AppInterface } from "@client/commons/interface/app";
import axios from "axios";
import { LoaderFunctionArgs } from "react-router-dom";

export async function articleDetailLoader({ params }: LoaderFunctionArgs) {
  const { data: article } = await axios.get<{ data: AppInterface.ArticleGroupKategori[] }>("getNews/" + params.idArticle);
  return { article };
}
