import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as browser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import React, { useEffect, useState } from "react";
import { COLORSS, Gstyles, SHADOWS } from "../constants/theme";
import icon from "../../../assets/Images/image1.png";
import GoogleI from "../../../assets/Images/GoogleI.png";
import { router } from "expo-router";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

browser.maybeCompleteAuthSession();

GoogleSignin.configure({
  webClientId: process.env.OUSSAMA_Client_ID, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  androidClientId: process.env.CLIENT_ID_ANDROID,
});

export default function Signin() {
  const [token, settoken] = useState<string | undefined>();

  const [user, setuser] = useState(null);

  const [userinfo, setuserinfo] = useState();

  const [request, response, promptasync] = Google.useAuthRequest({
    clientId: process.env.OUSSAMA_Client_ID,
    androidClientId: process.env.CLIENT_ID_ANDROID,
  });

  const [State, setState] = useState();

  // useEffect(() => {
  //   if (response?.type === "success") {
  //     settoken(response.authentication?.accessToken);
  //     token && GetUser();
  //   }
  // }, [response, token]);

  // async function GetUser() {
  //   const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //     headers: {
  //       Authorization: "Bearer" + token,
  //     },
  //   });

  //   const user = res.json();
  //   setuser(user);
  // }

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn().then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
      // if (isErrorWithCode(error)) {
      //   switch (error.code) {
      //     case statusCodes.SIGN_IN_CANCELLED:
      //       // user cancelled the login flow
      //       break;
      //     case statusCodes.IN_PROGRESS:
      //       // operation (eg. sign in) already in progress
      //       break;
      //     case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
      //       // play services not available or outdated
      //       break;
      //     default:
      //     // some other error happened
      //   }
      // } else {
      //   // an error that's not related to google sign in occurred
      // }
    }
  };
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
            <TouchableOpacity
              style={Styles.Button}
              onPress={() => {
                _signIn();
              }}
            >
              <Image
                style={{ width: 60, height: 60, resizeMode: "center" }}
                source={GoogleI}
              ></Image>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  SigninContainer: {
    flex: 0.5,
    backgroundColor: COLORSS.Green,
    justifyContent: "center",
    alignItems: "center",
  },
  FooterContainer: {
    flex: 0.5,
    backgroundColor: COLORSS.Green,
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
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
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
