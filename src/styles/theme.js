import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { ButtonStyles as Button } from "./components/ButtonStyles";
import { TextStyles as Text } from "./components/TextStyles";

const styles = {
  global: (props) => ({
    body: {
      color: mode("lightText", "darkText")(props),
      bg: mode("#EDF1F5", "#0B1622")(props),
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    darkBg: "#0B1622",
    darkPurple: "#2B2D42",
    gray: {
      50: "#EDF1F5B3",
      100: "#EDF1F5",
      200: "#C9D7E3",
      300: "#BCBEDC",
      400: "#A0B1C5",
      500: "#516170",
      600: "#748899",
    },
    blue: {
      100: "#ACD5F2",
      150: "#3DB4F2",
      200: "#3577FF",
      300: "#152232",
      400: "#151F2E",
      500: "#0A1625",
      600: "#11161D",
      700: "#0B1622B3",
    },
    red: {
      100: "#FEF0F0",
      200: "#F56C6C",
    },
  },
  components: {
    Button,
    Text,
  },
  styles,
  config,
});

export const AniListTheme = extendTheme(theme);
