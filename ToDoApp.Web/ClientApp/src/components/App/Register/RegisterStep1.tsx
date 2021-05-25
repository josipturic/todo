import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "./styles.module.scss";
import { Avatar } from "@material-ui/core";
import { Formik } from "formik";
import TextInput from "../Common/TextInput/TextInput";
import * as Yup from "yup";
import history from "../../../constants/history";
import { CLIENT } from "../../../constants/appRoutes";
import { IRegister } from "../../../types/IRegister";
import { RegisterService } from "../../../services/register/registerService";
import { AccountService } from "../../../services/account/accountService";
import { MetadataService } from "../../../services/metadata/metadataService";
import { LoginContext } from "../../../context/login/loginContext";
import { CategoryContext } from "../../../context/category/categoryContext";

interface IProps {}

const RegisterStep1: React.FC<IProps> = (props: IProps) => {
  const location = useLocation();
  const loginContext = useContext(LoginContext);
  const categoryContext = useContext(CategoryContext);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document!.scrollingElement!.scrollTop = 0;
  }, [location]);

  useEffect(() => {
    async function getCategories() {
      var response = await MetadataService.GetAllCategories();
      categoryContext.setCategories(response!);
    }

    getCategories();
  }, []);

  const RegisterUser = async (data: IRegister) => {
    var response = await RegisterService.InitialRegister(data);
    var loginData = await AccountService.SetAuthToken(response);
    loginContext.setLoginData(loginData);
    setTimeout(function () {
      history.push(CLIENT.APP.REGISTER_STEP_2);
    }, 3000);
  };

  return (
    <>
      <div className={styles.height}>
        <div className={styles.outside}>
          <div className={styles.container}>
            <Avatar className={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>Registracija</h1>
            <Formik
              initialValues={{
                email: "",
                companyName: "",
                oib: "",
                password: "",
                repeatedPassword: "",
              }}
              onSubmit={(values: IRegister) => RegisterUser(values)}
              validationSchema={Yup.object().shape({
                email: Yup.string().required("Obavezno"),
                password: Yup.string().required("Obavezno"),
                repeatedPassword: Yup.string().oneOf(
                  [Yup.ref("password"), null],
                  "Lozinke moraju biti iste"
                ),
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
                        id="oib"
                        errors={errors}
                        touched={touched}
                        value={props.values && props.values.oib}
                        placeholder="OIB tvrtke/obrta"
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
                        placeholder="Lozinka"
                      />
                    </div>
                    <div className={styles.smallCont}>
                      <TextInput
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        id="repeatedPassword"
                        type="password"
                        errors={errors}
                        touched={touched}
                        value={props.values && props.values.repeatedPassword}
                        placeholder="Ponovite lozinku"
                      />
                    </div>
                    <div className={styles.smallCont}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.loginButton}
                      >
                        Registriraj se
                      </button>
                    </div>
                    <div className={styles.smallCont}>
                      <span onClick={() => history.push(CLIENT.APP.LOGIN)}>
                        Imate račun? Prijavite se
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

export default RegisterStep1;
