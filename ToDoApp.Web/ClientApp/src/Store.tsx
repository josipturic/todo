import React from "react";
import LoginContextProvider from "./context/login/loginContext";
import CategoryContextProvider from "./context/category/categoryContext";

const Store = ({ children }: any) => {
  return (
    <LoginContextProvider>
      <CategoryContextProvider>{children}</CategoryContextProvider>
    </LoginContextProvider>
  );
};

export default Store;
