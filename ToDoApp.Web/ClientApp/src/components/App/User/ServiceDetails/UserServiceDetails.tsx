import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.module.scss";
import ComponentName from "../../../App/Common/ComponentName/ComponentName";
import CardHeader from "../../../App/Common/CardTitle/CardTitle";
import { LinearProgress, Grid, Chip } from "@material-ui/core";
import { ServiceService } from "../../../../services/service/serviceService";
import { IGetService } from "../../../../types/IGetService";
import { parseDate } from "../../../../helpers/DateTimeHelper";
import { RouteHelper } from "../../../../helpers/RouteHelper";
import { CLIENT } from "../../../../constants/appRoutes";

interface IProps {
  history: any;
}

const UserServiceDetails: React.FC<IProps> = (props: IProps) => {
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

  const OpenAllServices = (id: string) => {
    props.history.push(CLIENT.APP.USER.SERVICE_PROVIDER_SERVICES_ID(id));
  };

  return (
    <div className={styles.outerContainer}>
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
              <>
                <div className={styles.lgContainer}>
                  <div className={styles.title}>Podaci o usluzi</div>
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
                          <Grid
                            container
                            item
                            xs={7}
                            className={styles.description}
                          >
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
                            <p>Datum objave</p>
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
                                  styles.chipCont +
                                  " " +
                                  styles.chipContSelected
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
                    </Grid>
                  </div>
                </div>
                <div className={styles.lgContainer}>
                  <div className={styles.title}>Podaci o oglašivaču</div>
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
                            <p>Ime korisnika</p>
                          </Grid>
                          <Grid container item xs={7}>
                            {service!.serviceProvider.companyName}
                          </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                          <Grid container item xs={3}>
                            <p>OIB</p>
                          </Grid>
                          <Grid container item xs={7}>
                            {service.serviceProvider.oib}
                          </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                          <Grid container item xs={3}>
                            <p>Kontakt broj</p>
                          </Grid>
                          <Grid container item xs={7}>
                            {service!.serviceProvider.email}
                          </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                          <Grid container item xs={3}>
                            <p>Kontakt email</p>
                          </Grid>
                          <Grid container item xs={7}>
                            {service!.serviceProvider.email}
                          </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                          <Grid container item xs={7}>
                            <button
                              className={styles.addButton}
                              onClick={() =>
                                OpenAllServices(service.serviceProvider.id)
                              }
                            >
                              Ostali oglasi ovog oglašivača
                            </button>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </div>
              </>
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

export default UserServiceDetails;
