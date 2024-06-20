import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import { getLocalAccessToken } from "@/Hooks/token";
import { fetchBookmarks } from "../client/api/stockService/bookmarkApi";
import { fetchOrdres } from "../client/api/stockService/orderApi";
import { fetchAccountProfile } from "../client/api/authService/accountApi";

export default function Orders() {
  async function name() {
    console.log("aqwdi hana", await getLocalAccessToken());
  }
  useEffect(() => {
    // fetchBookmarks()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    fetchAccountProfile(10).then((res) => {
      console.log("here is the user", res);
    });
    // fetchOrdres()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <View style={Gstyles.container}>
      <>
        <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>
      </>
    </View>
  );
}

const styles = StyleSheet.create({});
