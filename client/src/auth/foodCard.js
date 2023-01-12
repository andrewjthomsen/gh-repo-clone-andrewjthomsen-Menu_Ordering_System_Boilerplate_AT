import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material'


export default function FoodCard(){
    return(
        <Card sx={{maxWidth: 345, boxShadow: 10, border: 1, borderRadius: 5, borderColor: "#643939"}}>
            <CardActionArea>
                <CardMedia component={"img"} height={"140"} image="img.png" alt={"atw"}/>
                <CardContent>
                    <Typography gutterbottom variant={"h5"} component={"div"}>
                        The ATW
                    </Typography>
                    <Typography variant={"body2"} color={"text.secondary"}>
                        Hideaway Red Sauce, Mozzarella, Pepperoni, Sausage, Black Olives, Green Bell Peppers, Mushrooms, Red Onion
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button size={"small"} color={"primary"}>Customize</Button>
                <Button size={"small"} color={"primary"}>Order</Button>
            </CardActions>
        </Card>
    )
}