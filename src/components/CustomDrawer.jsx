import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Text, TextInput, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

function CustomDrawerContent(props) {
  return (
    <>
      <View className="mb-3 bg-black py-2">
        <View className="p-2 flex-row">
          <View className="rounded-full items-start justify-start p-12  relative">
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
              className="w-20 h-full p-12 absolute rounded-full"
            />
          </View>

          <View>
            <Text className="text-lg text-white mt-2 mx-2">Curise Brains</Text>
            <View className="mx-2 bg-blue-500 inline-flex items-center py-0.5 rounded-full w-16 mt-2">
              <Text className="text-sm font-medium text-white">$ 23.56</Text>
            </View>
            <View className="mx-2 mt-1">
              <Text className="text-base text-white">High Volume Plan</Text>
            </View>
          </View>
        </View>

        <View className="mt-2 py-2 px-4">
          <View>
            <TextInput
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1 pl-8"
              placeholder="Search..."
            />
          </View>

          <View className="absolute top-4 left-5">
            <MagnifyingGlassIcon size={20} color="black" />
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </>
  );
}

export default CustomDrawerContent;