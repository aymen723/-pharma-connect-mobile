import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import SearchHeader from "../Component/SearchHeader";
import { fetchProductsByFilter } from "../client/api/stockService/productApi";
import {
  ProductRespData,
  TagRespData,
} from "../client/types/responses/StockResponses";
import { fetchTagsByFilter } from "../client/api/stockService/tagApi";
import { Page } from "../client/types/responses";
export default function Search() {
  const [Search, SetSearch] = useState<string | undefined>();
  const [Products, SetProducts] = useState<ProductRespData | undefined>();
  const [Tags, SetTags] = useState<Page<TagRespData> | undefined>();

  useEffect(() => {
    fetchProductsByFilter().then((res) => {
      console.log("products in search view", res.data);
    });
    fetchTagsByFilter().then((res) => {
      console.log("tags in seach view", res.data);
      SetTags(res.data);
    });
  }, [Search]);
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={"white"}></StatusBar>
      <SearchHeader SearchValue={Search} SearchInput={SetSearch}></SearchHeader>
    </View>
  );
}
