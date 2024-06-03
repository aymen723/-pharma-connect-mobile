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
import CartItem from "../Component/CartItem";
import CartPayment from "../Component/CartPayment";
import { router } from "expo-router";
import { ProductRespData } from "../client/types/responses/StockResponses";
import { useCartStore } from "../zustand/store";

export default function Cart() {
  const [NotEmpty, setNotEmpty] = useState(true);
  const { cart, deleteitem } = useCartStore();

  const renderitem = ({ item }: { item: ProductRespData }) => {
    return <CartItem item={item} key={item.id} />;
  };

  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>

      {NotEmpty ? (
        <>
          <View style={Styles.ContainerList}>
            <View style={Styles.additem}>
              <Text style={{ color: "rgba(9, 15, 71, 0.45)" }}>
                {cart.length} Items in your cart
              </Text>
              <TouchableOpacity
                onPress={() => {
                  // router.back();
                }}
                style={{ flexDirection: "row" }}
              >
                {/* <Plus color={COLORSS.purpal} size={20} /> */}
                <Text style={{ color: COLORSS.purpal }}>Add More</Text>
              </TouchableOpacity>
            </View>
            <Text>zdzdz</Text>
            <FlatList
              data={cart}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              overScrollMode="never"
              renderItem={renderitem}
            />
          </View>
          <CartPayment></CartPayment>
        </>
      ) : (
        <View style={Styles.ContainerList}>
          <View style={Styles.additem}>
            <Text style={{ color: "rgba(9, 15, 71, 0.45)" }}>
              Items in your cart
            </Text>
            <TouchableOpacity
              onPress={() => {
                // router.back();
              }}
              style={{ flexDirection: "row" }}
            >
              {/* <Plus color={COLORSS.purpal} size={20} /> */}
              <Text style={{ color: COLORSS.purpal }}>Add More</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.emptybox}>
            <Text style={{ color: "gray" }}>No Item in the Cart</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const Styles = StyleSheet.create({
  ContainerList: {
    height: "60%",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  additem: {
    width: "90%",
    height: 30,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emptybox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
