import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AuthProvider } from "./src/context/AuthProvider";
import AppStack from "./src/routes/AppStack";
import AuthStack from "./src/routes/AuthStack";
import { AuthContext, UpdateAuthContext } from "./src/context/AuthProvider";
import { useContext, useState } from "react";

export default function App() {
  const Auth = useContext(AuthContext);
  const UpdateAuth = useContext(UpdateAuthContext);

  

  return (
    <>
      <PaperProvider>
        <StatusBar />
        <AuthProvider>
          <NavigationContainer>
            {logIn ? <AppStack /> : <AuthStack />}
            {/* <AppStack /> */}
          </NavigationContainer>
        </AuthProvider>
      </PaperProvider>
    </>
  );
}
