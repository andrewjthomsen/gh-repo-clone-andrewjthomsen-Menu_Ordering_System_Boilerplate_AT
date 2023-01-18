
import React, { useState, useEffect } from 'react';
import {Link, Redirect, useNavigate, useParams} from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
//import { useJwt } from "react-jwt";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
//import useJWT from "jsonwebtoken";
//import jwt from "jsonwebtoken";

//removed {match}
const Activate = () => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        show: true
    });

    const {id} = useParams();
    //const options = {complete: true};
    //const token = jwt.decode(id,'');


   /* useEffect(() => {
        let token = match.params.token;
        // let { name } = useJwt.decode(token);
        // console.log(token);
        if (token) {
            setValues({ ...values, name, token });
        }
    }, []);*/

    //const { name, token, show } = values;

    const navigate = useNavigate();

    const clickSubmit = event => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/account-activation`,
            data: { id }
        })
            .then(response => {
                console.log('ACCOUNT ACTIVATION SUCCESS', response);
                setValues({ ...values, show: false });
                alert("Successful account activation");
                navigate('/signin')
                toast.success(response.data.message);
            })
            .catch(error => {
                console.log('ACCOUNT ACTIVATION ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    return(
        <Grid container justifyContent={"center"} alignItems={"center"}
              sx={{height: '100vh', backgroundImage: 'url(/bgimage.jpg)', backgroundSize: "cover"}}>
        <Box sx={{p: 2, bgcolor: 'white', borderRadius: '16px', boxShadow: 10, border: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <LocalPizzaIcon sx={{height: 100, width: 100, mt: 2}}/>
            <Typography>Click button below to confirm account!</Typography>
            <Button onClick={clickSubmit} sx={{my: 2}} variant={"contained"} color={"success"}>Activate!</Button>
        </Box>
        </Grid>
    )
 /*   const activationLink = () => (
        <div className="text-center">
            <h1 className="p-5">Hey {name}, Ready to activate your account?</h1>
            <button className="btn btn-outline-primary" onClick={clickSubmit}>
                Activate Account
            </button>
        </div>
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {activationLink()}
            </div>
        </Layout>
    );*/
};

export default Activate;