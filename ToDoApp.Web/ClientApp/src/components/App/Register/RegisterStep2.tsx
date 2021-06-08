import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { CLIENT } from "../../../constants/appRoutes";
import history from "../../../constants/history";

interface IProps {}

const RegisterStep2: React.FC<IProps> = (props: IProps) => {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document!.scrollingElement!.scrollTop = 0;
  }, [location]);

  useEffect(() => {
    setTimeout(function () {
      history.push(CLIENT.APP.SERVICE_PROVIDER.LIST_OF_PERSONAL_SERVICES);
    }, 3000);
  }, []);

  return (
    <>
      <div className={styles.height}>
        <div className={styles.outside}>
          <div className={styles.container + " " + styles.transparent}>
            <div className={styles.textLg}>Vaša registracija je uspješna!</div>
            <div className={styles.textMd}>
              Usmjerit ćemo vas na početnu stranicu...
            </div>
            <div className={styles.checkIcon}>
              <CheckCircleIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterStep2;
