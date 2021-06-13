import React from "react";
import { IServiceProvider } from "../../types/IServiceProvider";
import serviceProviderApi from "./serviceProviderApi";

export class ServiceProviderservice {
  static GetServiceProviders = async (): Promise<IServiceProvider[]> => {
    return await serviceProviderApi.getServiceProviders();
  };
}
