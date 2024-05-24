import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import Delivery from "../Component/Delivery";
import { CheckBox } from "@rneui/themed";
import { useCartStore } from "../zustand/store";

export default function Checkout() {
  const [result, setResult] = useState(null);
  const { cart } = useCartStore();
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
            {cart.length} Items in your cart
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
        <View style={styles.PaymentTitle}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: COLORSS.textcolor,
            }}
          >
            Payment method
          </Text>
        </View>
        <View style={styles.methodView}>
          <View style={styles.methodcheck}>
            <Text>ECCP</Text>
            <CheckBox></CheckBox>
          </View>
          <View style={styles.methodcheck}>
            <Text>CIB</Text>
            <CheckBox></CheckBox>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 70,
            borderColor: "black",
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            // onPress={() => {
            //   router.push({
            //     pathname: "src/Screens/Checkout",
            //   });
            // }}
            style={Gstyles.BigButton}
          >
            <Text style={Gstyles.BigButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  PaymentTitle: {
    borderColor: "green",
    borderWidth: 1,
    height: 60,
    width: "90%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  methodcheck: {
    width: "90%",
    height: 60,
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "space-evenly",
  },
  methodView: {
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    height: 175,
  },
});
