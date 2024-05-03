import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { TagRespData } from "../client/types/responses/StockResponses";

export default function Tag({ item }: { item: TagRespData }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.TagText}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  TagText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
