import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const TextMessagesScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} />
        <Text>Text Message</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TextMessagesScreen;
