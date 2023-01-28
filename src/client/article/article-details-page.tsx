import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import useData from "../commons/data";
import { urlAsset } from "../commons/helpers";
import { SkeletonNews } from "./componenst/skeleton-card";
import "react-tooltip/dist/react-tooltip.css";
import "./style.css";
import IconCopy from "./componenst/icon-copy";
import { AppInterface } from "@client/commons/interface/app";
import CommentParent from "./componenst/commen-parent";
export default function ArticleDetailsPage() {
  const { article } = useLoaderData() as { article: AppInterface.Article };

  const { data: latestArticles, loading: loadLatest, get } = useData<AppInterface.Article[]>([]);
  const { data: relatedArticle, loading: loadRelated, get: getRelated } = useData<{ category_name: string; page: object; result: AppInterface.Article[] }>();
  const parentScroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (article.id) getRelated("getNewsByCategory", { params: { page: 1, limit: 3, category: article.tbl_news_category.name } });
    return () => {};
  }, [article.id]);

  useEffect(() => {
    get("getlatestNews");
    return () => {};
  }, []);

  return (
    <>
      {article.id && (
        <div className="container flex flex-col sm:flex-row sm:py-6 gap-10 sm:px-0 px-2">
          <div className="sm:w-4/6">
            <div className="article-page">
              <div className="article-page-header">
                <div className="-mx-2 sm:hidden mb-2">
                  <img className="sm:hidden" src={urlAsset("img/upload/" + article.img)} />
                </div>
                <small className="text-sm font-[400] italic">{`${article.tbl_news_category.name} | ${article.createdAt}`}</small>
                <h1 className="text-4xl">{article.title}</h1>
                <small className="text-xs text-gray-700 font-[400]">Words by {`${article.tbl_user.first_name}  ${article.tbl_user.last_name}`}</small>
              </div>
              <div className="article-page-body font-PublicSansLight text-sm leading-7 pt-10  text-gray-600">
                <div dangerouslySetInnerHTML={{ __html: article.desc }} />
              </div>
              <div className="article-page-footer py-5">
                <div className="flex justify-between items-end">
                  <div className="inline-flex items-center gap-2 text-gray-600">
                    <div className="p-3 bg-gray-200 rounded-full">
                      <img id="path_ek26" src="/static/icons/like.png" />
                    </div>
                    {article.like} Likes
                  </div>
                  <div className="">
                    <h6 className="PublicSans-regular">Share :</h6>
                    <div className="flex gap-2">
                      <IconCopy />
                      <a href="#">
                        <img src="/static/icons/icon_facebook.png" />
                      </a>
                      <a href="#">
                        <img src="/static/icons/icon_twitter.png" />
                      </a>
                      <a href="#">
                        <img src="/static/icons/icon_whatsapp.png" />
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="my-6" />
                <div id="comments">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments (20)</h2>
                  </div>
                </div>
                <form className="mb-6">
                  <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows={6}
                      className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a comment..."
                      required
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary dark:focus:ring-primary hover:bg-primary/80"
                  >
                    Post comment
                  </button>
                </form>
                <CommentParent />
                <CommentParent />
                <CommentParent />
              </div>
            </div>
          </div>
          <div className="sm:w-2/6">
            <img className="img-fluid hidden sm:block" src={urlAsset("img/upload/" + article.img)} />
            <div className="latest-article py-10">
              <h3 className="text-2xl text-center pb-4">The Latest</h3>
              <ul className="flex gap-3 flex-col">
                {!loadLatest &&
                  latestArticles.map((articleLates, i) => {
                    return (
                      <li key={i} className="bg-gray-50 -mx-2 px-2">
                        <div className="mb-2">
                          <small className="relative font-PublicSansBoldItalic after:absolute after:-bottom-2 after:bg-primary after:left-0  after:w-10/12 after:h-[2px]">
                            {`${articleLates.tbl_news_category.name} | ${articleLates.createdAt}`}
                          </small>
                        </div>
                        <Link to={`/news/${articleLates.id}`} preventScrollReset={true}>
                          <h6 className="text-[16px] leading-5 text-dark font-PublicSansLight">{articleLates.title}</h6>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gray-100 py-10">
        <div className="container px-2 sm:px-0">
          <div className="all-article">
            <div className="articles-header">
              <h1 className="font-PublicSansMedium text-center text-[32px] font-bold">
                <span className="whitespace-nowrap title relative">Related Article</span>
              </h1>
            </div>
            <div className="articles-body mt-6">
              <div ref={parentScroll} className="relative grid grid-flow-col gap-3 overflow-x-auto hide-scroll-bar">
                {relatedArticle.result
                  ? relatedArticle.result.map((article, i) => {
                      return (
                        <Link
                          to={"/news/" + article.id}
                          key={i}
                          className="!min-w-[290px] h-[210px] sm:h-[232px]"
                          style={{
                            width: parentScroll.current ? `${parentScroll.current.offsetWidth / 3 - 24}px` : "240px",
                            // minWidth: `${parentScroll.current ? parentScroll.current.offsetWidth + "px" : "320px"} `,
                          }}
                        >
                          <div className="card bg-dark rounded overflow-hidden text-white relative">
                            <img className="h-[210px] sm:h-[232px] w-full" src={urlAsset("img/upload/" + article.thumbnail)} alt={`Thumbnail ${article.title}`} />
                            <div className="absolute inset-0 flex justify-end p-4 items-center flex-col bg-black/60">
                              <p className="text-[10px] sm:text-xs text-center">{`${article.tbl_news_category.name} | ${article.createdAt}`}</p>
                              <h5 className="text-center text-xs sm:text-base sm:text-base mt-3">{article.title}</h5>
                            </div>
                          </div>
                        </Link>
                      );
                    })
                  : [1, 2, 3, 4].map((a) => <SkeletonNews key={a} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
