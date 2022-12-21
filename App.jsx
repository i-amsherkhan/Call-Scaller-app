import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppStack from "./src/routes/AppStack";
import AuthStack from "./src/routes/AuthStack";
import { Auth } from "./src/context/ContextProvider";
import { ApiContext } from "./src/context/ContextProvider";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";

export default function App() {
  // Pagination Functionality
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPosts = currentPage * postPerPage;
  const indexOfFirtPosts = indexOfLastPosts - postPerPage;
  const currentPosts = posts.slice(indexOfFirtPosts, indexOfLastPosts);
  const totalPosts = posts.length;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function nextPage() {
    if (currentPage < 5) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  function prevPage() {
    if (currentPage < 1) {
      setCurrentPage(1);
    } else if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  console.log(currentPage);
  console.log(indexOfLastPosts);

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
            <ApiContext.Provider
              value={{
                loading,
                currentPosts,
                postPerPage,
                totalPosts,
                paginate,
                indexOfLastPosts,
                indexOfFirtPosts,
                nextPage,
                prevPage,
              }}
            >
              {authState.auth ? <AppStack /> : <AuthStack />}
            </ApiContext.Provider>
          </Auth.Provider>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
