import React from 'react';
import { IRegister } from '../../types/IRegister';
import registerApi from "./registerApi";
import { AccountService } from './../account/accountService';
import { IFinishRegistration } from '../../types/IFinishRegistration';

export class RegisterService {

    static InitialRegister = async (register: IRegister): Promise<string> => {
        try {
            var response = await registerApi.initialRegister(register);         
            return response;
        } catch(err) {
            return "";
        }
    }

    static FinishRegistration = async (data: IFinishRegistration): Promise<string> => {
        try {
            var response = await registerApi.finishRegistration(data);         
            return response;
        } catch(err) {
            return "";
        }
    }
} 

