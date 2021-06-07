import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ComponentName from "../../../App/Common/ComponentName/ComponentName";
import CardHeader from "../../../App/Common/CardTitle/CardTitle";
import { LinearProgress, Grid, Chip } from "@material-ui/core";
import { ServiceService } from "../../../../services/service/serviceService";
import { MetadataService } from "../../../../services/metadata/metadataService";
import { IGetService } from "../../../../types/IGetService";
import { IEditService } from "../../../../types/IEditService";
import { RouteHelper } from "../../../../helpers/RouteHelper";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import TextInput from "../../../App/Common/TextInput/TextInput";
import { Formik } from "formik";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { ICategory } from "../../../../types/ICategory";
import { CLIENT } from "../../../../constants/appRoutes";

interface IProps {
  history: any;
}

const EditServiceDetails: React.FC<IProps> = (props: IProps) => {
  const [service, setService] = useState<IGetService>();
  const [allCategories, setAllCategories] = useState<ICategory[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  useEffect(() => {
    async function GetCategories() {
      var categories = await MetadataService.GetAllCategories();
      setAllCategories(categories!);
    }

    GetCategories();

    async function GetService() {
      var serviceId = RouteHelper.GetServiceId(window.location.pathname);
      var fetchedService = await ServiceService.GetServiceById(serviceId);
      setService(fetchedService!);
      setSelectedCategories(fetchedService!.categories.flatMap((o) => o.id));
    }

    GetService();
  }, []);

  const IsCategorySelected = (category: ICategory) => {
    return selectedCategories.some((o) => o == category.id);
  };

  const AddNewCategory = (category: ICategory) => {
    var selected = selectedCategories.slice();

    if (selected.some((o) => o == category.id)) {
      selected = selected.filter((o) => o != category.id);
    } else {
      selected.push(category.id);
    }
    setSelectedCategories(selected);
  };

  const CancelUpdate = (serviceId: string) => {
    props.history.push(CLIENT.APP.SERVICE_PROVIDER.SERVICE_WITH_ID(serviceId));
  };

  const UpdateService = async (serviceId: string, values: IEditService) => {
    var response = await ServiceService.UpdateService(serviceId, {
      ...values,
      categoryIds: selectedCategories,
    });
    if (response != null) {
      props.history.push(
        CLIENT.APP.SERVICE_PROVIDER.SERVICE_WITH_ID(serviceId)
      );
    }
  };

  return (
    <div className={styles.outerContainer}>
      <ComponentName name="Pregled usluge" />
      <div className={styles.container}>
        <CardHeader
          title="Uređivanje usluge"
          subtitle="Uređivanje detalja o usluzi"
        />
        <div className={styles.form}>
          <Grid
            container
            item
            xs={12}
            className={styles.formContainer}
            justify="center"
          >
            {!(service == undefined) ? (
              <div className={styles.lgContainer}>
                <Formik
                  initialValues={{
                    id: service.id,
                    name: service.name,
                    address: service.address,
                    servicePrice: service.servicePrice,
                    description: service.description,
                    contactEmail: service.contactEmail,
                    contactPhoneNumber: service.contactPhoneNumber,
                    categoryIds: service!.categories.flatMap((c) => c.id),
                  }}
                  onSubmit={(values: IEditService) =>
                    UpdateService(values.id, values)
                  }
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
                          spacing={2}
                          className={styles.serviceCont}
                          justify="center"
                          direction="column"
                        >
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>Naziv usluge</p>
                            </Grid>
                            <Grid container item xs={7}>
                              <TextInput
                                value={props.values.name}
                                id="name"
                                placeholder="Service Name"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                              />
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>Opis usluge</p>
                            </Grid>
                            <Grid container item xs={7}>
                              <TextInput
                                value={props.values.description}
                                id="description"
                                placeholder="Service Name"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                                multiline={true}
                                rows={13}
                              />
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            item
                            xs={12}
                            spacing={1}
                            style={{ marginTop: 5 }}
                          >
                            <Grid container item xs={3}>
                              <p>Adresa</p>
                            </Grid>
                            <Grid container item xs={7}>
                              <TextInput
                                value={props.values.address}
                                id="address"
                                placeholder="Service Name"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                              />
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>Kontakt broj</p>
                            </Grid>
                            <Grid container item xs={7}>
                              <TextInput
                                value={props.values.contactPhoneNumber}
                                id="contactPhoneNumber"
                                placeholder="Service Name"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                              />
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>Kontakt email</p>
                            </Grid>
                            <Grid container item xs={7}>
                              <TextInput
                                value={props.values.contactEmail}
                                id="contactEmail"
                                placeholder="Service Name"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                              />
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>Cijena usluge</p>
                            </Grid>
                            <Grid container item xs={7}>
                              <TextInput
                                value={props.values.servicePrice}
                                id="servicePrice"
                                placeholder="Service Name"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                              />
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>Kategorije usluge</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {allCategories.map((value, i) => (
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
                          <Grid
                            container
                            item
                            xs={12}
                            spacing={1}
                            justify="center"
                          >
                            <Grid
                              container
                              item
                              xs={1}
                              justify="center"
                              className={styles.iconCont}
                            >
                              <div>
                                <Tooltip title="Spremi promjene">
                                  <IconButton
                                    aria-label="save"
                                    type="submit"
                                    disabled={isSubmitting}
                                  >
                                    <SaveIcon />
                                  </IconButton>
                                </Tooltip>
                              </div>
                            </Grid>
                            <Grid
                              container
                              item
                              xs={1}
                              justify="center"
                              className={styles.iconCont}
                            >
                              <div onClick={() => CancelUpdate(service.id)}>
                                <Tooltip title="Odustani">
                                  <IconButton aria-label="cancel">
                                    <CancelIcon />
                                  </IconButton>
                                </Tooltip>
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            ) : (
              <div className={styles.progressCont}>
                <LinearProgress />
              </div>
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default EditServiceDetails;
