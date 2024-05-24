import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

import { router } from "expo-router";

export default function Account() {
  function Logout() {
    console.log("here");
    router.replace("src/(auth)/Signin");
  }
  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>
      <View style={styles.profileitem}>
        <View style={styles.profilesection1}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&usqp=CAU",
            }}
            style={styles.profilepic}
          ></Image>
        </View>
        <View style={styles.profilesection2}>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>Hi, Aymen</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>
            welcome to PharmaConnect
          </Text>
        </View>
      </View>
      <View style={styles.itemcontainer}>
        <TouchableOpacity style={styles.items}>
          <View style={styles.itemicon}>
            <AntDesign name="menuunfold" size={24} color="black" />
          </View>
          <View style={styles.itemcontent}>
            <Text>Edit Profile</Text>
            <Entypo name="chevron-right" size={24} color={COLORSS.Green} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <View style={styles.itemicon}>
            <MaterialIcons name="payment" size={24} color="black" />
          </View>
          <View style={styles.itemcontent}>
            <Text>My orders</Text>
            <Entypo name="chevron-right" size={24} color={COLORSS.Green} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <View style={styles.itemicon}>
            <AntDesign name="setting" size={24} color="black" />
          </View>
          <View style={styles.itemcontent}>
            <Text>Settings</Text>
            <Entypo name="chevron-right" size={24} color={COLORSS.Green} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <View style={styles.itemicon}>
            {/* <Bolt color={COLORSS.lightgreen} size={30} /> */}
          </View>
          <View style={styles.itemcontent}>
            <Text>Billing</Text>
            <Entypo name="chevron-right" size={24} color={COLORSS.Green} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Logout} style={styles.items}>
          <View style={styles.itemicon}>
            <AntDesign name="logout" size={24} color="black" />
          </View>
          <View style={styles.itemcontent}>
            <Text>Sign Out</Text>
            <Entypo name="chevron-right" size={24} color={COLORSS.Green} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileitem: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
  },
  profilepic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "green",
  },
  profilesection2: {
    width: "70%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  profilesection1: {
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  itemcontainer: {
    // borderWidth: 1,
    // borderColor: "red",
    height: "50%",
    alignItems: "center",
  },
  items: {
    width: "100%",
    height: 60,
    justifyContent: "space-evenly",
    alignItems: "center",

    flexDirection: "row",
  },
  itemicon: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemcontent: {
    width: "70%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "lightgray",
    borderBottomWidth: 0.75,
  },
});
