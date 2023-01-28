import { urlAsset } from "@client/commons/helpers";
import { AppInterface } from "@client/commons/interface/app";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }: { article: AppInterface.Article }) {
  return (
    <Link to={`/news/${article.id}`} className="card rounded relative">
      <img className="w-full rounded" src={urlAsset("img/upload/" + article.thumbnail)} alt="Card image" />
      <div className="p-4">
        <div className="text-xs pb-2 border-b-2 border-secondary">{`${article.tbl_news_category_name ?? article.tbl_news_category.name} | ${article.createdAt}`}</div>
        <div className="mt-3 font-PublicSansMedium text-base sm:text-[24px]">{article.title}</div>
      </div>
    </Link>
  );
}
