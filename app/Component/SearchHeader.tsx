import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo } from "@expo/vector-icons";
import { COLORSS } from "../constants/theme";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { fetchTagsByFilter } from "../client/api/stockService/tagApi";
import { Page } from "../client/types/responses";
import { TagRespData } from "../client/types/responses/StockResponses";
import Tag from "./Tag";
import { TextInput } from "react-native-element-textinput";
import { MultiSelect } from "react-native-element-dropdown";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
export default function SearchHeader({
  SearchValue,
  SearchInput,
  TagSelected,
}: {
  SearchValue: string;
}) {
  const [Enabled, setEnabled] = useState<boolean>(false);
  const height = useSharedValue<number>(100);
  const [Tags, setTags] = useState<Page<TagRespData> | undefined>();
  const [Tagtest, setTagtest] = useState([]);
  const [TagsList, setTagsList] = useState<string[] | []>([]);
  const [selected, setSelected] = useState([]);
  function hundelSearch(e: string) {
    SearchInput(e);
  }

  const handlePress = () => {
    if (height.value === 100) {
      height.value += 100;
      setEnabled(true);
      fetchTagsByFilter()
        .then((res) => {
          console.log("here is a list of Tags", res.data.content);
          setTags(res.data);
          const result = res.data.content.map((tag) => ({
            label: tag.name,
            value: tag.id,
          }));
          console.log(result);

          setTagtest(result);
        })
        .catch((err) => {
          console.log("here error in tags func", err);
        });
    }
  };

  const animatedStyles = useAnimatedStyle(() => ({
    height: withSpring(height.value),
  }));

  // const RenderItem = (item) => {
  //   return (
  //     <TouchableOpacity
  //       onLongPress={() => {
  //         setTagsList((oldArray) => [...oldArray, item.item.name]);
  //       }}
  //       onPress={() => {
  //         TagSelected(item.item.id);
  //         console.log(item.item.name);
  //       }}
  //     >
  //       <Tag item={item.item} key={item.index} />
  //     </TouchableOpacity>
  //   );
  // };
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      </View>
    );
  };

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <View style={styles.SearchView}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={styles.backbutton}
        >
          <Entypo name="chevron-left" size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.HashtagView}>
          <TextInput
            value={SearchValue}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Search"
            placeholder="..."
            placeholderTextColor="gray"
            focusColor="blue"
            onChangeText={hundelSearch}
          />
        </View>
        <TouchableOpacity
          onLongPress={() => {
            height.value = 100;
            setEnabled(false);
          }}
          onPress={() => {
            handlePress();
          }}
          style={styles.backbutton}
        >
          <AntDesign name="pluscircle" size={24} color={COLORSS.Green} />
        </TouchableOpacity>
      </View>
      {Enabled ? (
        // <View>
        //   <FlatList
        //     style={styles.TagList}
        //     data={Tags?.content}
        //     contentContainerStyle={{ height: 40 }}
        //     showsHorizontalScrollIndicator={false}
        //     showsVerticalScrollIndicator={false}
        //     overScrollMode="never"
        //     // numColumns={5}

        //     horizontal={true}
        //     renderItem={RenderItem}
        //   />
        // </View>

        <View style={styles.TagView}>
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Tagtest}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={selected}
            search
            searchPlaceholder="Search..."
            maxSelect={3}
            onChange={(item) => {
              setSelected(item);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="black"
                name="Safety"
                size={20}
              />
            )}
            renderItem={renderItem}
            renderSelectedItem={(item, unSelect) => (
              <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                <View style={styles.selectedStyle}>
                  <Text style={styles.textSelectedStyle}>{item.label}</Text>
                  <AntDesign color="black" name="delete" size={17} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    borderBottomColor: "lightgray",
    borderBottomWidth: 0.7,
    display: "flex",

    flexDirection: "column",
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  SearchView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",

    justifyContent: "center",
    alignItems: "center",
  },
  Searchinput: {
    width: "70%",
    height: 70,
    fontSize: 18,
  },
  backbutton: {
    width: "15%",
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  TagView: {
    borderWidth: 1,
    borderColor: "red",
    height: 120,
    width: "100%",
    alignItems: "center",
  },
  TagList: {
    width: "100%",
  },

  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#DDDDDD",
  },
  inputStyle: { fontSize: 16 },
  labelStyle: {
    fontSize: 14,
    position: "absolute",
    top: -10,
    backgroundColor: "white",
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
  HashtagView: {
    width: "70%",
  },

  tagsStyle: {
    borderWidth: 0,
    borderRadius: 16,
    padding: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  tagsTextStyle: {
    fontSize: 16,
  },

  dropdown: {
    height: 50,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});
