import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import { product } from "../Models/models";
import { List } from "../tabs/Home";
import CartItem from "../Component/CartItem";
import CartPayment from "../Component/CartPayment";
import { Plus } from "lucide-react-native";
export default function Cart() {
  const [empty, setempty] = useState(true);
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>

      {empty ? (
        <>
          <View style={Styles.ContainerList}>
            <View style={Styles.additem}>
              <Text>Items in your cart</Text>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Plus color={COLORSS.purpal} size={20} />
                <Text style={{ color: COLORSS.purpal }}>Add More</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={List}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              overScrollMode="never"
              renderItem={CartItem}
            />
          </View>
          <CartPayment></CartPayment>
        </>
      ) : (
        <View style={Gstyles.container}>
          <Text>azda</Text>
        </View>
      )}
    </View>
  );
}

const Styles = StyleSheet.create({
  ContainerList: {
    // borderWidth: 1,
    // borderColor: "black",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  additem: {
    width: "90%",
    height: 30,
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
