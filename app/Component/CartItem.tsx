import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORSS } from "../constants/theme";
import { ProductRespData } from "../client/types/responses/StockResponses";
import { useCartStore } from "../zustand/store";
export default function CartItem({ item }: { item: ProductRespData }) {
  return (
    <View style={styles.itemcontainer}>
      <View style={styles.picontainer}>
        <Image style={styles.itempic} source={{ uri: item.picture }}></Image>
      </View>
      <View style={styles.infoitem}>
        <View style={styles.itemtitle}>
          <View style={styles.titlesection}>
            <Text style={styles.infotext}>{item.name}</Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderWidth: 1,
            }}
          >
            <AntDesign
              name="closecircleo"
              color={"rgba(0,0,0,0.25)"}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.itemtitle, { height: "40%" }]}>
          <View style={[styles.titlesection, { width: "50%" }]}>
            <Text style={[styles.infotext, { fontSize: 16 }]}>
              DA {item.price}
            </Text>
          </View>
          <View>
            <Text>++</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemcontainer: {
    width: "95%",
    height: 100,
    flexDirection: "row",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  itempic: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "stretch",
  },
  picontainer: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  infoitem: {
    width: "70%",
    height: "100%",
    borderWidth: 1,
    borderColor: "green",
  },
  itemtitle: {
    width: "100%",
    height: "60%",
    // borderWidth: 1,
    // borderColor: "black",
    flexDirection: "row",
  },
  titlesection: {
    width: "90%",
    height: "100%",
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  infotext: {
    color: COLORSS.textcolor,
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 18,
  },
});
