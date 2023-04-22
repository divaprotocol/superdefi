import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: "#000000",
    white: "#F4F6F8",
    dark: "#181A26",
    purple: {
      100: "#6A2DFF",
      200: "#242649",
    },
    grey: {
      100: "#585F6F",
      200: "#333947",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "2.25rem",
    "3xl": "3.75rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
  },
});

export default theme;
