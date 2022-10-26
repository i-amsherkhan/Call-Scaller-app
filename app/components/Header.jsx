import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Bars3Icon } from "react-native-heroicons/solid";
const Header = ({ navigation }) => {
  return (
    <View>
      <View className="p-4 bg-white flex-row justify-between ">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={{
              uri: "https://v2.callscaler.com/logos.png",
            }}
            className="w-52 py-5"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="mx-1 mt-1"
          onPress={() => navigation.openDrawer()}
        >
          <Bars3Icon color="black" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
