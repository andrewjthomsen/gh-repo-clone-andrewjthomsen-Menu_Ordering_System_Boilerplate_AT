import Login from "./auth/Signin";
import Signup from "./auth/Signup";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Homepage from "./auth/Home";
import PizzaPage from "./auth/PizzaPage";
import LandingPage from "./auth/LandingPage";
import Activate from "./auth/Activate";
import PrivateRoute from "./auth/privateRoute";
import PrivatePage from "./core/PrivatePage";
import CheckEmail from "./auth/CheckEmail";


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
                    <Route exact path={'auth/activate/:id'} element={<Activate/>}/>
                    <Route exact path={'check-email'} element={<CheckEmail/>}/>
                    <Route exact path={'/private'} element={<PrivateRoute><PrivatePage/></PrivateRoute>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;