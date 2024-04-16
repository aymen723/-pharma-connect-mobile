import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import Delivery from "../Component/Delivery";

export default function Checkout() {
  return (
    <View style={Gstyles.container}>
      <View
        style={{
          width: "95%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.orderinfo}>
          <Text style={{ color: "rgba(9, 15, 71, 0.45)" }}>
            Items in your cart
          </Text>
          <View style={styles.ordertotalprice}>
            <Text style={{ color: "rgba(9, 15, 71, 0.45)", fontSize: 14 }}>
              Total
            </Text>
            <Text style={{ fontSize: 16, color: COLORSS.textcolor }}>
              DA 23223
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.orderaddress}>
        <Delivery></Delivery>
      </View>
      <View style={styles.checkoutcontainer}>
        <Text>Payment method</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderinfo: {
    borderWidth: 1,
    borderColor: "red",
    width: "90%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  ordertotalprice: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  orderaddress: {
    width: "100%",
    height: "50%",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutcontainer: {
    width: "100%",
    height: "43%",
    borderWidth: 1,
    borderColor: "black",
  },
});
