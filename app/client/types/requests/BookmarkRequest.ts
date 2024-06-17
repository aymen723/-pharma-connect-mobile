export type BookmarkFilterParams = {
  name?: string;

  page?: number | string;
  pageSize?: number | string;
  accountId?: number;
};

export type BookmarkCreateRequest = {
  name?: string;
  regiteredProd?: number;
  products?: number[];
};
