import React from "react";
import { Grid, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import Header2 from "../Header2";
import SearchBar2 from "../SearchBar2";
import InternCard from "../InternMain/InternCard";

export default () => {
  return <ThemeProvider theme={theme}>
    <Header2 />
    <Grid container justify="center">
      <Grid item xs={10}>
        <SearchBar2 />
        <InternCard />
      </Grid>
    </Grid>

  </ThemeProvider>
};
