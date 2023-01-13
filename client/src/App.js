/*import React from 'react';
import Layout from './core/Layout';

const App = () => {
    return (
        <Layout>
            <h1>Hello React</h1>
        </Layout>
    );
};

export default App;*/


import Login from "./auth/Signin";
import Signup from "./auth/Signup";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Homepage from "./auth/Home";
import PizzaPage from "./auth/PizzaPage";
import LandingPage from "./auth/LandingPage";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path={'/'} element={<LandingPage/>}/>
                    <Route exact path={'/signin'} element={<Login/>}/>
                    <Route exact path={'/signup'} element={<Signup/>}/>
                    <Route exact path={'/home'} element={<Homepage/>}/>
                    <Route exact path={'/pizza'} element={<PizzaPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;