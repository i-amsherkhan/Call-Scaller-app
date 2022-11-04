import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AppStack from "./src/navigators/AppStack";
import AuthStack from "./src/navigators/AuthStack";
import { useState } from "react";

import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const [isSinged, setIsSinged] = useState(true);

  return (
    <>
      <PaperProvider>
        <StatusBar />
        <NavigationContainer>
          {isSinged ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
