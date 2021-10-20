import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { store } from "./app/store";
import { AniListTheme } from "./styles/theme";
import { FirebaseContext } from "./context/firebase";
import { firebase } from "./lib/firebase.config";

render(
  <Provider store={store}>
    <FirebaseContext.Provider value={{ firebase }}>
      <ChakraProvider theme={AniListTheme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById("root")
);
