import { Filter } from "../../types/requests";

import {
  AvailableStockRespData,
  StockId,
} from "../../types/responses/StockResponses";
import { Page } from "../../types/responses";
import { STOCK_SERVICE_URL_V1 } from "../../config/settings";
import axios, { AxiosRequestConfig, CustomParamsSerializer } from "axios";
import { prepareSearchParams } from "../../util/dataTransformation";
import {
  GetFilteredStockReq,
  StockFilterParams,
} from "../../types/requests/StockRequests";

export const fetchStockByFilter = (
  searchFilter?: Filter<StockFilterParams>,
  config?: AxiosRequestConfig
) => {
  const params = prepareSearchParams(searchFilter);
  console.log("stock params ", params);
  console.log("stock body ", searchFilter?.body);
  return axios<Page<AvailableStockRespData>>({
    url: STOCK_SERVICE_URL_V1 + "/stock",
    params,
    method: "GET",
    ...config,
  });
};

export const fetchStockById = (id: StockId, config?: AxiosRequestConfig) => {
  return axios<AvailableStockRespData>({
    url: `${STOCK_SERVICE_URL_V1}/stock/${id.pharmacyId}/${id.productId}`,
    method: "GET",

    ...config,
  });
};
