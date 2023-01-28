import useData from "@client/commons/data";
import useOnScreen from "@client/commons/hooks";
import { useQuery } from "@client/commons/hooks/url";
import { AppInterface } from "@client/commons/interface/app";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleCard from "./componenst/article-card";
import ArticleCardSkeleton from "./componenst/article-card-skeleton";
import CalenderArchive from "./componenst/calender-archive";
import "./style.css";

export default function ArticlesByCategoryPage() {
  const query = useQuery();

  const navigate = useNavigate();
  const { categoriName, tgl } = useParams();

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isLoadShow = useOnScreen(loadMoreRef);
  useEffect(() => {
    if (isLoadShow && news.page?.last_page && news.page?.last_page > news.page.next_page) {
      getNews("getNewsByCategory", {
        params: { ...(tgl && { date: tgl }), ...(query.get("search") && { search: query.get("search") }), category: categoriName, page: news.page.next_page, limit: 10 },
      });
    }
    return () => {};
  }, [isLoadShow]);

  const [colsArticles, setColsArticles] = useState(3);
  const {
    data: news,
    loading: loadingNews,
    get: getNews,
  } = useData<{
    page: { current_page: number; first_page?: number; next_page: number; last_page?: number; previous_page: number };
    result: AppInterface.Article[];
  }>({ page: { next_page: 1 }, result: [] });

  const [groupArticles, setgroupArticles] = useState<AppInterface.Article[][]>([]);
  const [penampungArticles, setPenampungArticles] = useState<AppInterface.Article[]>([]);

  useEffect(() => {
    setPenampungArticles([]);
    getNews("getNewsByCategory", {
      params: { ...(tgl && { date: tgl }), ...(query.get("search") && { search: query.get("search") }), category: categoriName, page: 1, limit: 10 },
    });
    return () => {};
  }, [categoriName, tgl]);

  useEffect(() => {
    const articlesSortGroup: AppInterface.Article[][] = [];
    penampungArticles.map((article, i) => {
      const keyMod = (i + 1) % colsArticles;
      let ky = 0;
      if (keyMod == 2) ky = 1;
      else if (keyMod == 0) ky = 2;
      if (!articlesSortGroup[ky]) articlesSortGroup[ky] = [article];
      else articlesSortGroup[ky].push(article);
    });

    setgroupArticles(articlesSortGroup);
    return () => {};
  }, [penampungArticles.length, colsArticles]);

  useEffect(() => {
    if (!loadingNews) {
      setPenampungArticles([...penampungArticles, ...news.result]);
    }
    return () => {};
  }, [news.page.next_page]);

  useEffect(() => {
    const handleResize = () => {
      setColsArticles(window.innerWidth < 500 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container py-10">
      <div className="all-article px-2 sm:px-0">
        <div className="articles-header">
          <h1 className="font-PublicSansMedium text-center text-[32px] font-bold">
            <span className="whitespace-nowrap title relative">{categoriName}</span>
          </h1>
        </div>
        <div className="sm:w-3/4 flex justify-between sm:justify-end my-10">
          <form className="flex gap-4 sm:w-2/3 mr-[13px]">
            <input placeholder="Search on Economy" name="search" className="outline-none border rounded-sm py-1 px-4 w-full" />
            <button type="submit" className="bg-black text-light rounded px-2 ">
              Search
            </button>
          </form>
        </div>
        <div className="flex justify-center flex-col sm:flex-row gap-4">
          <div className="sm:w-3/4">
            <div className="articles-body mt-6">
              <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${colsArticles}, minmax(0, 1fr))` }}>
                {groupArticles.map((indexArticle, i) => {
                  return (
                    <div className="flex flex-col gap-4" key={i}>
                      {indexArticle.map((article) => {
                        return <ArticleCard key={article.id} article={article} />;
                      })}
                    </div>
                  );
                })}
              </div>
              <div ref={loadMoreRef} className="loadmore"></div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {loadingNews &&
                  [1, 2, 3].map((a) => {
                    return <ArticleCardSkeleton key={a} />;
                  })}
              </div>
              {groupArticles.length < 1 && <div className="flex justify-center items-center p-10">No Content</div>}
            </div>
          </div>
          <div className="sm:w-1/4">
            <CalenderArchive
              onChange={(v) => {
                navigate(`/news-by-category/${categoriName}/${v.getFullYear()}-${v.getMonth() + 1}-${v.getDate() + 1}`);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
