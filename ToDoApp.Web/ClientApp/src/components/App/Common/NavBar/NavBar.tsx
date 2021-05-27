import React, { useState, useEffect, ReactNode } from "react";
import styles from "./navbar.module.scss";
import IconButton from "@material-ui/core/IconButton";
import {
  List,
  ListItemText,
  Drawer,
  Divider,
  ListItemIcon,
  Box,
  Grid,
} from "@material-ui/core";
import { Link as RouterLink, Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ChevronRightIcon from "@material-ui/icons/MoreVert";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import RegisterUser from "@material-ui/icons/PersonAddOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import LogOutIcon from "@material-ui/icons/ExitToAppOutlined";
import clsx from "clsx";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import MoneyIcon from "@material-ui/icons/Money";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./NavBar.animations";
import { useTheme } from "@material-ui/core/styles";
import history from "../../../../constants/history";
import { CLIENT } from "../../../../constants/appRoutes";
import {
  isAdmin,
  isAuthenticated,
  isServiceProvider,
} from "../../../../helpers/AccountHelper";

interface IProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  history: any;
  children?: ReactNode;
}

const NavBar: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const [admin, setIsAdmin] = useState(isAdmin() && isAuthenticated());
  const [serviceProvder, setServiceProvider] = useState(
    isServiceProvider() && isAuthenticated()
  );
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    window.addEventListener("touchmove", handleMove);
  }, []);

  function closeNavBar() {
    if (window.innerWidth <= 600) setOpen(false);
  }

  const logout = () => {
    history.push("/");
  };

  const handleMove = (ev: any) => {
    setOpen(ev.touches[0].clientX < 0);
  };

  return (
    <div className={styles.Root}>
      <CssBaseline />
      <div
        className={clsx(classes.appBar, styles.MenuBar, {
          [classes.appBarShift]: open,
        })}
      >
        <IconButton onClick={() => setOpen(!open)}>
          {open ? <MenuIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Drawer
        variant="permanent"
        className={clsx(
          styles.Drawer,
          {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          },
          !open && styles.DrawerClose
        )}
        classes={{
          paper: clsx(
            styles.Img,
            styles.Drawer,
            {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            },
            !open && styles.DrawerClose
          ),
        }}
        open={open}
      >
        <div className={`${styles.Home} ${styles.Toolbar}`}>
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
        <Divider variant="middle" />
        <div>
          <List>
            {admin && (
              <ListItem
                button
                component={RouterLink}
                to="/admin/dashboard"
                onClick={() => closeNavBar()}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>
            )}
            {admin && (
              <ListItem
                button
                component={RouterLink}
                to="/admin/list-of-users"
                onClick={() => closeNavBar()}
              >
                <ListItemIcon>
                  <PeopleOutlineIcon />
                </ListItemIcon>
                <ListItemText>Pregled osoba</ListItemText>
              </ListItem>
            )}
            {admin && (
              <ListItem
                button
                component={RouterLink}
                to="/admin/create-user"
                onClick={() => closeNavBar()}
              >
                <ListItemIcon>
                  <RegisterUser />
                </ListItemIcon>
                <ListItemText>Dodaj osobu</ListItemText>
              </ListItem>
            )}
            {admin && (
              <ListItem
                button
                component={RouterLink}
                to="/admin/list-of-expenses"
                onClick={() => closeNavBar()}
              >
                <ListItemIcon>
                  <MoneyIcon />
                </ListItemIcon>
                <ListItemText>Pregled usluga</ListItemText>
              </ListItem>
            )}

            {admin && (
              <ListItem
                button
                component={RouterLink}
                to="/admin/new-expense"
                onClick={() => closeNavBar()}
              >
                <ListItemIcon>
                  <LocalAtmIcon />
                </ListItemIcon>
                <ListItemText>Pregled davatelja usuluga</ListItemText>
              </ListItem>
            )}
            {serviceProvder && (
              <ListItem
                button
                component={RouterLink}
                to={CLIENT.APP.SERVICE_PROVIDER.NEW_SERVICE}
                onClick={() => closeNavBar()}
              >
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText>Dodaj uslugu</ListItemText>
              </ListItem>
            )}
            {serviceProvder && (
              <ListItem
                button
                component={RouterLink}
                to={CLIENT.APP.SERVICE_PROVIDER.LIST_OF_PERSONAL_SERVICES}
                onClick={() => closeNavBar()}
              >
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText>Pregled vaših usluga</ListItemText>
              </ListItem>
            )}
            {serviceProvder && (
              <ListItem
                button
                component={RouterLink}
                to={CLIENT.APP.SERVICE_PROVIDER.LIST_OF_SERVICES}
                onClick={() => closeNavBar()}
              >
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText>Pregled svih usluga</ListItemText>
              </ListItem>
            )}
            {serviceProvder && (
              <ListItem
                button
                component={RouterLink}
                to={CLIENT.APP.SERVICE_PROVIDER.PERSONAL_DATA}
                onClick={() => closeNavBar()}
              >
                <ListItemIcon>
                  <SettingsApplicationsIcon />
                </ListItemIcon>
                <ListItemText>Pregled osobnih podataka</ListItemText>
              </ListItem>
            )}
          </List>
          <Divider variant="middle" />
          <List>
            <ListItem button onClick={logout} component={RouterLink} to="/">
              <ListItemIcon className={styles.Icon}>
                <LogOutIcon style={{ transform: "rotate(180deg)" }} />
              </ListItemIcon>
              <ListItemText>Odjavi se</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Box p={{ xs: 2 }} flexGrow={1}>
        <Grid
          className={styles.Content}
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            {props.children}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default NavBar;
