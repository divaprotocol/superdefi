import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen relative bg-background-gradient dark:bg-dark-diva ">
      {children}
      <Header />
    </div>
  );
};

export default Layout;
