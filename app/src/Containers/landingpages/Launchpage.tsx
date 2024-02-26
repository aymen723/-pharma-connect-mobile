import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
export default function Launchpage() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red"></StatusBar>
      <Image source={require("../../../../assets/dynamiclayers.png")} />
      <Button title="azd"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",

    flex: 1,
    backgroundColor: "#7E49FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
