import { ILogin } from './../../types/ILogin';
import { api } from '../api';
import { API } from '../../constants/apiRoutes';


export default
    {
        login(login: ILogin): Promise<any> {
            return api.post(API.APP.LOGIN, login);
        },
    };
