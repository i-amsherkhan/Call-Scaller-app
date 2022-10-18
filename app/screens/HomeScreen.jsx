import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className={`flex-1 items-center justify-center `}>
        <Text className="text-red-600">Hello worlds</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
