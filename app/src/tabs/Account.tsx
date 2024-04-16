import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import {
  ListOrdered,
  FilePenLine,
  Bolt,
  ChevronRight,
} from "lucide-react-native";

export default function Account() {
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
            <FilePenLine color={COLORSS.lightgreen} size={30} />
          </View>
          <View style={styles.itemcontent}>
            <Text>Edit Profile</Text>
            <ChevronRight color={"black"} size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <View style={styles.itemicon}>
            <ListOrdered color={COLORSS.lightgreen} size={30} />
          </View>
          <View style={styles.itemcontent}>
            <Text>My orders</Text>
            <ChevronRight color={"black"} size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <View style={styles.itemicon}>
            <Bolt color={COLORSS.lightgreen} size={30} />
          </View>
          <View style={styles.itemcontent}>
            <Text>Settings</Text>
            <ChevronRight color={"black"} size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <View style={styles.itemicon}>
            <Bolt color={COLORSS.lightgreen} size={30} />
          </View>
          <View style={styles.itemcontent}>
            <Text>Billing</Text>
            <ChevronRight color={"black"} size={30} />
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
