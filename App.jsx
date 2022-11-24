import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppStack from "./src/routes/AppStack";
import AuthStack from "./src/routes/AuthStack";
import { Auth } from "./src/context/AuthProvider";
import { ApiContext } from "./src/context/ApiProvider";
import { useEffect, useState, useReducer } from "react";

const HANDLEAUTH = {
  SINGEDIN: "handleSingedIn",
  SINGEDOUT: "handleSingedOut",
};

function reducer(state, action) {
  switch (action.type) {
    case HANDLEAUTH.SINGEDIN:
      return { auth: (state.auth = true) };
    case HANDLEAUTH.SINGEDOUT:
      return { auth: (state.auth = false) };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { auth: false });
  const [testing, setTesting] = useState();

  useEffect(() => {
    fetch("https://emojihub.herokuapp.com/api/random")
      .then((response) => response.json())
      .then((data) => setTesting([data]));
  }, []);

  function handleSingedIn() {
    dispatch({ type: HANDLEAUTH.SINGEDIN });
  }

  function handleSingedOut() {
    dispatch({ type: HANDLEAUTH.SINGEDOUT });
  }

  console.log(state.auth);
  return (
    <>
      <PaperProvider>
        <StatusBar />
        <NavigationContainer>
          <Auth.Provider value={{ handleSingedOut, handleSingedIn }}>
            <ApiContext.Provider value={{ testing }}>
              {state.auth ? <AppStack /> : <AuthStack />}
            </ApiContext.Provider>
          </Auth.Provider>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
