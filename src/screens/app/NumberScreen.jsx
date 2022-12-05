import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { ApiContext } from "../../context/ContextProvider";
import { DataTable } from "react-native-paper";

const NumberScreen = ({ navigation }) => {
  const { testing } = useContext(ApiContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} />

        <View className="bg-white  px-4 py-5 border-b border-gray-200 rounded-lg shadow mx-2 mt-2">
          <Text className="text-lg leading-6 text-gray-900">Numbers</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <DataTable className="px-2 flex-1 h-full">
            <DataTable.Header className="bg-gray-50 mt-6  border-spacing-36 border-gray-300 rounded-lg shadow-lg">
              <DataTable.Title className="truncate w -36">
                <Text className="text-left text-gray-500 uppercase tracking-wider">
                  Phone number
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 mx-2">
                <Text className="text-left text-gray-500 uppercase tracking-wider">
                  Call Flow
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 w-32 left-6">
                <Text className="text-left text-gray-500 uppercase tracking-wider">
                  Calls
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 ">
                <Text className="text-left text-gray-500 uppercase tracking-wider">
                  Text Messages
                </Text>
              </DataTable.Title>

              <DataTable.Title className="px-6 py-3 ">
                <Text className="text-left text-gray-500 uppercase tracking-wider">
                  Status & Type
                </Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row className="bg-white py-5 ">
              <DataTable.Cell>
                <View className="truncate w-36">
                  <Text className=" text-gray-900 ">User Purchase</Text>
                  <View class="mt-4">
                    <Text className=" text-gray-900 pt-2 ">(256) 287-4150</Text>
                  </View>
                </View>
              </DataTable.Cell>

              {/* <FlatList
                keyExtractor={(item) => item.id}
                data={testing}
                renderItem={({ item }) => (
                  <>
                  </>
                )}
              /> */}

              <DataTable.Cell className="w-24 mt-2 ">
                <Text className="truncate text-gray-900 text-center">
                  Hello Call Flow
                </Text>
              </DataTable.Cell>
              <DataTable.Cell className="truncate w-32 left-4">
                <Text className="text-gray-900 text-center">4000</Text>
              </DataTable.Cell>

              <DataTable.Cell className="truncate w-20">
                <Text className=" text-gray-900 text-center">400</Text>
              </DataTable.Cell>

              <DataTable.Cell className="truncate w-20">
                <View>
                  <View>
                    <Text className="text-gray-900 text-center">Active</Text>
                  </View>
                  <View className="pt-2">
                    <Text className=" text-gray-900 text-center">
                      Toll Free
                    </Text>
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
