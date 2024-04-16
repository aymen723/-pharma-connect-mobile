import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";

export default function Cart() {
  const [empty, setempaty] = useState<boolean | undefined>(false);
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>

      {empty ? (
        <View style={Gstyles.container}>{/* <FlatList /> */}</View>
      ) : (
        <View style={Gstyles.container}>
          <Text>null</Text>
        </View>
      )}
    </View>
  );
}
