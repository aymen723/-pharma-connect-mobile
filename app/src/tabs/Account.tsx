import { View, Text } from "react-native";
import React from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";

export default function Account() {
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>
      <View>
        <Text>Test</Text>
      </View>
    </View>
  );
}
