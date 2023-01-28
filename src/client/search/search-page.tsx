import { useEffect, useRef, useState } from "react";
import useData from "../commons/data";
import { urlAsset } from "../commons/helpers";
import "react-tooltip/dist/react-tooltip.css";
import "./style.css";
import { AppInterface } from "@client/commons/interface/app";
import SelectCustom from "@client/components/form/select";
import CardSearch, { CardSearchSkeleton } from "./card-search";
import { useNavigate, useParams } from "react-router-dom";
export default function SearchPage() {
  const navigate = useNavigate();
  const { query } = useParams<"query">();
  const [data, setData] = useState<Record<string, any>>({});
  const { data: articlesSearch, loading: loadSearch, get: getArticles } = useData<AppInterface.Article[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (query) {
      getArticles("getSearchNews/" + query);
      if (searchRef.current) searchRef.current.value = query;
    }
    return () => {};
  }, [query]);

  return (
    <div className="container py-10">
      <div className="article-page-header flex items-center flex-col gap-8">
        <h1 className="text-4xl text-center">Search Article From Austeread</h1>
        <form
          className="flex gap-4 w-2/3 mr-[13px]"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/search/" + searchRef.current?.value);
          }}
        >
          <input ref={searchRef} placeholder={`Try "Fashion industry"`} name="search" className="outline-none border rounded-sm py-1 px-4 w-full" />
          <button type="submit" className="bg-black text-light rounded px-2 ">
            Search
          </button>
        </form>
      </div>
      <div className="article-page mt-10 p-2 sm:px-0">
        <div className="articles-info flex justify-between items-center border-b pb-2">
          <div>{articlesSearch.length} article from austeread</div>
          <div className="flex items-center gap-2">
            <span>Sort by</span>
            <SelectCustom
              className="py-1"
              value={data.value ?? "-"}
              options={[
                { label: "Newest", value: "11" },
                { label: "Populer", value: "22" },
              ]}
              onChange={(e) => setData({ ...data, sort: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {!loadSearch ? articlesSearch.map((article, i) => <CardSearch key={i} article={article} />) : [1, 2, 3].map((a) => <CardSearchSkeleton key={a} />)}
        </div>
      </div>
    </div>
  );
}
