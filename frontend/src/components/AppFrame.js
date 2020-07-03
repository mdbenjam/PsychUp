import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import "./AppFrame.css";

function AppFrame({ sideBar, mainContent }) {
  return (
    <Grid container spacing={0} className="AppFrame">
      <Grid item xs={3}>
        {sideBar}
      </Grid>
      <Grid item xs={9}>
        {mainContent}
      </Grid>
    </Grid>
  );
}

export default AppFrame;
