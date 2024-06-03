import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORSS } from "../constants/theme";
import AddressItem from "./AddressItem";
import type { Address } from "../Models/models";
// import { Plus } from "lucide-react-native";
export default function Delivery() {
  const [empty, setempty] = useState(true);
  return (
    <View style={styles.deliverycontainer}>
      <View style={styles.titlecontainer}>
        <Text
          style={{ fontSize: 18, fontWeight: "bold", color: COLORSS.textcolor }}
        >
          Delivery Address
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log("new address");
          }}
          style={{ flexDirection: "row" }}
        >
          {/* <Plus color={COLORSS.purpal} size={20} /> */}
          <Text style={{ color: COLORSS.purpal }}>Add More</Text>
        </TouchableOpacity>
      </View>
      {empty ? (
        <>
          <View style={styles.addresscontainer}>
            <FlatList data={listaddress} renderItem={AddressItem} />
          </View>
        </>
      ) : (
        <View>
          <Text>azdazddd</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  deliverycontainer: {
    width: "90%",
    height: "100%",
  },
  titlecontainer: {
    width: "100%",
    height: "15%",
    borderColor: "red",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addresscontainer: {
    width: "100%",
    height: "85%",
    borderWidth: 1,
    borderColor: "red",
  },
});

const listaddress: Address[] = [
  {
    id: 1,
    address: "address1",
    city: "ain smara",
    state: "constantine",
    name: "home",
  },
  {
    id: 2,
    address: "address1",
    city: "ain smara",
    state: "constantine",
    name: "home",
  },
  {
    id: 3,
    address: "address1",
    city: "ain smara",
    state: "constantine",
    name: "home",
  },
  {
    id: 4,
    address: "address1",
    city: "ain smara",
    state: "constantine",
    name: "home",
  },
];
