import { Grid, LinearProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { IServiceProvider } from "../../../../types/IServiceProvider";
import CardHeader from "../../Common/CardTitle/CardTitle";
import styles from "./styles.module.scss";
import { ServiceProviderservice } from "../../../../services/serviceProvider/serviceProviderservice";
import { CLIENT } from "../../../../constants/appRoutes";
import { parseDate } from "../../../../helpers/DateTimeHelper";

interface IProps {
  history: any;
}

const ListOfServiceProviders: React.FC<IProps> = (props: IProps) => {
  const [serviceProviders, setServiceProviders] = useState<IServiceProvider[]>(
    []
  );

  useEffect(() => {
    GetServiceProviders();
  }, []);

  async function GetServiceProviders() {
    var providers = await ServiceProviderservice.GetServiceProviders();
    setServiceProviders(providers);
  }

  const OpenAllServices = (id: string) => {
    props.history.push(CLIENT.APP.ADMIN.SERVICE_PROVIDER_SERVICES_ID(id));
  };

  const SendEmail = (email: string) => {
    window.open(`mailto:${email}`);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <CardHeader
          title="Pregled pružatelja usluga"
          subtitle="Pregled svih pružatelja usluga registriranih u sustavu"
        />
        <div className={styles.form}>
          <Grid
            container
            item
            xs={12}
            className={styles.formContainer}
            justify="center"
          >
            {serviceProviders.length > 0 ? (
              <>
                {serviceProviders.map((sp, i) => (
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
                              <p>Ime korisnika</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {sp.companyName}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>Datum registracije</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {parseDate(sp.dateRegistered)}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>OIB</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {sp.oib}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>Kontakt broj</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {sp.email}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>Kontakt email</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {sp.email}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={3}>
                              <p>Broj oglasa</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {sp.numOfServices}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={7}>
                              <button
                                className={styles.addButton}
                                onClick={() => OpenAllServices(sp.id)}
                              >
                                Svi oglasi ovog oglašivača
                              </button>
                            </Grid>
                            <Grid container item xs={4}>
                              <button
                                className={styles.addButton}
                                onClick={() => SendEmail(sp.email)}
                              >
                                Pošalji email
                              </button>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </div>
                ))}
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

export default ListOfServiceProviders;
