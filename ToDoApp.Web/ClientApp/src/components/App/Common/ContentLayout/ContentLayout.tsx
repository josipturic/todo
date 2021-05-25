import React, { ReactNode } from "react";
import { Grid } from "@material-ui/core";

interface IProps {
  children: ReactNode;
}

const ContentLayout: React.FC<IProps> = (props: IProps) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {props.children}
    </Grid>
  );
};

export default ContentLayout;
