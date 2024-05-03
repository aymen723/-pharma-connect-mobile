export type GetFilteredStockReq = {
  coordinates?: {
    x: number;
    y: number;
  };
};

export type StockFilterParams = {
  range?: number | string;
  page?: number | string;
  pageSize?: number | string;
  tags?: number[] | string[] | number | string;
  pharmacies?: number[] | string[] | number | string;
  products?: number[] | string[] | number | string;
  search?: string;
  x?: number;
  y?: number;
};
