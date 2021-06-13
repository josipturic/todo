import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import CardHeader from "../../Common/CardTitle/CardTitle";
import styles from "./styles.module.scss";
import { IAdminDashboardData } from "../../../../types/IAdminDashboardData";
import { InitialAdminDashboardData } from "../../../../types/IAdminDashboardData";
import { AdminService } from "../../../../services/admin/adminService";

interface IProps {
  history: any;
}

const AdminHomepage: React.FC<IProps> = (props: IProps) => {
  const [data, setData] = useState<IAdminDashboardData>(
    InitialAdminDashboardData
  );

  useEffect(() => {
    GetDashboardData();
  }, []);

  async function GetDashboardData() {
    var data = await AdminService.GetDashboardData();
    console.log(data);
    setData(data);
  }

  const ViewAllSPs = () => {};

  const ViewAllServices = () => {};

  const ViewService = (id: number) => {};

  const ViewSP = (id: string) => {};

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <CardHeader
          title="Pregled statistike"
          subtitle="Pregled statistike za korisnike sustava i ponuđene usluge"
        />
        <div className={styles.form}>
          <Grid
            container
            item
            xs={12}
            className={styles.formContainer}
            justify="center"
            alignItems="center"
          >
            <div className={styles.somCont}>
              <Grid container item xs={12} spacing={1} alignItems="center">
                <Grid
                  container
                  item
                  xs={4}
                  alignItems="center"
                  className={styles.textTitle}
                >
                  Broj pružatelja usluga u sustavu
                </Grid>
                <Grid
                  container
                  item
                  xs={1}
                  alignItems="center"
                  className={styles.textData}
                >
                  {data.numOfServiceProviders}
                </Grid>
                <Grid container item xs={2} alignItems="center">
                  <button
                    className={styles.addButton}
                    onClick={() => ViewAllSPs()}
                  >
                    Pogledaj sve
                  </button>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={1} alignItems="center">
                <Grid
                  container
                  item
                  xs={4}
                  alignItems="center"
                  className={styles.textTitle}
                >
                  Broj usluga u sustavu
                </Grid>
                <Grid
                  container
                  item
                  xs={1}
                  alignItems="center"
                  className={styles.textData}
                >
                  {data.numofServices}
                </Grid>
                <Grid container item xs={2} alignItems="center">
                  <button
                    className={styles.addButton}
                    onClick={() => ViewAllServices()}
                  >
                    Pogledaj sve
                  </button>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={1} alignItems="center">
                <Grid
                  container
                  item
                  xs={4}
                  alignItems="center"
                  className={styles.textTitle}
                >
                  Usluga s najviše pregleda
                </Grid>
                <Grid
                  container
                  item
                  xs={3}
                  alignItems="center"
                  className={styles.textData}
                >
                  {data.serviceWithMostViewsTtile}
                </Grid>
                <Grid container item xs={2} alignItems="center">
                  <button
                    className={styles.addButton}
                    onClick={() => ViewService(data.serviceWithMostViewsId)}
                  >
                    Pogledaj uslugu
                  </button>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={1} alignItems="center">
                <Grid
                  container
                  item
                  xs={4}
                  alignItems="center"
                  className={styles.textTitle}
                >
                  Pružatelj usluge s najviše usluga
                </Grid>
                <Grid
                  container
                  item
                  xs={3}
                  alignItems="center"
                  className={styles.textData}
                >
                  {data.serviceProviderWihtMostServicesName}
                </Grid>
                <Grid container item xs={2} alignItems="center">
                  <button
                    className={styles.addButton}
                    onClick={() =>
                      ViewSP(data.serviceProviderWihtMostServicesId)
                    }
                  >
                    Pogledaj sve usluge
                  </button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
