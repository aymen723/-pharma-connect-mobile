import AsyncStorage from "@react-native-async-storage/async-storage";

// export const eraseLocalAuthState = () => {
//   AsyncStorage.removeItem("authData");
//   AsyncStorage.removeItem("app-access-token");
// };

export const getLocalAccessToken = () => {
  return AsyncStorage.getItem("token");
};
