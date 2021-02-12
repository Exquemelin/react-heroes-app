import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// import { Navbar } from "../components/ui/Navbar";
import { LoginScreen } from "../components/login/LoginScreen";
// import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    
    return (
        <Router>
            <div>
                {/* <Navbar /> */}
        
                <Switch>

                    {/* <Route exact path="/login" component={ LoginScreen } /> */}
                    <PublicRoute 
                        exact
                        path="/login"
                        component={ LoginScreen }
                        isAuthenticated={ user.logged }
                    />
                    {/* Para "/" no podemos usar el exact, porque entonces solo en el raíz tendríamos el dashboard,
                    y sin el lo tendremos en todas excepto en el login que sí le pusimos el exact */}
                    {/* <Route path="/" component={ DashboardRoutes } /> */}
                    <PrivateRoute 
                        path="/"
                        component={ DashboardRoutes }
                        isAuthenticated={ user.logged }
                    />
                    
                </Switch>
            </div>
        </Router>
    )
}
