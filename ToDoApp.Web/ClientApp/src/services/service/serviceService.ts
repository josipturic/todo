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

    static GetAllServices = async (): Promise<IService[]> => {
        try {
            var response = await serviceApi.getAllServices();         
            return response;
        } catch(err) {
            return [];
        }
    }

    static GetServiceProviderServices = async (serviceProviderId): Promise<IService[]> => {
        try {
            var response = await serviceApi.getServiceProviderServices(serviceProviderId);         
            return response;
        } catch(err) {
            return [];
        }
    }

    static GetServiceById = async (serviceId: string): Promise<IService | null> => {
        try {
            var response = await serviceApi.getServiceById(serviceId);         
            return response;
        } catch(err) {
            return null;
        }
    }
} 
