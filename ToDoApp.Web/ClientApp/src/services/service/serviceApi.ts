import { IGetService } from './../../types/IGetService';
import { IService } from './../../types/IService';
import { api } from '../api';
import { API } from '../../constants/apiRoutes';
import { IEditService } from '../../types/IEditService';

export default
    {
        addService(data: IService): Promise<string> {
            return api.post(API.SERVICE_PROVIDER.SERVICE.NEW_SERVICE, data);
        },
        getAllServices(): Promise<IGetService[]> {
            return api.get(API.SERVICE_PROVIDER.SERVICE.GET_ALL_SERVICES)
        },
        getServiceProviderServices(serviceProviderId: string): Promise<IGetService[]> {
            return api.get(API.SERVICE_PROVIDER.SERVICE.GET_ALL_SERVICE_PROVIDER_SERVICES(serviceProviderId))
        },
        getServiceProviderServicesForUser(serviceProviderId: string): Promise<IGetService[]> {
            return api.get(API.SERVICE_PROVIDER.SERVICE.GET_ALL_SERVICE_PROVIDER_SERVICES_FOR_USER(serviceProviderId))
        },
        getServiceById(serviceId: string): Promise<IGetService>{
            return api.get(API.SERVICE_PROVIDER.SERVICE.GET_SERVICE_BY_ID(serviceId))
        },
        updateNumOfViews(serviceId: string): Promise<any>{
            return api.get(API.SERVICE_PROVIDER.SERVICE.UPDATE_NUM_OF_VIEWS(serviceId))
        },
        updateService(serviceId: string, service: IEditService): Promise<any>{
            return api.post(API.SERVICE_PROVIDER.SERVICE.UPDATE_SERVICE(serviceId), service)
        },
        deleteService(serviceId: string): Promise<any>{
            return api.delete(API.SERVICE_PROVIDER.SERVICE.DELETE_SERVICE(serviceId));
        }
    };
