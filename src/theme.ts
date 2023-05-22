import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    borderRadius: "12px",
    textAlign: "center",
    bg: "none", // <-- border radius is same for all variants and sizes
  },
  // Four sizes: sm, md, lg, xl
  sizes: {
    xs: {
      w: "",
      h: "",
    },
    sm: {
      w: "120px",
      h: "60px",
      fontSize: "sm",
    },
    md: {
      w: "180px",
      fontSize: "md",
    },
    lg: {
      w: "360px",
      h: "60px",
    },
    xl: {
      w: "420px",
      h: "45px",
    },
  },
  // Two variants: outline and solid
  variants: {
    primary: {
      bg: "purple.100",
    },
    secondary: {
      bg: "gray.200",
    },
    tertiary: {
      bg: "purple.200",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "xs",
  },
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Button,
  },
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
    bold: 800,
  },
});

export default theme;
