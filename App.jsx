import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AppStack from "./src/navigators/AppStack";
import { useState } from "react";
import AuthStack from "./src/navigators/AppStack";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const [isSinged, setisSinged] = useState(true);
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
