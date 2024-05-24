import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo } from "@expo/vector-icons";
import { COLORSS } from "../constants/theme";
export default function SearchHeader({ SearchValue, SearchInput }) {
  function hundelSearch(e) {
    SearchInput(e);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={styles.backbutton}
      >
        <Entypo name="chevron-left" size={30} color="black" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search ..."
        style={styles.Searchinput}
        value={SearchValue}
        onChangeText={hundelSearch}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          router.push("/src/Screens/MapSearch");
        }}
        style={styles.backbutton}
      >
        <AntDesign name="pluscircle" size={24} color={COLORSS.Green} />
      </TouchableOpacity>
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
    width: "70%",
    height: "100%",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "red",
  },
  backbutton: {
    width: "15%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
