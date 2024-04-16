import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import React from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function ProductDescription() {
  const { item } = useLocalSearchParams<{ item: string }>();

  function test() {
    console.log(item);
  }
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>

      <ScrollView>
        <View>
          <Text>Test</Text>
        </View>
        <View>
          <Image></Image>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
