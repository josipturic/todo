import React from "react";

export const API = {
  APP: {
    LOGIN: `Identity/login`,
    INITIAL_REGISTER: `ServiceProvider/initial`,
    FINISH_REGISTER: `ServiceProvider`,
  },
  METADATA: {
    GET_CATEGORIES: `Category`,
    EDIT_CATEGORY: (categoryId: number) => `Category/${categoryId}`,
    DELETE_CATEGORY: (categoryId: number) => `Category/${categoryId}`,
    ADD_NEW_CATEGORY: `Category`,
  },
  SERVICE_PROVIDER: {
    SERVICE: {
      NEW_SERVICE: `Service`,
      GET_ALL_SERVICES: `Service`,
      GET_ALL_SERVICE_PROVIDER_SERVICES: (serviceProviderId: string) =>
        `Service/service-provider/${serviceProviderId}`,
      GET_ALL_SERVICE_PROVIDER_SERVICES_FOR_USER: (serviceProviderId: string) =>
        `Service/user/${serviceProviderId}`,
      GET_SERVICE_BY_ID: (serviceId: string) => `Service/${serviceId}`,
      UPDATE_NUM_OF_VIEWS: (serviceId: string) =>
        `Service/update-num-of-views/${serviceId}`,
      UPDATE_SERVICE: (serviceId: string) =>
        `Service/${serviceId}/update-service`,
      DELETE_SERVICE: (serviceId: string) => `Service/${serviceId}`,
    },
  },
  ADMIN: {
    GET_SERVICE_PROVIDERS: `ServiceProvider`,
    GET_DASHBOARD_DATA: `Admin/dashboard`,
  },
};
