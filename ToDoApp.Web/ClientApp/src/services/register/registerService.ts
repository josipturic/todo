import React from 'react';
import { IRegister } from '../../types/IRegister';
import registerApi from "./registerApi";
import { IFinishRegistration } from '../../types/IFinishRegistration';

export class RegisterService {

    static InitialRegister = async (register: IRegister): Promise<string> => {
        return await registerApi.initialRegister(register);         
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

