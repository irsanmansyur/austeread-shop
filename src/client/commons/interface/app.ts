export namespace AppInterface {
  interface baseMongo {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
  }
  export type User = baseMongo & {
    email: string;
    fullname?: string;
    lastname?: string;
    firstname?: string;
    last_name: string;
    first_name: string;
    password?: string;
    role: string;
    token?: string;
  };
  export type Config = {
    about: string;
    advertising_opportunities: string;
    baseurl: string;
    email: string;
    instagram: string;
    twitter: string;
    whatsapp: string;
    origin_rajaongkir: string;
    shopFooter: ShopFooter[];
  };
  export type ShopFooter = baseMongo & {
    name: string;
    value: string;
  };

  type artSort = Article[];
  export interface ArticleGroupKategoriCustom {
    category_name: string;
    articlesSort: artSort[];
  }
  export interface ArticleGroupKategori {
    category: number;
    category_name: string;
    value: Article[];
  }
  export interface Article extends baseMongo {
    title: string;
    desc: string;
    thumbnail: string;
    img: string;
    like: number;
    tbl_user_first_name: string;
    tbl_user_last_name: string;
    tbl_news_category_name: string;
    tbl_user: User;
    tbl_news_category: Kategori;
  }
  export interface Kategori extends baseMongo {
    name: string;
  }

  export interface HightLight {
    title: string;
    desc: string;
    id: string;
    createdAt: string;
    thumbnail: string;
    img: string;
    tbl_news_category: {
      name: string;
      createdAt: string;
    };
  }
}
