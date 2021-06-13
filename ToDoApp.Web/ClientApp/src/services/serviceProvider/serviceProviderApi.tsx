import { api } from "../api";
import { API } from "../../constants/apiRoutes";
import { IServiceProvider } from "../../types/IServiceProvider";

export default {
  getServiceProviders(): Promise<IServiceProvider[]> {
    return api.get(API.ADMIN.GET_SERVICE_PROVIDERS);
  },
};
