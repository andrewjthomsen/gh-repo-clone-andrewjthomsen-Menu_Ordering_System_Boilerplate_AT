import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import FoodCard from "./foodCard";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function PizzaPage() {
    return (
        <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} sx={{bgcolor: "", height: '100vh'}}>
            <Grid item xs={1}></Grid>
            <Grid container justifyContent={"center"} alignItems={"center"}  sx={{mt: 5}} item xs={10}>
                    <Box sx={{ flexGrow: 1 }}>
                            <AppBar position="static" sx={{height: 75, bgcolor: "#160707"}}>
                                    <Toolbar>
                                            <IconButton
                                                size="large"
                                                edge="start"
                                                color="inherit"
                                                aria-label="menu"
                                                sx={{ mr: 2 }}
                                            >
                                                    <MenuIcon />
                                            </IconButton>
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                    Specialty Pizzas
                                            </Typography>
                                            <IconButton
                                                size="large"
                                                edge="start"
                                                color="inherit"
                                                sx={{ mr: 2 }}
                                            ><ShoppingCartIcon/></IconButton>
                                    </Toolbar>
                            </AppBar>
                    </Box>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}><FoodCard/></Grid>
            <Grid item xs={2}><FoodCard/></Grid>
            <Grid item xs={2}><FoodCard/></Grid>
            <Grid item xs={2}><FoodCard/></Grid>
            <Grid item xs={2}><FoodCard/></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}><FoodCard/></Grid>
            <Grid item xs={2}><FoodCard/></Grid>
            <Grid item xs={2}><FoodCard/></Grid>
            <Grid item xs={2}><FoodCard/></Grid>
            <Grid item xs={2}><FoodCard/></Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );
}