import React from 'react';
import { IRegister } from '../../types/IRegister';
import registerApi from "./registerApi";
import { AccountService } from './../account/accountService';

export class RegisterService {

    static InitialRegister = async (register: IRegister): Promise<string> => {
        try {
            var response = await registerApi.initialRegister(register);         
            return response;
        } catch(err) {
            return "";
        }
    }
} 

