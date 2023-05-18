import React, { ReactElement, ReactNode } from "react";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
type props = {
  children: ReactNode;
};
const Layout = ({ children }: props) => {
  return <Box px="80px">{children}</Box>;
};

export default Layout;
