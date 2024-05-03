import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import { Settings2 } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";

export default function MapHeader({ onModalToggle, statechnage }) {
  const [Search, SetSearch] = useState<string | undefined>();

  const handleChange = (e) => {
    SetSearch(e);
    statechnage(e);
  };
  return (
    <View style={Gstyles.Mapheader}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>

      <TextInput
        value={Search}
        onChangeText={(e) => {
          handleChange(e);
        }}
        style={[Gstyles.searchinput, { backgroundColor: "white" }]}
      ></TextInput>
      <TouchableOpacity style={styles.IconBox} onPress={onModalToggle}>
        <Settings2 size={20} color={"black"}></Settings2>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  IconBox: {
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
});
