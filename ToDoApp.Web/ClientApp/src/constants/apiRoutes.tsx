import React from "react";

export const API = {
  APP: {
    LOGIN: `Identity/login`,
    INITIAL_REGISTER: `ServiceProvider/initial`,
    FINISH_REGISTER: `ServiceProvider`,
  },
  METADATA: {
    GET_CATEGORIES: `Category`,
  },
  SERVICE_PROVIDER: {
    SERVICE: {
      NEW_SERVICE: `Service`,
      GET_ALL_SERVICES: `Service`,
      GET_ALL_SERVICE_PROVIDER_SERVICES: (serviceProviderId: string) =>
        `Service/service-provider/${serviceProviderId}`,
      GET_SERVICE_BY_ID: (serviceId: string) => `Service/${serviceId}`,
    },
  },
};
