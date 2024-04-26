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
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { product } from "../Models/models";

export default function ProductDescription() {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useLocalSearchParams();
  // const imagePath = require(params.image);

  return (
    <ScrollView style={styles.Scroll}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>
      <View style={styles.ProductImage}>
        <Image></Image>
      </View>
      <View style={styles.ProductDescription}>
        <Text>Descritop</Text>
      </View>
      <View style={styles.ProductContent}>
        <Text>Descritop</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ProductImage: {
    width: "100%",
    height: 250,
    borderWidth: 1,
    borderColor: "red",
  },
  ProductDescription: {
    width: "100%",
    height: 400,
    borderWidth: 1,
    borderColor: "black",
  },
  ProductContent: {},
  Scroll: {
    borderWidth: 10,
    borderColor: "green",
  },
});
