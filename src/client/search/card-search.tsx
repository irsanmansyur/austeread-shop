import { urlAsset } from "@client/commons/helpers";
import { AppInterface } from "@client/commons/interface/app";
import React from "react";
import { Link } from "react-router-dom";

export default function CardSearch({ article }: { article: AppInterface.Article }) {
  return (
    <Link to={`/news/${article.id}`} className="flex gap-2 sm:gap-4 flex-col sm:flex-row border-b last:border-b-0 pb-2 sm:pb-4 ">
      <img className="rounded w-full sm:w-[300px]" src={urlAsset("img/upload/" + article.thumbnail)} alt="Card image" />
      <div className="py-4">
        <div className="text-xs pb-2 border-b-2 border-secondary">{`${article.tbl_news_category_name ?? article.tbl_news_category.name} | ${article.createdAt}`}</div>
        <div className="mt-3 font-PublicSansMedium text-base sm:text-[24px]">{article.title}</div>
      </div>
    </Link>
  );
}
export function CardSearchSkeleton() {
  return (
    <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row animate-pulse py-2 sm:py-4">
      <div className="flex justify-center items-center p-10 border rounded">
        <svg className="rounded w-[100px] h-[100px] text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
      <div className="py-4 w-full">
        <div className="rounded text-xs pb-2  bg-gray-200  w-2/3 h-3" />
        <hr className="border-secondary mb-4 mt-1 w-2/3" />
        <div className="rounded mt-3 font-PublicSansMedium text-base bg-gray-400 sm:text-[24px] w-full h-6" />
        <div className="rounded mt-3 font-PublicSansMedium text-base bg-gray-400 sm:text-[24px] w-4/6 h-6" />
        <div className="rounded mt-3 font-PublicSansMedium text-base bg-gray-400 sm:text-[24px] w-5/6 h-6" />
      </div>
    </div>
  );
}
