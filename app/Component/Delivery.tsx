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
import { Address } from "../client/types/requests/paymentRequests";
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
          <Text style={{ color: COLORSS.purpal }}>Add More</Text>
        </TouchableOpacity>
        <View></View>
      </View>
      {empty ? (
        <>
          <View style={styles.addresscontainer}>
            <FlatList data={listaddress} renderItem={AddressItem} />
          </View>
        </>
      ) : (
        <View>
          <Text>azdzdzzdzzdzzdzd</Text>
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

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addresscontainer: {
    width: "100%",
    height: "85%",
  },
});

const listaddress: Address[] = [
  {
    id: 1,
    address: "Haricha ammar cite 506 BT 31 N 403",
    city: "Ain Smara",
    state: "constantine",
    name: "Benmohammed aymen",
    phone: "0559679320",
  },
];
