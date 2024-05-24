export type PharmacyFilterParams = {
  name?: string;
  range?: number;
  x?: number;
  y?: number;
  page?: number | string;
  pageSize?: number | string;
  tags?: number[] | string[] | number | string;
  ids?: number[] | string[] | number | string;
  products?: number[] | string[] | number | string;
  search?: string;
};
