import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORSS, Gstyles } from "../constants/theme";
import Productcard from "../Component/Productcard";
import { product } from "../Models/models";

const DATA: product[] = [
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
    id: 4,
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
        <TextInput style={Gstyles.Biginput} placeholder="Search"></TextInput>
      </View>
      <View style={styles.productbox}>
        <View style={styles.producttitle}>
          <Text>Product of the Day </Text>
        </View>
        <View style={styles.productlist}>
          <FlatList
            style={{ flex: 1, height: 130 }}
            contentContainerStyle={styles.test}
            data={DATA}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            numColumns={2}
            columnWrapperStyle={styles.test2}
            renderItem={Productcard}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchbox: {
    flex: 0.2,
    borderColor: "red",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  productbox: {
    flex: 0.8,

    alignItems: "center",
  },
  productlist: {
    flex: 0.9,

    width: "100%",
  },
  producttitle: {
    flex: 0.1,
    width: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  test: {
    width: "100%",
  },
  test2: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
