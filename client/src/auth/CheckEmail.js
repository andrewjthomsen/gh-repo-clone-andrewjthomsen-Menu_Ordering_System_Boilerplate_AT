import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function CheckEmail(){
    return(
        <Grid container justifyContent={"center"} alignItems={"center"}
              sx={{height: '100vh', backgroundImage: 'url(/bgimage.jpg)', backgroundSize: "cover"}}>
            <Box sx={{p: 2, bgcolor: 'white', borderRadius: '16px', boxShadow: 10, border: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                <LocalPizzaIcon sx={{height: 100, width: 100, mt: 2}}/>
                <Typography>Check your email to verify your account!</Typography>
            </Box>
        </Grid>
    )
}