import { IRegister } from './../../types/IRegister';
import { ILogin } from './../../types/ILogin';
import { api } from '../api';
import { API } from '../../constants/apiRoutes';
import { IFinishRegistration } from '../../types/IFinishRegistration';


export default
    {
        initialRegister(register: IRegister): Promise<string> {
            return api.post(API.APP.INITIAL_REGISTER, register);
        },
        finishRegistration(data: IFinishRegistration): Promise<string> {
            return api.post(API.APP.FINISH_REGISTER, data);
        }
    };
