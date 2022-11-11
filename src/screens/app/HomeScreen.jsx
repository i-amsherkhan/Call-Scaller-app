import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { PhoneArrowDownLeftIcon } from "react-native-heroicons/outline";
import { ArrowUpIcon } from "react-native-heroicons/mini";

import Chart from "../../components/Chart";
import DateRange from "../../components/DateRange";

const HomeScreen = ({ navigation }) => {
  const [date, setDate] = useState(false);

  function showDate() {
    setDate((prevDate) => !prevDate);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} />
        <View className="bg-white  px-4 py-5 border-b border-gray-200 rounded-lg shadow mx-2 mt-2">
          <Text className="text-lg leading-6 text-gray-900">Home</Text>
        </View>
        <View className="space-y-4 mt-5">
          <View className="bg-white pt-5 mx-2 px-4 py-5 shadow rounded-lg overflow-hidden relative">
            <View>
              <View className="absolute bg-blue-600 rounded-md p-3">
                <PhoneArrowDownLeftIcon size={30} color="white" />
              </View>
              <Text className="ml-16 text-base  text-gray-500 truncate">
                Calls Today
              </Text> 
              <View className="flex-row ">
                <Text className="ml-16 text-2xl font-semibold truncate pr-3">
                  9
                </Text>
                <View className="flex-row mt-2 font-semibold">
                  <ArrowUpIcon color="#10B981" size={20} font="bold" />
                  <Text className="font-semibold text-sm ml-1 text-green-500">
                    20%
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="bg-white pt-5 mx-2 px-4 py-5  shadow rounded-lg overflow-hidden relative">
            <View>
              <View className="absolute bg-blue-600 rounded-md p-3">
                <PhoneArrowDownLeftIcon size={30} color="white" />
              </View>
              <Text className="ml-16 text-base  text-gray-500 truncate">
                Calls Last 7 Days
              </Text>
              <View className="flex-row ">
                <Text className="ml-16 text-2xl font-semibold truncate pr-3">
                  9
                </Text>
                <View className="flex-row mt-2 font-semibold">
                  <ArrowUpIcon color="#10B981" size={20} font="bold" />
                  <Text className="font-semibold text-sm ml-1 text-green-500">
                    20%
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="bg-white pt-5 mx-2 px-4 py-5  shadow rounded-lg overflow-hidden relative">
            <View>
              <View className="absolute bg-blue-600 rounded-md p-3">
                <PhoneArrowDownLeftIcon size={30} color="white" />
              </View>
              <Text className="ml-16 text-base  text-gray-500 truncate">
                Calls Last 30 Days
              </Text>
              <View className="flex-row ">
                <Text className="ml-16 text-2xl font-semibold truncate pr-3">
                  9
                </Text>
                <View className="flex-row mt-2 font-semibold">
                  <ArrowUpIcon color="#10B981" size={20} font="bold" />
                  <Text className="font-semibold text-sm ml-1 text-green-500">
                    20%
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="bg-white pt-5 mx-2 px-4 py-5 shadow rounded-lg overflow-hidden relative">
            <View>
              <TouchableOpacity
                onPress={showDate}
                className=" bg-blue-600 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 w-36"
              >
                <Text className="text-white text-base text-center">
                  Filter By Date
                </Text>
              </TouchableOpacity>
              {date && <DateRange />}
            </View>
            <Chart />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
