import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORSS, Gstyles } from "../constants/theme";
import Productcard from "../Component/Productcard";
import { product } from "../Models/models";
import { router } from "expo-router";
import { Search, ShoppingCart, Menu } from "lucide-react-native";

export const List: product[] = [
  {
    id: 1,
    descprtion: "test1",
    image: require("../../../assets/Images/image1.png"),
    name: "test1",
    price: 1,
  },
  {
    id: 2,
    descprtion: "test1",
    image: require("../../../assets/Images/image1.png"),
    name: "test1",
    price: 1,
  },
  {
    id: 3,
    descprtion: "test1",
    image: require("../../../assets/Images/image1.png"),
    name: "test1",
    price: 1,
  },
  {
    id: 4,
    descprtion: "test1",
    image: require("../../../assets/Images/image1.png"),
    name: "test1",
    price: 1,
  },
  {
    id: 5,
    descprtion: "test1",
    image: require("../../../assets/Images/image1.png"),
    name: "test1",
    price: 1,
  },
];

export default function Home() {
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>
      <View style={styles.searchbox}>
        <View style={styles.inputView}>
          <TouchableOpacity style={styles.sidebar}>
            <Menu color={"black"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/src/Screens");
            }}
            style={Gstyles.searchinput}
          >
            <Search color="gray" size={20} style={{ paddingLeft: 50 }} />
            <Text style={{ paddingLeft: 10, color: "gray" }}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/src/Screens/Cart");
            }}
            style={styles.cart}
          >
            <ShoppingCart color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productbox}>
        <View style={styles.producttitle}>
          <Text>Products</Text>
        </View>
        <View style={styles.productlist}>
          <FlatList
            style={{ flex: 1, height: 130 }}
            contentContainerStyle={styles.listscroll}
            data={List}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={Productcard}
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
  },
  productbox: {
    flex: 0.9,

    alignItems: "center",
  },
  productlist: {
    flex: 1,
    width: "100%",
  },
  producttitle: {
    flex: 0.1,
    width: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    elevation: 10,
  },
  listscroll: {
    width: "100%",
  },
  row: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
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
