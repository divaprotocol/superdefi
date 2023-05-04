import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";
type props = {
  children: ReactElement;
};
const Layout = ({ children }: props) => {
  return <Box mx="80px">{children}</Box>;
};

export default Layout;
