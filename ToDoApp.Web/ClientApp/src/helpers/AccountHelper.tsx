import React from "react";
import { ILoginResponse } from "../types/ILoginResponse";
import jwt_decode from "jwt-decode";

export const roleProp =
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";

export const parseAuthToken = (authToken: string): ILoginResponse => {
  var payload: any = jwt_decode(authToken);
  var loginResponse: ILoginResponse = {
    token: authToken,
    id: payload["sub"],
    role: payload[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ],
    username: payload["unique_name"],
  };
  return loginResponse;
};

export function getToken(): any | null {
  let token: any = localStorage.getItem("authToken");
  if (token) {
    if (token) return token;
  }
  return null;
}

export function isAuthenticated(): boolean {
  var token = getToken();
  if (token !== null) {
    const tokenDec: any = jwt_decode(getToken());
    var dateNow = new Date().getTime().valueOf() / 1000;
    return tokenDec.exp > dateNow;
  }
  return false;
}

export function getUserRole() {
  const token = getToken();
  if (!token) return null;
  var payload: any = jwt_decode(token);
  var role = payload[roleProp];
  return role;
}

export function isAdmin() {
  return getUserRole() === "Admin";
}

export function isServiceProvider() {
  return getUserRole() === "ServiceProvider";
}
