import {Divider, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export default function LandingPage(){
    return(
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{height: '100vh', backgroundImage: 'url(/bgimage.jpg)', backgroundSize: "cover"}}>
            <Grid container sx={{}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                        <Button href={'/signin'} sx={{color: 'white', m: 2}}>Start Order</Button>
                        <Button href={'/about'} sx={{color: 'white', m: 2}}>About Us</Button>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid container spacing={0} justifyContent={"center"} alignItems={"center"} sx={{height: '90vh'}}>
                <Box sx={{width: '100%', maxWidth:'500', ml: 4}}>
                    <Typography variant={'h1'} gutterBottom sx={{color: '#eceff1'}}>Welcome to Beta Pizza!</Typography>
                </Box>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    )
}