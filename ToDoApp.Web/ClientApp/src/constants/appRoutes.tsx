import React from "react";

const serviceId = ":serviceId";

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
  },
};
