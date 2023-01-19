import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ForgotPassword = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
        buttonText: 'Request PW Reset Link'
    });

    const { email, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        console.log('Send request');
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/forgot-password`,
            data: { email }
        })
            .then(response => {
                console.log('FORGOT PASSWORD SUCCESS', response);
               toast.success(response.data.message);
               setValues({...values, buttonText: 'Requested'})
            })
            .catch(error => {
                console.log('FORGOT PASSWORD ERROR', error.response.data);
                toast.error(error.response.data.error);
                setValues({ ...values, buttonText: 'Submit' });
            });
    };

    return(
        <Grid container justifyContent={"center"} alignItems={"center"}
              sx={{height: '100vh', backgroundImage: 'url(/bgimage.jpg)', backgroundSize: "cover"}}>
            <Box sx={{p: 2, bgcolor: 'white', borderRadius: '16px', boxShadow: 10, border: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                <LocalPizzaIcon sx={{height: 100, width: 100, mt: 2}}/>
                <TextField onChange={handleChange('email')} value={email} sx={{m: 2, width: 300}}
                           id="outlined-basic" label="Email" variant="outlined"/>
                <Button onClick={clickSubmit} sx={{my: 2}} variant={"contained"} color={"success"}>Reset My Password!</Button>
            </Box>
        </Grid>
    )

    /*const passwordForgotForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
            </div>
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                <h1 className="p-5 text-center">Forgot Password</h1>
                {passwordForgotForm()}
                <br />
                <Link to="/auth/password/forgot" className="btn btn-sm btn-outline-danger">
                    Forgot Password
                </Link>
            </div>
        </Layout>
    );*/
};

export default ForgotPassword;