import { FlatList, View, Text, ScrollView } from "react-native";
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
import Tag from "../Component/Tag";
import SearchproductComp from "../Component/SearchproductComp";
export default function Search() {
  const [Search, SetSearch] = useState<string>("");
  const [Products, SetProducts] = useState<Page<ProductRespData> | undefined>();
  const [Tags, SetTags] = useState<string>("");

  useEffect(() => {
    fetchProductsByFilter({ search: Search, tags: Tags })
      .then((res) => {
        console.log(
          "here in new is the list in Search Screen",
          res.data.totalElements
        );
        SetProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [Search, Tags]);
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={"white"}></StatusBar>
      <SearchHeader
        SearchValue={Search}
        SearchInput={SetSearch}
        TagSelected={SetTags}
      ></SearchHeader>
      {(!!Search.length || !!Tags) && (
        <ScrollView
          style={{ borderWidth: 1, borderColor: "red" }}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          {Products?.content.map((item) => {
            return <SearchproductComp item={item} key={item.id} />;
          })}
        </ScrollView>
      )}
    </View>
  );
}
