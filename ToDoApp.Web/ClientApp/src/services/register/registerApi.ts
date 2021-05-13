import { IRegister } from './../../types/IRegister';
import { ILogin } from './../../types/ILogin';
import { api } from '../api';
import { API } from '../../constants/apiRoutes';


export default
    {
        initialRegister(register: IRegister): Promise<string> {
            return api.post(API.APP.INITIAL_REGISTER, register);
        },
    };
