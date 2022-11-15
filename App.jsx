import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppStack from "./src/routes/AppStack";
import AuthStack from "./src/routes/AuthStack";
import { Auth } from "./src/context/AuthProvider";
import { useState } from "react";

export default function App() {
  const [singedIn, setSingedIn] = useState(false);

  function handleSingedIn() {
    setSingedIn((prevSingedIn) => true);
  }

  function handleSingedOut() {
    setSingedIn((prevSingedIn) => false);
  }

  return (
    <>
      <PaperProvider>
        <StatusBar />
        <NavigationContainer>
          <Auth.Provider value={{ handleSingedOut, handleSingedIn }}>
            {singedIn ? <AppStack /> : <AuthStack />}
          </Auth.Provider>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
