import React from "react";
import { NotificationProvider } from "./context/providers/notification/notificationProvider";

const Store = ({ children }: any) => {
  return <NotificationProvider>{children}</NotificationProvider>;
};

export default Store;
