import { AccountService } from './../account/accountService';
import React from 'react';
import { ILogin } from '../../types/ILogin';
import { IRegister } from '../../types/IRegister';
import loginApi from "./loginApi";

export class LoginService {

    static Login = async (login: ILogin) => {
        return await loginApi.login(login);
    }
} 