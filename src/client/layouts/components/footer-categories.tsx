import { useEffect } from "react";
import { Link } from "react-router-dom";
import useData from "@client/commons/data";
import { AppInterface } from "@client/commons/interface/app";
import { useSetRecoilState } from "recoil";
import { kategoriesAtom } from "@client/commons/data/layoutAtom";

export default function FooterCategoriesLink() {
  const setKategories = useSetRecoilState(kategoriesAtom);
  const { get, data: kategories, loading } = useData<AppInterface.Kategori[]>([]);
  useEffect(() => {
    get("getAllCategory").then((res) => {
      if (res?.data) setKategories(res.data);
    });
    return () => {};
  }, []);

  return (
    <div>
      <h6 className="uppercase font-bold mb-4">
        <b>See more articles</b>
      </h6>
      <div className="flex flex-col gap-3 -ml-2 pr-3">
        {loading ? (
          <div role="status" className="space-y-8 animate-pulse space-y-2 flex flex-col">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 " />
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
          </div>
        ) : (
          Array.isArray(kategories) &&
          kategories.map((kategori, i) => {
            return (
              <Link key={i} className="cursor-pointer hover:bg-white/20 rounded px-2" to={`/news-by-category/${kategori.name}`}>
                {kategori.name}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
