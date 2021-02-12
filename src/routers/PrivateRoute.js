import React from 'react'
import PropTypes from 'prop-types';


import { Redirect, Route } from 'react-router-dom'

// desestructuramos los props que tenemos que pasar
// ...rest es el resto de propiedas como el exact, el to, etc del Route que necesitamos
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    // Almacenamos en el localStorage el path en el que se está navegando para poder recuperarlo más tarde
    localStorage.setItem('lastPath', rest.location.pathname)
    
    // Devolvemos un Componente condicional en función de isAutenticated
    return (
        <Route { ...rest }
            component={ ( props ) => (
                ( isAuthenticated )
                    ? <Component { ...props } />
                    : <Redirect to="/login" />
            )}
        />
    )
}

// Establecemos los PropTypes que debems pasar
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}
