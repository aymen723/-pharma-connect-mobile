import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  VirtualizedList,
  FlatList,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  AvailableStockRespData,
  PharmacyRespData,
} from "../client/types/responses/StockResponses";
import { fetchPharmacyById } from "../client/api/stockService/pharmacyApi";
import { COLORSS, SHADOWS } from "../constants/theme";
import { fetchStockFromPharmacy } from "../client/api/stockService/stockApi";
import { Page } from "../client/types/responses";
import { fetchPharmacyUptime } from "../client/api/stockService/productApi";
import Productcard from "./Productcard";
import { TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function BottomSheetMapSearch({
  pharmacy,
}: {
  pharmacy: PharmacyRespData | undefined;
}) {
  const [pharma, setPharmacy] = useState<PharmacyRespData | undefined>();
  const [Stock, setStock] = useState<
    Page<AvailableStockRespData> | undefined
  >();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snappoints = useMemo(() => ["5%", "50%", "90%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  function fetchpharmacy() {
    if (pharmacy) {
      fetchPharmacyById(pharmacy.id).then((res) => {
        console.log(res.data);
        setPharmacy(res.data);
      });
      fetchPharmacyUptime(pharmacy.id).then((res) => {
        console.log(res.data);
      });
    }
  }
  function fetchstock() {
    if (pharmacy) {
      fetchStockFromPharmacy(pharmacy?.id).then((res) => {
        console.log(res.data.content);
        setStock(res.data);
      });
    }
  }
  useEffect(() => {
    fetchpharmacy();
    fetchstock();
    // handleClosePress()
  }, [pharmacy]);

  const getItem = (data: AvailableStockRespData[], index: number) =>
    data[index];

  const getItemCount = (data: AvailableStockRespData[]) => data.length;
  return (
    <BottomSheet
      snapPoints={snappoints}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
    >
      <BottomSheetScrollView
        // horizontal
        style={styles.contentContainer}
      >
        <View>
          {pharma ? (
            <>
              <Image
                style={styles.Pharmacypicture}
                source={{ uri: pharma?.picture }}
              ></Image>

              <View style={styles.pharmacyIcon}>
                <FontAwesome6 name="hospital" size={30} color="black" />
              </View>
            </>
          ) : (
            <View
              style={{
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator
                color={COLORSS.Green}
                size={"small"}
              ></ActivityIndicator>
            </View>
          )}
        </View>
        <View style={styles.PharmacyView}>
          <View style={styles.pharmaContent}>
            <Text style={styles.BigTitle}>{pharma?.name}</Text>

            <Text style={styles.Smalltext}>Phone : {pharma?.phoneNumber}</Text>
            <Text style={styles.Smalltext}>
              Support e-Payment :{pharma?.supportPayment}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.productstitle}> les Produites </Text>
        </View>
        {Stock ? (
          <FlatList
            style={{ backgroundColor: COLORSS.white }}
            contentContainerStyle={{ width: "100%" }}
            data={Stock?.content}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            numColumns={2}
            columnWrapperStyle={styles.row}
            keyExtractor={(item) => item.product.id.toString()}
            renderItem={({ item }) => <Productcard item={item.product} />} // pagingEnabled={true}
          />
        ) : null}
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: COLORSS.white,
    // alignItems: "center",
  },
  PharmacyView: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "flex-start",
    // borderWidth: 10,
    // borderColor: "red",
    padding: 10,
  },

  pharmacyIcon: {
    height: 100,
    width: 100,
    backgroundColor: "white",
    borderRadius: 70,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 110,
    left: 40,
    ...SHADOWS.small,
  },
  Pharmacypicture: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },

  BigTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  Smalltext: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
  },
  pharmaContent: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    height: "100%",
    width: "95%",
    // borderWidth: 2,
    // borderColor: "green",
  },
  row: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: 5,
    paddingBottom: 5,
  },
  productstitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    marginLeft: 20,
  },
});
