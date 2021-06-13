import { AccountService } from './../account/accountService';
import React from 'react';
import { ILogin } from '../../types/ILogin';
import { IRegister } from '../../types/IRegister';
import adminApi from "./adminApi";

export class AdminService {

    static GetDashboardData = async () => {
        return await adminApi.getDashboardData();
    }
} 