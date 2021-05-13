import { LoginContextProvider } from './../../context/login/loginContext';
import React, { useContext } from 'react';
import { ILoginResponse } from '../../types/ILoginResponse';
import jwt_decode from "jwt-decode";

export class AccountService {

    static SetAuthToken = async (token: string) => {
        window.localStorage.removeItem("authToken");
        var loginResponse = AccountService.parseAuthToken(token);
        console.log(loginResponse);
        window.localStorage.setItem("authToken", loginResponse.token);
        return loginResponse;
    }

    static  parseAuthToken = (authToken: string): ILoginResponse => {
        var payload: any = jwt_decode(authToken);
        var loginResponse: ILoginResponse =
        {
            token: authToken,
            id: payload["sub"],
            role: payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
            username: payload["unique_name"]
        };
        return loginResponse;
  }

} 
