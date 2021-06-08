import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.module.scss";
import ComponentName from "../../App/Common/ComponentName/ComponentName";
import CardHeader from "../../App/Common/CardTitle/CardTitle";
import { LinearProgress, Grid, Chip } from "@material-ui/core";
import { ServiceService } from "../../../services/service/serviceService";
import { IGetService } from "../../../types/IGetService";
import { parseDate } from "../../../helpers/DateTimeHelper";

interface IProps {}

const ListOfServices: React.FC<IProps> = (props: IProps) => {
  const [services, setServices] = useState<IGetService[]>([]);

  useEffect(() => {
    async function GetServices() {
      var fetchedServices = await ServiceService.GetAllServices();
      setServices(fetchedServices);
    }
    GetServices();
  }, []);

  const CropDescription = (description: string): string => {
    var length = description.length;
    var text = description.slice();
    if (length > 300) {
      text = text.substring(0, 297).concat("...");
    }
    return text;
  };

  const UpdateNumOfViews = async (serviceId: string) => {
    await ServiceService.UpdateNumOfViews(serviceId);
  };

  const NormalizeDate = (date: string): string => {
    return parseDate(date);
  };

  return (
    <div className={styles.outerContainer}>
      <ComponentName name="Pregled usluga" />
      <div className={styles.container}>
        <CardHeader
          title="Pregled svih usluga"
          subtitle="Popis svih usluga u sustavu"
        />
        <div className={styles.form}>
          <Grid
            container
            item
            xs={12}
            className={styles.formContainer}
            justify="center"
          >
            {services.length > 0 ? (
              <>
                {services.map((s, i) => (
                  <>
                    <div key={i} className={styles.lgContainer}>
                      <Grid
                        container
                        item
                        xs={12}
                        className={styles.serviceCont}
                        justify="center"
                        direction="column"
                      >
                        <div
                          onClick={() => UpdateNumOfViews(s.id)}
                          className={styles.somCont}
                        >
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={4}>
                              <p>Naziv usluge</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {s.name}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={4}>
                              <p>Opis usluge</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {CropDescription(s.description)}
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            item
                            xs={12}
                            spacing={1}
                            style={{ marginTop: 5 }}
                          >
                            <Grid container item xs={4}>
                              <p>Adresa</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {s.address}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={4}>
                              <p>Kontakt broj</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {s.contactPhoneNumber}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={4}>
                              <p>Kontakt email</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {s.contactEmail}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={4}>
                              <p>Cijena usluge</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {s.servicePrice}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={4}>
                              <p>Datum stvaranja</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {NormalizeDate(s.created)}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={4}>
                              <p>Kategorije</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {s.categories.map((value, i) => (
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
                  </>
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

export default ListOfServices;
