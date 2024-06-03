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
  const [Tags, SetTags] = useState<Page<TagRespData> | []>();

  useEffect(() => {
    if (Search?.length > 2) {
      // fetchTagsByFilter({ name: Search })
      //   .then((res) => {
      //     SetTags(res.data);
      //     // console.log("Tags :", Tags?.content);
      //   })
      //   .catch((res) => {
      //     console.log(res);
      //   });

      fetchProductsByFilter({ search: Search })
        .then((res) => {
          console.log(res.data);
          SetProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (Search.length == 0) {
      SetProducts(undefined);
    }
  }, [Search]);
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={"white"}></StatusBar>
      <SearchHeader SearchValue={Search} SearchInput={SetSearch}></SearchHeader>
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
    </View>
  );
}
