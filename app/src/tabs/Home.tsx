import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORSS, Gstyles } from "../constants/theme";
import Productcard from "../Component/Productcard";
import { product } from "../Models/models";

const DATA: product[] = [
  {
    id: 1,
    descprtion: "test1",
    image: "test1",
    name: "test1",
    price: 1,
  },
  {
    id: 2,
    descprtion: "test1",
    image: "test1",
    name: "test1",
    price: 1,
  },
  {
    id: 3,
    descprtion: "test1",
    image: "test1",
    name: "test1",
    price: 1,
  },
  {
    id: 4,
    descprtion: "test1",
    image: "test1",
    name: "test1",
    price: 1,
  },
];

export default function Home() {
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor="whitesmoke"></StatusBar>
      <View style={styles.searchbox}></View>
      <View style={styles.productbox}>
        <View style={styles.producttitle}>
          <Text>Product of the Day </Text>
        </View>
        <View style={styles.productlist}>
          <FlatList
            style={{ flex: 1, height: 130 }}
            contentContainerStyle={styles.test}
            data={DATA}
            numColumns={2}
            renderItem={Productcard}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchbox: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  productbox: {
    flex: 0.7,
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
  },
  productlist: {
    flex: 0.9,
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
  },
  producttitle: {
    flex: 0.1,
    width: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    borderColor: "green",
    borderWidth: 1,
  },
  test: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
