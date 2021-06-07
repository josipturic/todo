import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.module.scss";
import ComponentName from "../../App/Common/ComponentName/ComponentName";
import CardHeader from "../../App/Common/CardTitle/CardTitle";
import { LinearProgress, Grid, Chip } from "@material-ui/core";
import { ServiceService } from "../../../services/service/serviceService";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { IGetService } from "../../../types/IGetService";
import { parseDate } from "../../../helpers/DateTimeHelper";
import { getUserId } from "../../../helpers/AccountHelper";
import { CLIENT } from "../../../constants/appRoutes";

interface IProps {
  history: any;
}

const ListOfPersonalServices: React.FC<IProps> = (props: IProps) => {
  const [services, setServices] = useState<IGetService[]>([]);

  useEffect(() => {
    GetServices();
  }, []);

  async function GetServices() {
    var fetchedServices = await ServiceService.GetServiceProviderServices(
      getUserId()
    );
    setServices(fetchedServices);
  }

  const DeleteService = async (serviceId: string) => {
    try {
      await ServiceService.DeleteService(serviceId);
      await GetServices();
    } catch (e) {
      console.log(e.message);
    }
  };

  const CropDescription = (description: string): string => {
    var length = description.length;
    var text = description.slice();
    if (length > 300) {
      text = text.substring(0, 297).concat("...");
    }
    return text;
  };

  const NormalizeDate = (date: string): string => {
    return parseDate(date);
  };

  const EditService = (id: string) => {
    props.history.push(CLIENT.APP.SERVICE_PROVIDER.EDIT_SERVICE_WITH_ID(id));
  };

  const OpenService = (id: string) => {
    props.history.push(CLIENT.APP.SERVICE_PROVIDER.SERVICE_WITH_ID(id));
  };

  return (
    <div className={styles.outerContainer}>
      <ComponentName name="Pregled usluga" />
      <div className={styles.container}>
        <CardHeader
          title="Pregled vaših usluga"
          subtitle="Popis svih vaših usluga u sustavu"
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
                          onClick={() => OpenService(s.id)}
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
                              <p>Broj pregleda</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {s.numOfViews}
                            </Grid>
                          </Grid>
                          <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={4}>
                              <p>Datum stvaranja</p>
                            </Grid>
                            <Grid container item xs={7}>
                              {NormalizeDate(s.lastModified)}
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
                            <div onClick={() => EditService(s!.id)}>
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
                            <div onClick={() => DeleteService(s!.id)}>
                              <DeleteIcon />
                            </div>
                          </Grid>
                        </Grid>
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

export default ListOfPersonalServices;
