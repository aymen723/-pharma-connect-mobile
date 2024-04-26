import { View, Text, TextInput } from "react-native";
import React from "react";
import { Gstyles } from "../constants/theme";

export default function MapHeader() {
  return (
    <View style={Gstyles.Mapheader}>
      <TextInput
        style={[Gstyles.searchinput, { backgroundColor: "white" }]}
      ></TextInput>
    </View>
  );
}
