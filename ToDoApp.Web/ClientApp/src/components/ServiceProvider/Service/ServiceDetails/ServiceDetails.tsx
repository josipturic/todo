import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../../../context/login/loginContext";
import styles from "./styles.module.scss";
import ComponentName from "../../../App/Common/ComponentName/ComponentName";
import CardHeader from "../../../App/Common/CardTitle/CardTitle";
import {
  LinearProgress,
  Grid,
  Chip,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { ServiceService } from "../../../../services/service/serviceService";
import { IGetService } from "../../../../types/IGetService";
import { parseDate } from "../../../../helpers/DateTimeHelper";
import { RouteHelper } from "../../../../helpers/RouteHelper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { CLIENT } from "../../../../constants/appRoutes";

interface IProps {
  history: any;
}

const ServiceDetails: React.FC<IProps> = (props: IProps) => {
  const loginContext = useContext(LoginContext);
  const [service, setService] = useState<IGetService>();

  useEffect(() => {
    async function GetService() {
      var serviceId = RouteHelper.GetServiceId(window.location.pathname);
      var fetchedService = await ServiceService.GetServiceById(serviceId);
      setService(fetchedService!);
    }
    GetService();
  }, []);

  const NormalizeDate = (date: string): string => {
    return parseDate(date);
  };

  const EditService = (id: string) => {
    props.history.push(CLIENT.APP.SERVICE_PROVIDER.EDIT_SERVICE_WITH_ID(id));
  };

  return (
    <div className={styles.outerContainer}>
      <ComponentName name="Pregled usluge" />
      <div className={styles.container}>
        <CardHeader title="Pregled usluge" subtitle="Detalji usluge" />
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
                <div>
                  <Grid
                    container
                    item
                    xs={12}
                    className={styles.serviceCont}
                    justify="center"
                    direction="column"
                  >
                    <div className={styles.somCont}>
                      <Grid container item xs={12} spacing={1}>
                        <Grid container item xs={3}>
                          <p>Naziv usluge</p>
                        </Grid>
                        <Grid container item xs={7}>
                          {service!.name}
                        </Grid>
                      </Grid>
                      <Grid container item xs={12} spacing={1}>
                        <Grid container item xs={3}>
                          <p>Opis usluge</p>
                        </Grid>
                        <Grid container item xs={7}>
                          {service.description}
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
                          {service!.address}
                        </Grid>
                      </Grid>
                      <Grid container item xs={12} spacing={1}>
                        <Grid container item xs={3}>
                          <p>Kontakt broj</p>
                        </Grid>
                        <Grid container item xs={7}>
                          {service!.contactPhoneNumber}
                        </Grid>
                      </Grid>
                      <Grid container item xs={12} spacing={1}>
                        <Grid container item xs={3}>
                          <p>Kontakt email</p>
                        </Grid>
                        <Grid container item xs={7}>
                          {service!.contactEmail}
                        </Grid>
                      </Grid>
                      <Grid container item xs={12} spacing={1}>
                        <Grid container item xs={3}>
                          <p>Cijena usluge</p>
                        </Grid>
                        <Grid container item xs={7}>
                          {service!.servicePrice}
                        </Grid>
                      </Grid>
                      <Grid container item xs={12} spacing={1}>
                        <Grid container item xs={3}>
                          <p>Datum stvaranja</p>
                        </Grid>
                        <Grid container item xs={7}>
                          {NormalizeDate(service!.lastModified)}
                        </Grid>
                      </Grid>
                      <Grid container item xs={12} spacing={1}>
                        <Grid container item xs={3}>
                          <p>Kategorije</p>
                        </Grid>
                        <Grid container item xs={7}>
                          {service!.categories.map((value, i) => (
                            <div
                              key={i}
                              className={
                                styles.chipCont + " " + styles.chipContSelected
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
                    </div>
                    <Grid container item xs={12} spacing={1} justify="center">
                      <Grid
                        container
                        item
                        xs={1}
                        justify="center"
                        className={styles.iconCont}
                      >
                        <div onClick={() => EditService(service!.id)}>
                          <EditIcon />
                        </div>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={1}
                        justify="center"
                        className={styles.iconCont}
                      >
                        <div onClick={() => console.log("Delete")}>
                          <DeleteIcon />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
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

export default ServiceDetails;
