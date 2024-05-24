import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import * as browser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import React, { useEffect, useState } from "react";
import { COLORSS, Gstyles, SHADOWS } from "../constants/theme";
import icon from "../../../assets/Images/image1.png";
import GoogleI from "../../../assets/Images/GoogleI.png";
import { router } from "expo-router";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";

browser.maybeCompleteAuthSession();

export default function Signin() {
  const [token, settoken] = useState<string | undefined>();

  const [user, setuser] = useState(null);

  const [userinfo, setuserinfo] = useState();

  const [request, response, promptasync] = Google.useAuthRequest({
    clientId: process.env.CLIENT_ID_WEB,
    androidClientId: process.env.CLIENT_ID_ANDROID,
  });

  // GoogleSignin.configure({
  //   webClientId: process.env.OUSSAMA_Client_ID,
  // });

  const [State, setState] = useState();

  useEffect(() => {
    console.log(response?.type);

    // console.log(response.authentication.accessToken);
  }, [response, token]);

  // useEffect(() => {
  //   if (response?.type === "success") {
  //     settoken(response.authentication?.accessToken);
  //     token && GetUser();
  //   }
  // }, [response, token]);

  // async function GetUser(token) {
  //   if (!token) return;
  //   try {
  //     const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //       headers: {
  //         Authorization: "Bearer" + token,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // const user = res.json();
  //   // setuser(user);
  // }

  return (
    <View style={[Gstyles.container, { backgroundColor: "white" }]}>
      <StatusBar backgroundColor={COLORSS.Green}></StatusBar>
      <View style={Styles.SigninContainer}>
        <Image style={Styles.Pic} source={icon}></Image>
        <Text style={Styles.Title}>Pharma Connect</Text>
      </View>
      <View style={Styles.FooterContainer}>
        <View style={Styles.FooterContent}>
          <View style={Styles.SinginButtons}>
            <View
              style={{
                width: "100%",
                height: 90,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                // borderWidth: 1,
                // borderColor: "black",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Welcome to{" "}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: COLORSS.Green,
                }}
              >
                PharmaConnect
              </Text>
            </View>
            <View style={{ height: 30 }}>
              <Text style={{ color: "gray" }}>Sing In with with google</Text>
            </View>
            <TouchableOpacity
              style={Styles.Button}
              onPress={() => {
                promptasync({ showInRecents: true });
              }}
            >
              <Image
                style={{ width: 60, height: 60, resizeMode: "center" }}
                source={GoogleI}
              ></Image>
            </TouchableOpacity>
            <View
              style={{
                height: 35,
                justifyContent: "center",
              }}
            >
              <Button
                title="home"
                onPress={() => {
                  router.replace("/src/tabs");
                }}
              ></Button>
              <Text style={{ fontSize: 10 }}>
                By registration you agree to Terms of use and Privacy Police
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  SigninContainer: {
    flex: 0.7,
    backgroundColor: COLORSS.Green,
    justifyContent: "center",
    alignItems: "center",
  },
  FooterContainer: {
    flex: 0.3,
    backgroundColor: COLORSS.Green,
    borderWidth: 1,
    borderColor: "red",
  },
  FooterContent: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    flex: 1,
    backgroundColor: "white",
  },
  Pic: {
    width: 200,
    height: 200,
  },
  Title: {
    fontSize: 30,
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
    letterSpacing: 2,
    paddingVertical: 20,
  },
  SinginButtons: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  Button: {
    borderWidth: 1,
    borderColor: "lightgray",
    width: 70,
    height: 70,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
