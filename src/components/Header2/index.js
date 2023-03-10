import React from 'react';
import { Box, Grid, Typography, } from "@mui/material";
import NewModal2 from '../InternMain/NewModal2';
import image from '../../assests/a.jpg'

export default function Header2() {
    return (
        <div style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no repeat"

        }}>
            <Box py={12} color="white" >
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h4">Internship here</Typography>
                            <NewModal2 />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}