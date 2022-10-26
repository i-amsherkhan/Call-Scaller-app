import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";

const ForgotPasswordScreen = () => {
  return (
    <View className={` flex-1 items-center justify-center bg-gray-100`}>
      <View className="w-full ">
        <Image
          source={{
            uri: "https://staging.callscaler.com/logos.png",
          }}
          className={`h-16 bg-cover bg-no-repeat `}
        />
        <View className="bg-white p-4 mx-2 mt-10 rounded-lg">
          <View>
            <Text className=" text-gray-900/70 font-medium text-base">
              Forgot your password? No problem. Just let us know your email
              address and we will email you a password reset link that will
              allow you to choose a new one.
            </Text>
          </View>
          <View>
            <Text className="text-lg py-2 text-gray-900/70 font-semibold">
              Email:
            </Text>
            <TouchableOpacity>
              <TextInput className="px-2 py-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500" />
            </TouchableOpacity>
          </View>

          <View className={`flex-row mt-3 items-end justify-end `}>
            <TouchableOpacity className="bg-black px-3 rounded-md py-2 font-semibold text-base">
              <Text className="text-white mx-auto text-base font-semibold uppercase">
                Email passaword reset link
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
