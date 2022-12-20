import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppStack from "./src/routes/AppStack";
import AuthStack from "./src/routes/AuthStack";
import { Auth } from "./src/context/ContextProvider";
import { ApiContext } from "./src/context/ContextProvider";
import { useEffect, useState, useReducer } from "react";

export default function App() {
  const [page, setPage] = useState(0);
  const [pagePerItem, setPagePerItem] = useState()
  const [apiData, setApiData] = useState();
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);
  console.log(apiData);

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const HANDLE_AUTH = {
    SINGEDIN: "handleSingedIn",
    SINGEDOUT: "handleSingedOut",
  };

  const [authState, authDispatch] = useReducer(authentication, {
    email: "",
    password: "",
    auth: true,
  });

  function authentication(authState, action) {
    switch (action.type) {
      case HANDLE_AUTH.SINGEDIN:
        if (!reg.test(authState.email) || !authState.password) {
          return { auth: (authState.auth = false) };
        } else if (!reg.test(authState.email)) {
          return { auth: (authState.auth = false) };
        } else {
          return { auth: (authState.auth = true) };
        }
      case "email":
        return { ...authState, email: action.value };
      case "password":
        return { ...authState, password: action.value };

      case HANDLE_AUTH.SINGEDOUT:
        return { auth: (authState.auth = false) };

      default:
        break;
    }
  }

  function handleSingedIn() {
    authDispatch({ type: HANDLE_AUTH.SINGEDIN });
  }

  function handleSingedOut() {
    authDispatch({ type: HANDLE_AUTH.SINGEDOUT });
  }

  return (
    <>
      <PaperProvider>
        <StatusBar />
        <NavigationContainer>
          <Auth.Provider
            value={{ handleSingedOut, handleSingedIn, authState, authDispatch }}
          >
            <ApiContext.Provider value={{ apiData }}>
              {authState.auth ? <AppStack /> : <AuthStack />}
            </ApiContext.Provider>
          </Auth.Provider>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
