import React from "react";
import { Box,Grid, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import Header2 from "../Header2";
import SearchBar2 from "../SearchBar2";
import InternCard from "../InternMain/InternCard";
import NewModal2 from "../InternMain/NewModal2";









export default () => {
  return <ThemeProvider theme={theme}>
  <Header2/>
  
  
  <Grid container justify="center">
    <Grid item xs={10}>
    <SearchBar2/>
    <InternCard/>
    <InternCard/>
    <InternCard/>
    
    
    

    </Grid>
  </Grid>

  </ThemeProvider>
};
