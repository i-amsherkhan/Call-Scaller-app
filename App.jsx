import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppStack from "./src/routes/AppStack";
import AuthStack from "./src/routes/AuthStack";
import { Auth } from "./src/context/AuthProvider";
import { ApiContext } from "./src/context/ApiProvider";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [singedIn, setSingedIn] = useState(true);
  const [testing, setTesting] = useState();

  useEffect(() => {
    fetch("https://emojihub.herokuapp.com/api/random")
      .then((response) => response.json())
      .then((data) => setTesting([data]));
  }, []);

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
            <ApiContext.Provider value={{ testing }}>
              {singedIn ? <AppStack /> : <AuthStack />}
            </ApiContext.Provider>
          </Auth.Provider>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
