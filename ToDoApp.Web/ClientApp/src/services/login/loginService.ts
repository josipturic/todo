import React from 'react';
import { ILogin } from '../../types/ILogin';
import { IRegister } from '../../types/IRegister';
import loginApi from "./loginApi";

export class LoginService {

    static Login = async (login: ILogin) => {
        try {
            var response = await loginApi.login(login);
        } catch(err) {
            console.log(err)
        }
    }

    static Register = (register: IRegister) => {
        console.log(register)
    }

} 