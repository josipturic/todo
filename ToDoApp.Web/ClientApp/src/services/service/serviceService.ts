import { IEditService } from '../../types/IEditService';
import { IGetService } from './../../types/IGetService';
import { IService } from './../../types/IService';
import serviceApi from "./serviceApi";

export class ServiceService {

    static AddNewService = async (data: IService): Promise<string> => {
        try {
            var response = await serviceApi.addService(data);         
            return response;
        } catch(err) {
            return "";
        }
    }

    static GetAllServices = async (): Promise<IGetService[]> => {
        try {
            var response = await serviceApi.getAllServices();         
            return response;
        } catch(err) {
            return [];
        }
    }

    static GetServiceProviderServices = async (serviceProviderId): Promise<IGetService[]> => {
        try {
            var response = await serviceApi.getServiceProviderServices(serviceProviderId);         
            return response;
        } catch(err) {
            return [];
        }
    }

    static GetServiceById = async (serviceId: string): Promise<IGetService | null> => {
        try {
            var response = await serviceApi.getServiceById(serviceId);         
            return response;
        } catch(err) {
            return null;
        }
    }

    static UpdateNumOfViews = async (serviceId: string): Promise<any> => {
        try {
            var response = await serviceApi.updateNumOfViews(serviceId);         
            return response;
        } catch(err) {
            return null;
        }
    }

    static UpdateService = async (serviceId: string, service: IEditService): Promise<any> => {
        try {
            console.log(serviceId);
            console.log(service);
            var response = await serviceApi.updateService(serviceId, service);
            return response;
        }catch(err) {
            return null;
        }
    }
} 
