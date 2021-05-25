import React from "react";
import styles from "./newservice.module.scss";
import ComponentName from "../../App/Common/ComponentName/ComponentName";
import CardHeader from "../../App/Common/CardTitle/CardTitle";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormControl, Grid, InputLabel } from "@material-ui/core";
import TextInput from "../../App/Common/TextInput/TextInput";
import { ICategory } from "../../../types/ICategory";

interface IProps {}

const NewService: React.FC<IProps> = (props: IProps) => {
  const categories: ICategory[] = [
    { id: 1, categoryName: "Nova kategorija" },
    { id: 2, categoryName: "Nova kategorija" },
    { id: 3, categoryName: "Nova kategorija" },
  ];

  return (
    <div className={styles.outerContainer}>
      <ComponentName name="Nova usluga" />
      <div className={styles.container}>
        <CardHeader title="Usluga" subtitle="Unesite novu uslugu" />
        <div className={styles.form}>
          <Formik
            initialValues={{
              id: "",
              payerId: "",
              expenseType: "",
              expenseDescription: "",
              expenseAmount: "",
            }}
            onSubmit={(values: any, { resetForm }) => {
              console.log(values);
            }}
            validationSchema={Yup.object().shape({
              expenseType: Yup.string().required("Obavezno"),
              expenseDescription: Yup.string().required("Obavezno"),
              expenseAmount: Yup.string().required("Obavezno"),
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
                      <Grid container item xs={3}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="expenseAmount"
                          errors={errors}
                          touched={touched}
                          value={props.values && props.values.expenseAmount}
                          placeholder="Ime usluge"
                        />
                      </Grid>
                      <Grid container item xs={3}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="expenseAmount"
                          errors={errors}
                          type="number"
                          touched={touched}
                          value={props.values && props.values.expenseAmount}
                          placeholder="Iznos (kn)"
                        />
                      </Grid>
                      <Grid container item xs={3}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="expenseAmount"
                          errors={errors}
                          type="number"
                          touched={touched}
                          value={props.values && props.values.expenseAmount}
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
                          id="expenseAmount"
                          errors={errors}
                          touched={touched}
                          value={props.values && props.values.expenseAmount}
                          placeholder="Cijena usluge"
                        />
                      </Grid>
                      <Grid container item xs={3}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="expenseAmount"
                          errors={errors}
                          type="number"
                          touched={touched}
                          value={props.values && props.values.expenseAmount}
                          placeholder="Kontakt email"
                        />
                      </Grid>
                      <Grid container item xs={3}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="expenseAmount"
                          errors={errors}
                          type="number"
                          touched={touched}
                          value={props.values && props.values.expenseAmount}
                          placeholder="Kontakt mob/tel broj"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                      <Grid container item xs={6}>
                        <TextInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          id="expenseDescription"
                          multiline={true}
                          errors={errors}
                          touched={touched}
                          value={
                            props.values && props.values.expenseDescription
                          }
                          placeholder="Opis usluge"
                        />
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

export default NewService;
