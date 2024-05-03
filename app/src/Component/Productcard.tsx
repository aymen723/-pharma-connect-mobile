import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { product } from "../Models/models";
import { router } from "expo-router";
import { ProductRespData } from "../client/types/responses/StockResponses";
import { COLORSS } from "../constants/theme";
import { Button } from "@rneui/base";

export default function Productcard({ item }: { item: ProductRespData }) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: `/src/Screens/ProductDescription`,
          params: item,
        });
      }}
      activeOpacity={0.8}
      style={styles.conatiner}
    >
      <View style={styles.imagebox}>
        <Image style={styles.image}></Image>
      </View>
      <View style={styles.contentbox}>
        <View style={styles.title}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              // padding: 5,
              color: COLORSS.textcolor,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              // padding: 5,
              color: "gray",
            }}
          >
            Dz {item.price}
          </Text>
        </View>
        <View style={styles.tagscontainer}>
          {item.tags.map((item) => {
            return (
              <View style={styles.tags} key={item.id}>
                <Text
                  style={{ color: "white", fontSize: 12, fontWeight: "600" }}
                >
                  {item.name}
                </Text>
              </View>
            );
          })}
        </View>
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
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  tagscontainer: {
    borderWidth: 1,
    borderColor: "red",
    display: "flex",
    flexDirection: "row",
    width: "90%",
    height: "40%",
  },
  tags: {
    backgroundColor: "lightgray",
    padding: 2,
    paddingHorizontal: 3,
    borderRadius: 5,
    marginRight: 5,
  },
  title: {
    borderWidth: 1,
    borderColor: "green",
    width: "90%",
    height: "60%",
  },
});
