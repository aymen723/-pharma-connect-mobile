import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { UserType } from "../client/types/responses/Client";

export default function Account() {
  const [User, setUser] = useState<UserType | undefined>();

  const getCurrentUser = async () => {
    const currentUser = GoogleSignin.getCurrentUser().then((res) => {
      console.log("here is the user ", res);
      setUser(res?.user);
    });
  };

  const signOut = async () => {
    AsyncStorage.removeItem("@User").then((res) => {
      GoogleSignin.signOut();
      router.replace("/(auth)/Signin");
    });
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <View style={Gstyles.container}>
      <StatusBar backgroundColor={COLORSS.maingray}></StatusBar>
      {User ? (
        <View style={styles.profileitem}>
          <View style={styles.profilesection1}>
            <Image
              source={{
                uri: User.photo,
              }}
              style={styles.profilepic}
            ></Image>
          </View>
          <View style={styles.profilesection2}>
            <Text style={{ fontSize: 23, fontWeight: "bold" }}>
              Hi, {User.name}
            </Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              welcome to PharmaConnect
            </Text>
          </View>
        </View>
      ) : (
        <ActivityIndicator
          size={"small"}
          color={COLORSS.Green}
        ></ActivityIndicator>
      )}
      <View style={styles.itemcontainer}>
        {/* <TouchableOpacity
          style={styles.items}
          onPress={() => {
            router.push("/Screens/Editprofile");
          }}
        >
          <View style={styles.itemicon}>
            <AntDesign name="menuunfold" size={24} color="black" />
          </View>
          <View style={styles.itemcontent}>
            <Text>Edit Profile</Text>
            <Entypo name="chevron-right" size={24} color={COLORSS.Green} />
          </View>
        </TouchableOpacity> */}
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
        <TouchableOpacity onPress={signOut} style={styles.items}>
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
    resizeMode: "contain",
    borderColor: COLORSS.Green,
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
