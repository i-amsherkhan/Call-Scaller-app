import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AppStack from "./src/routes/AppStack";

import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <>
      <PaperProvider>
        <StatusBar />
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
