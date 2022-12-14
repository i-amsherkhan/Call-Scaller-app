import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { DataTable } from "react-native-paper";
import { ApiContext } from "../../context/ContextProvider";
import Pagination from "../../components/Pagination";

const NumberScreen = ({ navigation }) => {
  const { currentPosts, loading } = useContext(ApiContext);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Header navigation={navigation} />

          <View className="bg-white  px-4 py-5 border-b border-gray-200 rounded-lg shadow mx-2 mt-2">
            <Text className="text-lg leading-6 text-gray-900">Numbers</Text>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <DataTable className="px-2 py-2  flex-1 h-full">
              <DataTable.Header className="bg-gray-50 mt-6  border-spacing-36 border-gray-300 rounded-lg shadow-lg">
                <DataTable.Title className="truncate w -36">
                  <Text className="text-left text-gray-500 uppercase tracking-wider">
                    Phone number
                  </Text>
                </DataTable.Title>

                <DataTable.Title className=" py-3 px-8 left-4">
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
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={currentPosts}
                  renderItem={({ item }) => (
                    <>
                      <DataTable.Cell className="w-24 mt-2">
                        <Text className="truncate text-gray-900 text-center">
                          {item.title}
                        </Text>
                      </DataTable.Cell>
                    </>
                  )}
                />
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={currentPosts}
                  renderItem={({ item }) => (
                    <>
                      <DataTable.Cell className="w-24 mt-2">
                        <Text className="truncate text-gray-900 text-center">
                          {item.title}
                        </Text>
                      </DataTable.Cell>
                    </>
                  )}
                />
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={currentPosts}
                  renderItem={({ item }) => (
                    <>
                      <DataTable.Cell className="w-24 mt-2">
                        <Text className="truncate text-gray-900 text-center">
                          {item.title}
                        </Text>
                      </DataTable.Cell>
                    </>
                  )}
                />
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={currentPosts}
                  renderItem={({ item }) => (
                    <>
                      <DataTable.Cell className="w-24 mt-2">
                        <Text className="truncate text-gray-900 text-center">
                          {item.title}
                        </Text>
                      </DataTable.Cell>
                    </>
                  )}
                />
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={currentPosts}
                  renderItem={({ item }) => (
                    <>
                      <DataTable.Cell className="w-24 mt-2">
                        <Text className="truncate text-gray-900 text-center">
                          {item.title}
                        </Text>
                      </DataTable.Cell>
                    </>
                  )}
                />
              </DataTable.Row>
            </DataTable>
          </ScrollView>
          <Pagination />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default NumberScreen;
