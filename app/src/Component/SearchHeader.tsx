import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";
export default function SearchHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={styles.backbutton}
      >
        <ArrowLeft color={"black"} size={30} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search ..."
        style={styles.Searchinput}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    borderBottomColor: "lightgray",
    borderBottomWidth: 0.7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  Searchinput: {
    width: "85%",
    height: "100%",
    fontSize: 18,
  },
  backbutton: {
    width: "15%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
