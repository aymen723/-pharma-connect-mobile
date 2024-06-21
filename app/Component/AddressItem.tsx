import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORSS, SHADOWS } from "../constants/theme";
import { Address } from "../client/types/requests/paymentRequests";

export default function AddressItem({ item }: { item: Address }) {
  return (
    <View style={styles.addressitems}>
      <View>
        <View style={styles.itemtext}>
          <Text>Name :</Text>
          <Text> {item.name}</Text>
        </View>
        <View style={styles.itemtext}>
          <Text>Address :</Text>
          <Text> {item.address}</Text>
        </View>
        <View style={styles.itemtext}>
          <Text>City :</Text>
          <Text> {item.city}</Text>
        </View>
      </View>
      <View>
        <View style={styles.itemtext}>
          <Text>State :</Text>
          <Text> {item.state}</Text>
        </View>
        <View style={styles.itemtext}>
          <Text>Phone :</Text>
          <Text> {item.phone}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addressitems: {
    borderRadius: 5,
    marginBottom: 10,
    height: 170,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "red",
    ...SHADOWS.small,
  },
  itemtext: {
    width: "50%",
    height: 50,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",
  },
});
