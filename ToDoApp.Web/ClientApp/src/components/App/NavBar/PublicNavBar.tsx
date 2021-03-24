import React from "react";
import styles from "./styles.module.scss";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import GavelIcon from "@material-ui/icons/Gavel";
import { RouteHelper } from "../../../helpers/RouteHelper";
import { CLIENT } from "../../../constants/appRoutes";
import { withRouter } from "react-router-dom";
import history from "../../../constants/history";

interface IProps {
  history: any;
}

const PublicNavBar: React.FC<IProps> = (props: IProps) => {
  const isLogin = RouteHelper.IsLogin(window.location.pathname);
  const isRegister = RouteHelper.IsRegister(window.location.pathname);
  return (
    <div className={styles.container}>
      <div className={styles.firstDiv}>
        <div className={styles.pointer} onClick={() => history.push("/")}>
          <GavelIcon />
          <b>ToDoApp</b>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <div style={{ marginRight: "11px" }} className={styles.pointer}>
          <HomeIcon />
          <p>Početna</p>
        </div>
        {isRegister && (
          <div
            className={styles.pointer}
            onClick={() => history.push(CLIENT.APP.LOGIN)}
          >
            <PersonIcon />
            <p>Prijava</p>
          </div>
        )}
        {isLogin && (
          <div
            className={styles.pointer}
            onClick={() => history.push(CLIENT.APP.REGISTER)}
          >
            <PersonIcon />
            <p>Registracija</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(PublicNavBar);
