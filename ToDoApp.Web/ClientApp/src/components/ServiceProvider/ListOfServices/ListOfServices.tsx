import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../../context/login/loginContext";
import styles from "./newservice.module.scss";
import ComponentName from "../../App/Common/ComponentName/ComponentName";
import CardHeader from "../../App/Common/CardTitle/CardTitle";
import { Formik } from "formik";
import * as Yup from "yup";
import { Chip, FormControl, Grid, InputLabel } from "@material-ui/core";
import TextInput from "../../App/Common/TextInput/TextInput";
import { ICategory } from "../../../types/ICategory";
import { IService } from "../../../types/IService";
import { ServiceService } from "../../../services/service/serviceService";

interface IProps {}

const ListOfServices: React.FC<IProps> = (props: IProps) => {
  const loginContext = useContext(LoginContext);
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    async function GetServices() {
      var fetchedServices = await ServiceService.GetAllServices();
      console.log(fetchedServices);
      setServices(fetchedServices);
    }
    GetServices();
  });

  return (
    <div className={styles.outerContainer}>
      <ComponentName name="Nova usluga" />
      <div className={styles.container}>
        <CardHeader title="Usluga" subtitle="Unesite novu uslugu" />
        <div className={styles.form}>
          <Formik
            initialValues={{
              name: "",
              address: "",
              servicePrice: "",
              description: "",
              contactEmail: "",
              contactPhoneNumber: "",
              categoryIds: [],
            }}
            onSubmit={(values: IService) => AddNewService(values)}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Obavezno"),
              address: Yup.string().required("Obavezno"),
              servicePrice: Yup.string().required("Obavezno"),
              contactEmail: Yup.string().required("Obavezno"),
              contactPhoneNumber: Yup.string().required("Obavezno"),
              description: Yup.string().required("Obavezno"),
            })}
          >
            {(props: any) => {
              const {
                touched,
                errors,
                isSubmitting,
                handleChange,
                setFieldValue,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    item
                    xs={12}
                    className={styles.formContainer}
                    justify="center"
                    spacing={4}
                  >
                    <Grid container item xs={12} spacing={2}>
                      {/* <Grid container item xs={3}>
                        <FormControl
                          variant="outlined"
                          className={
                            classes.formControl + " " + styles.formControl
                          }
                        >
                          <InputLabel
                            id="demo-simple-select-outlined-label"
                            className={styles.inputLabel}
                          >
                            Vrste troška
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={props.values && props.values.expenseType}
                            onChange={(e) =>
                              setFieldValue("expenseType", e.target.value)
                            }
                            label="Expense type"
                          >
                            {expenseTypes.map((expense, i) => (
                              <MenuItem key={i} value={expense.value}>
                                {expense.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid> */}
                      <Grid container item xs={6}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="name"
                          errors={errors}
                          touched={touched}
                          value={props.values && props.values.name}
                          placeholder="Ime usluge"
                        />
                      </Grid>
                      <Grid container item xs={3}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="address"
                          errors={errors}
                          touched={touched}
                          value={props.values && props.values.address}
                          placeholder="Adresa"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                      {/* <Grid container item xs={3}>
                        <FormControl
                          variant="outlined"
                          className={
                            classes.formControl + " " + styles.formControl
                          }
                        >
                          <InputLabel
                            id="demo-simple-select-outlined-label"
                            className={styles.inputLabel}
                          >
                            Vrste troška
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={props.values && props.values.expenseType}
                            onChange={(e) =>
                              setFieldValue("expenseType", e.target.value)
                            }
                            label="Expense type"
                          >
                            {expenseTypes.map((expense, i) => (
                              <MenuItem key={i} value={expense.value}>
                                {expense.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid> */}
                      <Grid container item xs={3}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="contactPhoneNumber"
                          errors={errors}
                          touched={touched}
                          value={
                            props.values && props.values.contactPhoneNumber
                          }
                          placeholder="Kontakt mob./tel. broj"
                        />
                      </Grid>
                      <Grid container item xs={3}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="contactEmail"
                          errors={errors}
                          touched={touched}
                          value={props.values && props.values.contactEmail}
                          placeholder="Kontakt email"
                        />
                      </Grid>
                      <Grid container item xs={3}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="servicePrice"
                          errors={errors}
                          touched={touched}
                          value={props.values && props.values.servicePrice}
                          placeholder="Cijena usluge"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                      <Grid container item xs={6}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="description"
                          multiline={true}
                          errors={errors}
                          touched={touched}
                          value={props.values && props.values.description}
                          placeholder="Opis usluge"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                      <Grid item xs={12}>
                        <p className={styles.paragraph}>
                          Odaberite područje djelatnosti
                        </p>
                      </Grid>
                      <Grid item xs={12}>
                        {categories.map((value, i) => (
                          <div
                            key={i}
                            className={
                              IsCategorySelected(value)
                                ? styles.chipCont +
                                  " " +
                                  styles.chipContSelected
                                : styles.chipCont
                            }
                            onClick={() =>
                              AddNewCategory({
                                id: value.id,
                                categoryName: value.categoryName,
                              })
                            }
                          >
                            <Chip
                              label={value.categoryName}
                              clickable
                              color="primary"
                            />
                          </div>
                        ))}
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} justify="flex-end">
                      <Grid item container xs={2}>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={styles.addButton}
                        >
                          Dodaj
                        </button>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ListOfServices;
