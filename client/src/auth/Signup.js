
// import React, { useState } from 'react';
// import axios from 'axios';
// import { authenticate, isAuth } from './helpers';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
// export default function Signup(){

//     const [values, setValues] = useState({
//         fName: '',
//         lName: '',
//         email: '',
//         password: '',
//         buttonText: 'Submit'
//     });

//     const {fName, lName, email, password, buttonText} = values;

//     const handleChange = name => event => {
//         // console.log(event.target.value);
//         setValues({...values, [name]: event.target.value});
//     };

//     const clickSubmit = event => {
//         console.log("Signup button was clicked.")
//         event.preventDefault();
//         setValues({...values, buttonText: 'Submitting'});
//         axios({
//             method: 'POST',
//             url: `${process.env.REACT_APP_API}/signup`,
//             data: {fName, lName, email, password}
//         })
//             .then(response => {
//                 console.log('SIGNUP SUCCESS', response);
//                 setValues({...values, fName: '', lName: '', email: '', password: '', buttonText: 'Submitted'});
//                 toast.success(response.data.message);
//             })
//             .catch(error => {
//                 console.log('SIGNUP ERROR', error.response.data);
//                 setValues({...values, buttonText: 'Submit'});
//                 toast.error(error.response.data.error);
//             });
//     };

//     return(
//         <Grid container justifyContent={"center"} alignItems={"center"} sx={{height: '100vh'}}>
//             <Grid item xs={1}>
//                 <Button href={'/home'}>Place holder to test nav to home page</Button>
//             </Grid>
//             <Grid container spacing={0} xs={10} justifyContent={"center"} alignItems={"center"} sx={{height: '90vh', backgroundImage: 'url(/background.jpg)'}}>
//                 <Box sx={{bgcolor: 'white', borderRadius: '16px', boxShadow: 10, border: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
//                     <TakeoutDiningIcon sx={{height: 100, width: 100, mt: 2}}/>
//                     <TextField onChange={handleChange('fName')} sx={{m: 2, width: 300}} id="outlined-basic" label="First Name" variant="outlined"/>
//                     <TextField onChange={handleChange('lName')} sx={{mb: 2, width: 300}} id="outlined-basic" label="Last Name" variant="outlined"/>
//                     <TextField onChange={handleChange('email')} sx={{mb: 2, width: 300}} id="outlined-basic" label="Email" variant="outlined" helperText="This will be your username."/>
//                     <TextField onChange={handleChange('password')} sx={{mb: 2, width: 300}} id="outlined-basic" label="Password" variant="outlined" helperText="Must be 8 characters, contain letters, and contain numbers."/>
//                     <Button onClick={clickSubmit} sx={{mb: 2}} variant={"contained"} color={"success"}>Signup</Button>
//                 </Box>
//             </Grid>
//             <Grid item xs={1}></Grid>
//         </Grid>
//     );
// }
    /*const signupForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
            </div>

            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    )

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                <h1 className="p-5 text-center">Signup</h1>
                {signupForm()}
            </div>
        </Layout>
    )
}

export default Signup;*/

// AT- Added for testing old functionality before merging
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import { authenticate, isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const { name, email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: { name, email, password }
        })
            .then(response => {
                console.log('SIGNUP SUCCESS', response);
                setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                toast.success(response.data.message);
            })
            .catch(error => {
                console.log('SIGNUP ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const signupForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
            </div>

            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    )

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                <h1 className="p-5 text-center">Signup</h1>
                {signupForm()}
            </div>
        </Layout>
    )
}

export default Signup;