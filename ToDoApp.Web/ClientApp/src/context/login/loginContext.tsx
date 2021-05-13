import React, { ComponentType, createContext, useState } from "react";
import { ILoginContext } from "./ILoginContext";
import { ILoginResponse } from "./../../types/ILoginResponse";

const initialLoginData: ILoginResponse = {
  id: "",
  role: "",
  token: "",
  username: "",
};

export const LoginContext = createContext<ILoginContext>({
  loginData: {
    id: "",
    role: "",
    token: "",
    username: "",
  },
  setLoginData: (loginData: ILoginResponse) => null,
});

export const LoginContextProvider: ComponentType<React.ReactNode> = (props) => {
  const [loginData, setLoginDataState] = useState(initialLoginData);

  const setLoginData = (loginData: ILoginResponse) => {
    setLoginDataState(loginData);
  };

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
