import React from "react";

const serviceId = ":serviceId";
const serviceProviderId = ":serviceProviderId";

export const CLIENT = {
  APP: {
    HOMEPAGE: `/`,
    LOGIN: `/login`,
    REGISTER_STEP_1: `/register/1`,
    REGISTER_STEP_2: `/register/2`,
    SERVICE_PROVIDER: {
      HOMEPAGE: `/homepage`,
      NEW_SERVICE: `/service-provider-new-service`,
      LIST_OF_SERVICES: `/service-provider-list-of-services`,
      LIST_OF_PERSONAL_SERVICES: `/service-provider-list-of-personal-services`,
      SERVICE: `/service-provider-service/${serviceId}`,
      SERVICE_WITH_ID: (id: string) => `/service-provider-service/${id}`,
      EDIT_SERVICE: `/service-provider-service-edit/${serviceId}`,
      EDIT_SERVICE_WITH_ID: (id: string) =>
        `/service-provider-service-edit/${id}`,
      PERSONAL_DATA: `/service-provider-personal-data`,
    },
    USER: {
      SERVICE_PROVIDER_SERVICES: `/user-service-provider-services/${serviceProviderId}`,
      SERVICE_PROVIDER_SERVICES_ID: (id: string) =>
        `/user-service-provider-services/${id}`,
      SERVICE: `/user-service-details/${serviceId}`,
      SERVICE_WITH_ID: (id: string) => `/user-service-details/${id}`,
      LIST_OF_ALL_SERVICES: (id: string) => `/user-service-provider-all`,
    },
    ADMIN: {
      HOMEPAGE: `/admin-homepage`,
      LIST_OF_SERVICES: `/admin-list-of-services`,
      LIST_OF_SERVICE_PROVIDERS: `/admin-list-of-service-providers`,
      LIST_OF_CATEGORIES: `/admin-list-of-categories`,
      SERVICE: `/admin-service-details/${serviceId}`,
      SERVICE_WITH_ID: (id: string) => `/admin-service-details/${id}`,
      SERVICE_PROVIDER_SERVICES: `/admin-service-provider-services/${serviceProviderId}`,
      SERVICE_PROVIDER_SERVICES_ID: (id: string) =>
        `/admin-service-provider-services/${id}`,
    },
  },
};
