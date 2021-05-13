import { ILoginResponse } from './../../types/ILoginResponse';

export interface ILoginContext {
    loginData: ILoginResponse,
    setLoginData: Function
}