import React from "react";

export const CLIENT = {
  APP: {
    HOMEPAGE: `/`,
    LOGIN: `/login`,
    REGISTER_STEP_1: `/register/1`,
    REGISTER_STEP_2: `/register/2`,
    SERVICE_PROVIDER: {
      HOMEPAGE: `/homepage`,
      NEW_SERVICE: `/service-provider/new-service`,
      LIST_OF_SERVICES: `/service-provider/list-of-services`,
      SERVICE: (serviceId: string) => `/service-provider/service/${serviceId}`,
    },
  },
};
