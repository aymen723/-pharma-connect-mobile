import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { COLORSS, Gstyles } from "../constants/theme";
import Productcard from "../Component/Productcard";
import { router } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { fetchProductsByFilter } from "../client/api/stockService/productApi";
import { fetchTagsByFilter } from "../client/api/stockService/tagApi";

import Tag from "../Component/Tag";
import { Page } from "../client/types/responses";
import {
  ProductRespData,
  TagRespData,
} from "../client/types/responses/StockResponses";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

export default function Home() {
  const [products, Setproducts] = useState<Page<ProductRespData> | undefined>();
  const [Tags, setTags] = useState<Page<TagRespData> | undefined>();
  const navigation = useNavigation();
  const [selectedTag, setselectedTag] = useState<TagRespData | undefined>();

  useEffect(() => {
    fetchProductsByFilter({})
      .then((res) => {
        Setproducts(res.data);
        console.log("here is a list of products", res.data);
      })
      .catch((err) => {
        console.log("here error in products func", err);
      });

    fetchTagsByFilter()
      .then((res) => {
        console.log("here is a list of Tags", res.data.content.length);
        setTags(res.data);
      })
      .catch((err) => {
        console.log("here error in tags func", err);
      });
  }, []);

  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={"white"}></StatusBar>
      <View style={styles.searchbox}>
        <View style={styles.inputView}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
            style={styles.sidebar}
          >
            <Entypo name="menu" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/Screens");
            }}
            style={Gstyles.searchinput}
          >
            <Feather
              name="search"
              size={20}
              style={{ paddingLeft: 20 }}
              color="gray"
            />
            <Text style={{ paddingLeft: 10, color: "gray" }}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/Screens/Cart");
            }}
            style={styles.cart}
          >
            <Feather name="shopping-cart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productbox}>
        <View style={styles.TagContainer}>
          <ScrollView
            horizontal={true}
            style={{ width: "100%", height: "100%" }}
            contentContainerStyle={{ alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
          >
            {Tags ? (
              Tags.content.map((item) => {
                return <Tag key={item.id} item={item}></Tag>;
              })
            ) : (
              <View
                style={{
                  width: 400,
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator
                  color="green"
                  size={"large"}
                ></ActivityIndicator>
              </View>
            )}
          </ScrollView>
        </View>
        <View style={styles.productlist}>
          <FlatList
            style={{ backgroundColor: COLORSS.white }}
            contentContainerStyle={styles.listscroll}
            data={products?.content}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            numColumns={2}
            // keyExtractor={(item) => item.id}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => <Productcard item={item} />} // pagingEnabled={true}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchbox: {
    flex: 0.1,
    // borderColor: "black",
    // borderWidth: 1,
    backgroundColor: "white",
  },
  productbox: {
    flex: 0.9,

    alignItems: "center",
  },
  productlist: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: "red",
  },
  TagContainer: {
    width: "100%",
    flex: 0.1,
    backgroundColor: "white",
  },
  listscroll: {
    width: "100%",
  },
  row: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: 5,
    paddingBottom: 5,
  },
  inputView: {
    height: "100%",
    borderColor: "red",
    borderWidth: 1,
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  sidebar: {
    width: "10%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "ghostwhite",
  },
  cart: {
    width: "10%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "ghostwhite",
  },
});
