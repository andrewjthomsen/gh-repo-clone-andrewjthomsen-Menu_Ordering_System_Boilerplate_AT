import React from 'react';
import Layout from '../core/Layout';
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function PrivatePage(){
    return(
    <Box sx={{bgcolor: 'white', borderRadius: '16px', boxShadow: 10, border: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
        <Typography>Private page placeholder!</Typography>
    </Box>
    )
};
/*
const PrivatePage = () => (
    <Layout>
        <h1>PrivatePage Page</h1>
    </Layout>
)

export default PrivatePage;*/