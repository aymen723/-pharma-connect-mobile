import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Address } from "../Models/models";
import { COLORSS } from "../constants/theme";

export default function AddressItem({ item }: { item: Address }) {
  return (
    <View style={styles.addressitems}>
      <View>
        <Text>{item.address}</Text>
        <Text>{item.city}</Text>
        <Text>{item.state}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addressitems: {
    borderColor: COLORSS.textcolor,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    height: 100,
    width: "100%",
  },
});
