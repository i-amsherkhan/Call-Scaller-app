import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppStack from "./src/routes/AppStack";
import AuthStack from "./src/routes/AuthStack";
import { Auth } from "./src/context/ContextProvider";
import { ApiContext } from "./src/context/ContextProvider";
import { useEffect, useState, useReducer } from "react";

const HANDLE_AUTH = {
  SINGEDIN: "handleSingedIn",
  SINGEDOUT: "handleSingedOut",
};
export default function App() {
  const [testing, setTesting] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setTesting(data));
  }, []);

  console.log(testing);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
    auth: false,
  });

  function reducer(state, action) {
    switch (action.type) {
      case HANDLE_AUTH.SINGEDIN:
        if (!state.email || !state.password) {
          return { auth: (state.auth = false) };
        } else if (!reg.test(state.email)) {
          return { auth: (state.auth = false) };
        } else {
          return { auth: (state.auth = true) };
        }
      case "email":
        return { ...state, email: action.value };
      case "password":
        return { ...state, password: action.value };

      case HANDLE_AUTH.SINGEDOUT:
        return { auth: (state.auth = false) };

      default:
        break;
    }
  }

  function handleSingedIn() {
    dispatch({ type: HANDLE_AUTH.SINGEDIN });
  }

  function handleSingedOut() {
    dispatch({ type: HANDLE_AUTH.SINGEDOUT });
  }

  return (
    <>
      <PaperProvider>
        <StatusBar />
        <NavigationContainer>
          <Auth.Provider
            value={{ handleSingedOut, handleSingedIn, state, dispatch, reg }}
          >
            <ApiContext.Provider value={{ testing }}>
              {state.auth ? <AppStack /> : <AuthStack />}
            </ApiContext.Provider>
          </Auth.Provider>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
