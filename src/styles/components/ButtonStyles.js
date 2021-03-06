export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: (props) => ({
      bg: "blue.200",
      color: "white",
      _hover: {
        transform: "scale(1.05)",
        boxShadow: "1px 3px 10px #3577FFAA",
      },
    }),
    headerPrimary: (props) => ({
      bg: "blue.200",
      color: "white",
      _hover: {
        boxShadow: "1px 3px 15px #3577FFAA",
      },
    }),
    form: (props) => ({
      bg: "blue.150",
      color: "white",
      fontWeight: "bold",
      padding: "1rem 2rem",
    }),
  },
  defaultProps: {},
};
