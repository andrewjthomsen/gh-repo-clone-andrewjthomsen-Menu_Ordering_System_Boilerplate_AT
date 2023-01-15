import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

export default function Homepage(){
    return(
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{height: '100vh'}}>
            <Grid item xs={1}></Grid>
            <Grid container spacing={0} justifyContent={"center"} alignItems={"center"} sx={{height: '90vh', backgroundImage: 'url(/background.jpg)'}}>
                Homepage container.
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );
}

