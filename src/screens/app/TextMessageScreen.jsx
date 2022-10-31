import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { DataTable } from "react-native-paper";

const TextMessagesScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} />
        <View className="bg-white  px-4 py-5 border-b border-gray-200 rounded-lg shadow mx-2 mt-2">
          <Text className="text-lg leading-6 text-gray-900">Messages</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <DataTable className="px-2 flex-1 h-full">
            <DataTable.Header className="bg-gray-50 mt-6 border-spacing-36 border-gray-300 rounded-lg shadow-lg">
              <DataTable.Title className="truncate w-44">
                <Text className="text-left text-gray-500 uppercase tracking-wider">
                  Phone number
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 items-center justify-center">
                <Text className="text-left text-gray-500 uppercase tracking-wider">
                  FROM NUMBER
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 items-center justify-center">
                <Text className="text-left text-gray-500 uppercase tracking-wider">
                  Text
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 items-center justify-center right-1">
                <Text className="text-left text-gray-500 uppercase tracking-wider">
                  DURATION
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 items-center justify-center">
                <Text className="text-left text-gray-500 uppercase tracking-wider">
                  DATE
                </Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row className="bg-white py-5">
              <DataTable.Cell className="flex-1">
                <View className="truncate">
                  <Text className="text-gray-900 ">Local Testing Purchase</Text>
                  <View class="mt-4">
                    <Text className=" text-gray-900 pt-2 ">(256) 287-4150</Text>
                  </View>
                </View>
              </DataTable.Cell>

              <TouchableOpacity>
                <DataTable.Cell className="w- py-2 h-10 rounded-md px-2 bg-green-500 items-center justify-center left-2">
                  <Text className="text-center text-white font-semibold truncate">
                    (510) 298-1672
                  </Text>
                </DataTable.Cell>
              </TouchableOpacity>

              <DataTable.Cell className="w-20 items-center justify-center left-8">
                <Text className="truncate">Hello World</Text>
              </DataTable.Cell>

              <DataTable.Cell className="flex-1 truncate items-center justify-center left-6 px-2">
                <Text className="text-gray-900 text-center">01m 39sec</Text>
              </DataTable.Cell>

              <DataTable.Cell className="flex-1 truncate items-center justify-center left-6">
                <View className="items-center justify-center">
                  <View className="flex-1 items-center justify-center">
                    <Text className="text-gray-900 text-center">
                      Oct 27, 2022
                    </Text>
                  </View>
                  <View className="pt-2">
                    <Text className=" text-gray-900 text-center">05:47 AM</Text>
                  </View>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TextMessagesScreen;
