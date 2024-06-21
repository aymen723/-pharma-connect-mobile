import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import { getLocalAccessToken } from "@/Hooks/token";
import { fetchBookmarks } from "../client/api/stockService/bookmarkApi";
import { fetchOrdres } from "../client/api/stockService/orderApi";
import { fetchAccountProfile } from "../client/api/authService/accountApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OrderRespData } from "../client/types/responses/StockResponses";
import { Page } from "../client/types/responses";

export default function Orders() {
  const [Orders, setOrders] = useState<Page<OrderRespData> | undefined>();
  const [User, setUser] = useState();
  async function name() {
    console.log("aqwdi hana", await getLocalAccessToken());
  }

  async function getUser() {
    const value = await AsyncStorage.getItem("@User");
    let test = JSON.parse(value as string);
    console.log("hana the test order", test.id);
    // // const test = JSON.parse(value);
    fetchAccountProfile(test.id).then((res) => {
      console.log("here is the user", res.data.username);
    });
  }
  useEffect(() => {
    getUser();

    fetchOrdres()
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const RenderItem = (item: OrderRespData) => {
    return (
      <View>
        <Text>{item.status}</Text>
      </View>
    );
  };
  return (
    <View style={Gstyles.container}>
      <>
        <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>
      </>
      <View>
        <FlatList
          data={Orders?.content}
          keyExtractor={(item) => item.id.toString()}
          renderItem={RenderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
