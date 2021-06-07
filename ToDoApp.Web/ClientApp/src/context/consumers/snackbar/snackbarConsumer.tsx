import React from "react";
import { NotificationContext } from "../../providers/notification/notificationProvider";
import { NotificationProps } from "../../../types/INotificationProps";
import { ActionNotification } from "./../../../components/App/Notification/ActionNotification";

const SnackbarConsumer: React.FC = () => {
  return (
    <NotificationContext.Consumer>
      {(notificationContext: NotificationProps) => (
        <React.Fragment>
          <ActionNotification
            showSnackbar={notificationContext.snackbar.showSnackbar}
            message={notificationContext.snackbar.message}
            type={notificationContext.snackbar.type}
          />
        </React.Fragment>
      )}
    </NotificationContext.Consumer>
  );
};
export default SnackbarConsumer;
