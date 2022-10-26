import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CallsScreen from "../screens/CallsScreen";
import NumberScreen from "../screens/NumberScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "../components/CustomDrawer";
import Header from "../components/Header";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeOpenIcon,
  FireIcon,
  HomeIcon,
  PhoneIcon,
} from "react-native-heroicons/outline";

import TextMessagesScreen from "../screens/TextMessageScreen";
import VoiceMailScreen from "../screens/VoiceMailScreen";

const AppStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#2269F9",
        drawerActiveTintColor: "#fff",
      
      }}
      
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Numbers"
        component={NumberScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FireIcon size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Calls"
        component={CallsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <PhoneIcon size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="TextMessage"
        component={TextMessagesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <ChatBubbleOvalLeftEllipsisIcon size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="VoiceMail"
        component={VoiceMailScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <EnvelopeOpenIcon size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
    
  );
};

export default AppStack;
