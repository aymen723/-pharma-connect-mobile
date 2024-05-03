import { Dimensions, StyleSheet } from "react-native";
export const deviceWidth = Dimensions.get("window").width;

const COLORSS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",
  maingray: "#E6E4E6",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  Green: "#15BD92",
  lightgreen: "#95d5b2",
  textcolor: "#090F47",
  purpal: "#4157FF",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export const Gstyles = StyleSheet.create({
  Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
  },
  Buttontitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  searchinput: {
    width: "70%",
    height: 45,
    backgroundColor: "ghostwhite",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: COLORSS.maingray,
  },
  whitecontainer: {
    flex: 1,
    backgroundColor: "white",
  },
  whitecontainercenter: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginbutton: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: COLORSS.Green,
  },
  headerContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORSS.maingray,
    // borderWidth: 1,
    // borderColor: "black",
    flexDirection: "row",
  },
  Mapheader: {
    height: 60,
    backgroundColor: COLORSS.maingray,
    opacity: 0.7,

    zIndex: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  BigButton: {
    width: "80%",
    height: 45,
    backgroundColor: COLORSS.purpal,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  BigButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { COLORSS, FONT, SIZES, SHADOWS };
