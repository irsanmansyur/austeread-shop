import { AppInterface } from "@client/commons/interface/app";
import axios from "axios";

export async function homeLoader() {
  const { data: news } = await axios.get<{ data: AppInterface.ArticleGroupKategori[] }>("getNews");
  return { news };
}
