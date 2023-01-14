// import React, { useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import Layout from '../core/Layout';
// import axios from 'axios';
// import { authenticate, authentice } from './helpers';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';

// export default function Login(){
//     const [values, setValues] = useState({
//         email: '',
//         password: '',
//         buttonText: ''
//     });
//     const { email, password, buttonText } = values;

//     const handleChange = name => event => {
//         // console.log(event.target.value);
//         setValues({ ...values, [name]: event.target.value });
//     };
//     const clickSubmit = event => {
//         console.log("Button was pressed");
//         event.preventDefault();
//         setValues({ ...values, buttonText: 'Submitting' });
//         axios({
//             method: 'POST',
//             url: `${process.env.REACT_APP_API}/signin`,
//             data: { email, password }
//         })
//             .then(response => {
//                 console.log('SIGNIN SUCCESS', response);
//                 // save the response (user, token) localstorage/cookie
//                 authenticate(response, () => {

//                 })
//                 setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
//                 toast.success(`Hey ${response.data.user.name}, Welcome back!`);
//             })
//             .catch(error => {
//                 console.log('SIGNIN ERROR', error.response.data);
//                 setValues({ ...values, buttonText: 'Submit' });
//                 toast.error(error.response.data.error);
//             });
//     };
//     return (
//         <Grid container justifyContent={"center"} alignItems={"center"} sx={{height: '100vh'}}>
//             <Grid item xs={1}></Grid>
//             <Grid container spacing={0} justifyContent={"center"} alignItems={"center"} sx={{height: '90vh', backgroundImage: 'url(/background.jpg)'}}>
//                 <Box sx={{bgcolor: 'white', borderRadius: '16px', boxShadow: 10, border: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
//                     <TakeoutDiningIcon sx={{height: 100, width: 100, mt: 2}}/>
//                     <TextField onChange={handleChange('email')} value={email} sx={{m: 2, width: 300}} id="outlined-basic" label="Username" variant="outlined"/>
//                     <TextField onChange={handleChange('password')} value={password} sx={{m: 2, width: 300}} id="outlined-basic" label="Password" variant="outlined"/>
//                     <Button onClick={clickSubmit} sx={{m: 3}} variant={"contained"} color={"success"}>Login</Button>
//                     <Button href={'/signup'} sx={{textTransform: 'capitalize', mb: 2}}>Create a free account!</Button>
//                 </Box>
//             </Grid>
//             <Grid item xs={1}></Grid>
//         </Grid>
//     );
// }

import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import { authenticate, isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: ''
    });

    const { email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: { email, password }
        })
            .then(response => {
                console.log('SIGNIN SUCCESS', response);
                // save the response (user, token) localstorage/cookie
                authenticate(response, () => {
                    setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                    toast.success(`Hey ${response.data.user.name}, Welcome back!`);
                });
            })
            .catch(error => {
                console.log('SIGNIN ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const signinForm = () => (
        <form>
            <div className="form-group">
                <lable className="text-muted">Email</lable>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
            </div>

            <div className="form-group">
                <lable className="text-muted">Password</lable>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
            </div>

            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    );
    //    {JSON.stringify(isAuth)} is being used for testing only. isAuth will return the user if working line 68
    return (
        <Layout>
            {/* {JSON.stringify(isAuth())} */}
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {isAuth() ? <Navigate to="/" /> : null}
                <h1 className="p-5 text-center">Signin</h1>
                {signinForm()}
            </div>
        </Layout>
    );
};

export default Signin;