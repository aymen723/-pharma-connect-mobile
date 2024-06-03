import React, { useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { ProductRespData } from "../client/types/responses/StockResponses";
import { fetchPharmaciesByFilter } from "../client/api/stockService/pharmacyApi";
import { fetchProductById } from "../client/api/stockService/productApi";
export default function MapSearch() {
  const params = useLocalSearchParams();
  const { id, name, description, price, barcode, tags, picture, para } = params;
  useEffect(() => {
    const product = params as unknown as ProductRespData;

    console.log("test zzdzdz ", product);
    // fetchProductById(product.id).then((res) => {
    //   console.log("here is res", res);
    // });
    fetchPharmaciesByFilter({ product })
      .then((res) => {
        console.log("here in fetch", res.data.numberOfElements);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
