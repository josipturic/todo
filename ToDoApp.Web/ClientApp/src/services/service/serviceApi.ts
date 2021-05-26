import { IService } from './../../types/IService';
import { api } from '../api';
import { API } from '../../constants/apiRoutes';

export default
    {
        addService(data: IService): Promise<string> {
            return api.post(API.SERVICE_PROVIDER.SERVICE.NEW_SERVICE, data);
        },
        getAllServices(): Promise<IService[]> {
            return api.get(API.SERVICE_PROVIDER.SERVICE.GET_ALL_SERVICES)
        },
        getServiceProviderServices(serviceProviderId: string): Promise<IService[]> {
            return api.get(API.SERVICE_PROVIDER.SERVICE.GET_ALL_SERVICE_PROVIDER_SERVICES(serviceProviderId))
        },
        getServiceById(serviceId: string): Promise<IService>{
            return api.get(API.SERVICE_PROVIDER.SERVICE.GET_SERVICE_BY_ID(serviceId))
        }
    };
