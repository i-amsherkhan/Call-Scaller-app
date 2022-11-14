import React, { useContext, useState } from "react";
import HomeScreen from "../screens/app/HomeScreen";
import CallsScreen from "../screens/app/CallsScreen";
import NumberScreen from "../screens/app/NumberScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "../components/CustomDrawer";

import {
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeOpenIcon,
  FireIcon,
  HomeIcon,
  PhoneIcon,
  ArrowRightOnRectangleIcon,
} from "react-native-heroicons/outline";

import TextMessagesScreen from "../screens/app/TextMessageScreen";
import VoiceMailScreen from "../screens/app/VoiceMailScreen";
import LoginScreen from "../screens/auth/LoginScreen";


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
        drawerLabelStyle: { marginLeft: -24 },
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
