import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Gstyles } from "../constants/theme";
import SearchHeader from "../Component/SearchHeader";
import MapView from "react-native-maps";

export default function Map() {
  return (
    <View style={Gstyles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
