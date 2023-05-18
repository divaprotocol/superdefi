import { AppProps } from "next/app";
import { css, Global } from "@emotion/react";
import { ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import theme from "../theme";

const GlobalStyle = () => {
  const bg = useColorModeValue(
    "linear-gradient(180deg, #E1DEFF 0%, #FFFFFF 100%)",
    "#181A26"
  );
  return (
    <Global
      styles={css`
        body {
          background: ${bg};
          min-height: 100vh;
        }
      `}
    />
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
