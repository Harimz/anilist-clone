import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { store } from "./app/store";
import { AniListTheme } from "./styles/theme";

render(
  <Provider store={store}>
    <ChakraProvider theme={AniListTheme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
