import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

import { DataTable } from "react-native-paper";

const NumberScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <DataTable className="px-2 flex-1 h-full">
            <DataTable.Header className="bg-gray-50 mt-6  border-spacing-36 border-gray-300 rounded-lg shadow-lg">
              <DataTable.Title className="truncate w-36">
                <Text className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone number
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3">
                <Text className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Call Flow
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 ">
                <Text className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Calls
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 ">
                <Text className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Text Messages
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 ">
                <Text className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status & Type
                </Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row className="bg-white py-5">
              <DataTable.Cell>
                <View className="truncate w-36">
                  <Text className="text-xs">User Purchase</Text>
                  <View class="mt-4">
                    <Text className="text-xs pt-2 ">(256) 287-4150</Text>
                  </View>
                </View>
              </DataTable.Cell>

              <DataTable.Cell className="truncate w-24">
                <Text className="text-xs text-center">Usama Call Flows</Text>
              </DataTable.Cell>

              <DataTable.Cell className="truncate w-20 left-1">
                <Text className="text-xs text-center">40000</Text>
              </DataTable.Cell>

              <DataTable.Cell className="truncate w-20">
                <Text className="text-xs text-center">4000</Text>
              </DataTable.Cell>

              <DataTable.Cell className="truncate w-20">
                <View>
                  <View>
                    <Text className="text-xs text-center">Active</Text>
                  </View>
                  <View className="pt-2">
                    <Text className="text-xs text-center">Toll Free</Text>
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

export default NumberScreen;
