import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Gstyles } from "../constants/theme";
import { useLocalSearchParams } from "expo-router";
import { fetchOrderById } from "../client/api/stockService/orderApi";
import { OrderRespData } from "../client/types/responses/StockResponses";
import QRCode from "react-native-qrcode-svg";
export default function Orderdetails() {
  const { id } = useLocalSearchParams();
  const [Orderdetail, setOrderdetail] = useState<OrderRespData | undefined>();
  function fetchorder() {
    if (id) {
      const order: number = id as number;
      fetchOrderById(order)
        .then((res) => {
          console.log(res);
          setOrderdetail(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    fetchorder();
  }, []);
  return (
    <View style={Gstyles.container}>
      <View>
        <QRCode value="http://awesome.link.qr" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
