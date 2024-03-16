import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { product } from "../Models/models";

export default function Productcard({ item }: { item: product }) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.conatiner}>
      <View style={styles.imagebox}>
        <Image style={styles.image} source={item.image}></Image>
      </View>
      <View style={styles.contentbox}>
        <Text style={{ fontSize: 12 }}>{item.name}</Text>
        <Text style={{ fontSize: 12 }}>{item.descprtion}</Text>
        <Text style={{ fontSize: 16 }}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    width: 160,
    height: 240,

    borderRadius: 15,
    backgroundColor: "white",
  },
  imagebox: {
    borderRadius: 15,

    flex: 0.7,
    backgroundColor: "#EEEEF0",
  },
  contentbox: {
    flex: 0.3,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
});
