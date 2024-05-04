import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import React from "react";
import { COLORSS } from "../constants/theme";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ProductRespData } from "../client/types/responses/StockResponses";
import { decrement, increment } from "../Redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

export default function ProductDescription() {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <ScrollView style={styles.Scroll}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>
      <View style={styles.ProductImage}>
        <Button
          title="add to cart"
          onPress={() => {
            hundelcart();
          }}
        ></Button>
        <Image></Image>
      </View>
      <View style={styles.ProductDescription}>
        <Text>{params.name}</Text>
      </View>
      <View style={styles.ProductContent}>
        <Text style={{ fontSize: 12 }}>{params.description}</Text>
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
