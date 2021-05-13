import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "./styles.module.scss";
import { Avatar } from "@material-ui/core";
import { Formik } from "formik";
import TextInput from "../Common/TextInput";
import * as Yup from "yup";
import history from "../../../constants/history";
import { CLIENT } from "../../../constants/appRoutes";
import { IFinishRegistration } from "../../../types/IFinishRegistration";
import { RegisterService } from "../../../services/register/registerService";
import { AccountService } from "../../../services/account/accountService";
import { LoginContext } from "../../../context/login/loginContext";

interface IProps {}

const RegisterStep2: React.FC<IProps> = (props: IProps) => {
  const location = useLocation();
  const loginContext = useContext(LoginContext);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document!.scrollingElement!.scrollTop = 0;
  }, [location]);

  const RegisterUser = async (data: IFinishRegistration) => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.height}>
        <div className={styles.outside}>
          <div className={styles.container}>
            <Avatar className={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>Dovršite registraciju</h1>
            <Formik
              initialValues={{
                companyName: "",
                businessDescription: "",
              }}
              onSubmit={(values: IFinishRegistration) => RegisterUser(values)}
              validationSchema={Yup.object().shape({
                companyName: Yup.string().required("Obavezno"),
                businessDescription: Yup.string().required("Obavezno"),
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
                  <form onSubmit={handleSubmit}>
                    <div className={styles.smallCont}>
                      <TextInput
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        id="companyName"
                        errors={errors}
                        touched={touched}
                        value={props.values && props.values.companyName}
                        placeholder="Ime tvrtke/obrta"
                      />
                    </div>
                    <div className={styles.smallCont}>
                      <TextInput
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        id="businessDescription"
                        errors={errors}
                        multiline={true}
                        touched={touched}
                        value={props.values && props.values.businessDescription}
                        placeholder="Opis djelatnosti"
                      />
                    </div>
                    <div className={styles.smallCont}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.loginButton}
                      >
                        Dovrši registraciju
                      </button>
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

export default RegisterStep2;
