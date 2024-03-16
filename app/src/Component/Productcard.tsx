import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { product } from "../Models/models";

export default function Productcard({ item }: { item: product }) {
  return (
    <View style={styles.conatiner}>
      <View style={styles.imagebox}>
        <Text>azd</Text>
      </View>
      <View style={styles.contentbox}>
        <Text style={{ fontSize: 12 }}>{item.name}</Text>
        <Text style={{ fontSize: 12 }}>{item.descprtion}</Text>
        <Text style={{ fontSize: 16 }}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    width: 160,
    height: 240,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 15,
  },
  imagebox: {
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    flex: 0.7,
    backgroundColor: "white",
  },
  contentbox: {
    borderRadius: 15,
    flex: 0.3,
    backgroundColor: "white",
  },
});
