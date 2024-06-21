import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  PharmacyUptime,
  UptimeRespData,
} from "../client/types/responses/StockResponses";

export default function Uptime({ item }: { item: UptimeRespData }) {
  return (
    <View style={styles.Viewuptime} key={item.id}>
      <View>
        <Text>{item.day}</Text>
      </View>
      <View>
        <Text>{item.openTime}</Text>
      </View>
      <View>
        <Text>{item.closeTime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Viewuptime: {
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
    flexDirection: "row",
    height: 40,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
