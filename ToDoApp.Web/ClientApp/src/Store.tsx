import React from "react";
import LoginContextProvider from "./context/login/loginContext";

const Store = ({ children }: any) => {
  return <LoginContextProvider>{children}</LoginContextProvider>;
};

export default Store;
