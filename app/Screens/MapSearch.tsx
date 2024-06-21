import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { PharmacyRespData } from "../client/types/responses/StockResponses";
import Entypo from "@expo/vector-icons/Entypo";
import { Feather } from "@expo/vector-icons";
import { fetchPharmaciesByFilter } from "../client/api/stockService/pharmacyApi";
import { Page } from "../client/types/responses";
import { LocationObject } from "expo-location";
import * as Location from "expo-location";
import { COLORSS, Gstyles, SHADOWS } from "../constants/theme";
import BottomSheetMapSearch from "../Component/BottomSheetMapSearch";
import { useCartStore } from "../zustand/store";
import Modal from "react-native-modal";
import { withDecay } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import { fetchPharmacyUptime } from "../client/api/stockService/productApi";
export default function MapSearch() {
  const params = useLocalSearchParams();
  const { ProductID } = params;
  const [Pharmcaies, SetPharmacies] = useState<
    Page<PharmacyRespData> | undefined
  >();
  const [Pharmacy, setPharmacy] = useState<PharmacyRespData | undefined>();
  const [loc, setLocation] = useState<LocationObject | undefined>();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [region, setregion] = useState<Region | undefined>();
  const { cart, deleteitem } = useCartStore();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  async function GetLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    console.log(location);
    console.log(location.coords.altitude);
    console.log(location.coords.longitude);
    setLocation(location);
  }

  function Regionchange(e: Region) {
    setregion(e);
  }

  function HundelPharmcay(item: PharmacyRespData) {
    // console.log(item);
    setPharmacy(item);
  }
  useEffect(() => {
    GetLocation();
    console.log("location fetched here ", loc);
    if (cart.length > 0) {
      console.log(cart.map((item) => item.product.id));
      fetchPharmaciesByFilter({
        products: cart.map((item) => item.product.id),
        x: loc?.coords.longitude,
        y: loc?.coords.latitude,
      })
        .then((res) => {
          console.log("here in fetch", res.data);
          SetPharmacies(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetchPharmaciesByFilter({
        products: ProductID,
        x: loc?.coords.longitude,
        y: loc?.coords.latitude,
      })
        .then((res) => {
          console.log("here in fetch", res.data);
          SetPharmacies(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [cart, ProductID]);

  return (
    <View style={styles.container}>
      <>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={styles.backButton}
        >
          <Entypo name="chevron-left" size={24} color={COLORSS.Green} />
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            // router.back();
            setModalVisible(true);
          }}
          style={styles.cartbutton}
        >
          <Text
            style={{ color: COLORSS.Green, fontSize: 16, fontWeight: "800" }}
          >
            {cart.length}
          </Text>
        </TouchableOpacity> */}
      </>
      {loc ? (
        <MapView
          initialRegion={{
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          region={region}
          onRegionChangeComplete={(e) => {
            Regionchange(e);
            // console.log(e);
          }}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          showsMyLocationButton
          showsBuildings
          mapType={"standard"}
        >
          {Pharmcaies
            ? Pharmcaies.content.map((item: PharmacyRespData) => {
                return (
                  <Marker
                    coordinate={{
                      latitude: item.location.coordinates.y,
                      longitude: item.location.coordinates.x,
                    }}
                    key={item.id}
                    onPress={() => {
                      HundelPharmcay(item);
                    }}
                    title={item.name}
                    icon={require("../../assets/Images/download.png")}
                  ></Marker>
                );
              })
            : null}
        </MapView>
      ) : (
        <View
          style={[
            Gstyles.container,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <ActivityIndicator color="green" size={"large"}></ActivityIndicator>
        </View>
      )}

      <BottomSheetMapSearch pharmacy={Pharmacy} />
      {/* <Modal
        backdropOpacity={0.4}
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
      >
        <View
          style={{ height: "50%", backgroundColor: "white", borderRadius: 10 }}
        >
          <ScrollView>
            {cart.map((item) => {
              return (
                <View style={styles.productitem} key={item.product.id}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "80%",
                    }}
                  >
                    <View
                      style={{
                        height: "90%",
                        width: "25%",
                        borderRadius: 20,
                      }}
                    >
                      <Image
                        style={{
                          height: "100%",
                          width: "100%",
                          resizeMode: "contain",
                        }}
                        source={{ uri: item.product.picture }}
                      ></Image>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "600",
                          marginLeft: 10,
                        }}
                      >
                        {item.product.name}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      deleteitem(item);
                    }}
                  >
                    <MaterialIcons
                      name="delete-outline"
                      size={20}
                      color={COLORSS.Green}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.modalbuttons}>
            <View style={{ width: "40%" }}></View>
            <TouchableOpacity
              style={styles.tobutton}
              onPress={() => {
                router.push("/Screens/Cart");
                setModalVisible(!isModalVisible);
              }}
            >
              <Feather name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    height: 50,
    width: 50,
    top: 10,
    left: 20,
    borderRadius: 50,
    backgroundColor: "white",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.small,
  },
  cartbutton: {
    position: "absolute",
    height: 50,
    width: 50,
    top: 80,
    left: 20,
    borderRadius: 50,
    backgroundColor: "white",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.small,
  },
  menuButton: {
    position: "absolute",
    bottom: 70,
    right: 30,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    ...SHADOWS.small,
  },
  searchheader: {
    position: "absolute",
    top: 10,
    left: 70,
    width: 260,
    height: 50,
    backgroundColor: "white",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
    borderRadius: 20,
    ...SHADOWS.small,
  },
  headerInput: {
    width: "75%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "ghostwhite",
  },
  productitem: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  modalbuttons: {
    height: "20%",

    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  tobutton: {
    backgroundColor: COLORSS.Green,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 5,
  },
});
