import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Gstyles } from "../constants/theme";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";

export default function CartHeader({ title }: { title: string }) {
  return (
    <View style={[Gstyles.headerContainer, styles.center]}>
      <TouchableOpacity
        style={{ width: "20%", justifyContent: "center", alignItems: "center" }}
        onPress={() => {
          router.back();
        }}
      >
        <ArrowLeft color={"black"} size={30} />
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
