import React from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import Header from "../Header";
import JobCard from "../JobMain/JobCard";
import SearchBar from "../SearchBar";
import NewModal from "../JobMain/NewModal";

export default function Jobs() {
  return (
    < ThemeProvider theme={theme} >
      < Header />
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar />
          <JobCard />
        </Grid>
      </Grid>
    </ThemeProvider >
  )
};