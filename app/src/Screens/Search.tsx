import { View, Text, FlatList } from "react-native";
import React from "react";
import { Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
export default function Search() {
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={"white"}></StatusBar>
      <View>{/* <FlatList data={product} renderItem={Productcard} /> */}</View>
    </View>
  );
}
