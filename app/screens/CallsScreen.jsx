import { View, Text, StatusBar } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";

const CallsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Header navigation={navigation}/>
        <Text>Calls Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CallsScreen;
