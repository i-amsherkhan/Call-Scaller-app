import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Auth } from "../../context/ContextProvider";
import Checkbox from "expo-checkbox";

const LoginScreen = () => {
  const { handleSingedIn, state, dispatch } = useContext(Auth);
  const [isChecked, setChecked] = useState(false);

  return (
    <View className={`flex-1 items-center justify-center bg-gray-100`}>
      <View className="w-full ">
        <View className="bg-white p-4 mx-2 mt-10 rounded-lg">
          <View className="my-4">
            <Image
              source={{
                uri: "https://staging.callscaler.com/logos.png",
              }}
              className={`w-52 py-5 mx-auto`}
            />
          </View>

          <View>
            <Text className="text-lg py-2 text-gray-900/70 font-semibold">
              Email:
            </Text>
            <TouchableOpacity>
              <TextInput
                className="px-2 py-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500"
                value={state.email}
                placeholder="Enter your email:"
                onChangeText={(email) => {
                  dispatch({ type: "email", value: email });
                }}
                autoComplete={"email"}
                autoCorrect={false}
              />
            </TouchableOpacity>

            {!state.password || state.auth ? (
              <Text className="text-rose-600">
                The selected email is invalid.
              </Text>
            ) : null}

            <Text className="text-lg py-2 text-gray-900/70 font-semibold">
              Password:
            </Text>
            <TextInput
              className="px-2 py-1  border border-gray-300 text-gray-900/70 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500"
              value={state.password}
              autoComplete={"password"}
              secureTextEntry={true}
              placeholder="Enter your password:"
              onChangeText={(text) => {
                dispatch({ type: "password", value: text });
              }}
            />
          </View>

          <View className="flex-row items-center mt-5 mx-2">
            <Checkbox
              className="text-blue-600 bg-gray-100 rounded border-gray-500 focus:ring-blue-500"
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4630EB" : undefined}
            />
            <Text className="text-lg font-medium px-2 text-gray-900/70">
              Rember me?
            </Text>
          </View>

          <View className={`flex-row mt-2 items-end justify-end`}>
            <TouchableOpacity
              className="bg-black w-20 rounded-md py-2 font-semibold text-base"
              onPress={handleSingedIn}
            >
              <Text className="text-white mx-auto text-base font-semibold">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
