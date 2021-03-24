import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "./login.module.scss";
import { Avatar } from "@material-ui/core";
import { Formik } from "formik";
import TextInput from "../Common/TextInput";
import * as Yup from "yup";
import history from "../../../constants/history";
import { CLIENT } from "../../../constants/appRoutes";

interface IProps {}

const Login: React.FC<IProps> = (props: IProps) => {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document!.scrollingElement!.scrollTop = 0;
  }, [location]);

  return (
    <>
      <div className={styles.height}>
        <div className={styles.outside}>
          <div className={styles.container}>
            <Avatar className={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>Prijava</h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values: any) =>
                console.log(values.email + "" + values.password)
              }
              validationSchema={Yup.object().shape({
                email: Yup.string().required("Obavezno"),
                password: Yup.string().required("Obavezno"),
              })}
            >
              {(props: any) => {
                const {
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props;
                return (
                  <form>
                    <div className={styles.smallCont}>
                      <TextInput
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        id="email"
                        errors={errors}
                        touched={touched}
                        value={props.values && props.values.email}
                        placeholder="Email"
                      />
                    </div>
                    <div className={styles.smallCont}>
                      <TextInput
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        id="password"
                        type="password"
                        errors={errors}
                        touched={touched}
                        value={props.values && props.values.password}
                        placeholder="Password"
                      />
                    </div>
                    <div className={styles.smallCont}>
                      <button className={styles.loginButton}>Prijavi se</button>
                    </div>
                    <div className={styles.smallCont}>
                      <span onClick={() => history.push(CLIENT.APP.REGISTER)}>
                        Nemate račun? Registrirajte se
                      </span>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
