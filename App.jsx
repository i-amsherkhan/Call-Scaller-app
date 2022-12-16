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
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?page=${page}`
      );
      const newData = await response.json();
      setApiData((prevData) => [...prevData, ...newData.items]);
      setTotalPages(newData.totalPages);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handlePageChange = () => {
    setPage(page);
  };

  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
    auth: false,
  });

  function reducer(state, action) {
    switch (action.type) {
      case HANDLE_AUTH.SINGEDIN:
        if (!reg.test(state.email) || !state.password) {
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
            value={{ handleSingedOut, handleSingedIn, state, dispatch }}
          >
            <ApiContext.Provider
              value={{ page, totalPages, handlePageChange, apiData }}
            >
              {state.auth ? <AppStack /> : <AuthStack />}
            </ApiContext.Provider>
          </Auth.Provider>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
