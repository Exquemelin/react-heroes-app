import React, { useEffect, useReducer } from 'react'


import { AuthContext } from './auth/AuthContext'
import { AppRouter } from './routers/AppRouter'
import { authReducer } from './auth/authReducer'

// Creamos el init, que leerá del local storage si hay algún item "user"
// Si no lo hay, devuelve un objeto con el logged en false
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


export const HeroesApp = () => {

    // Usamos el reducer, que nos devolverá un user, y utilizaremos su dispatch
    // Le pasamos nuestro authReducer, un objeto vacío y el init que creamos más arriba
    const [ user, dispatch] = useReducer( authReducer, {}, init);

    // Usamos un useEffect para controlar cuando cambia el user y almacenar los datos en el localstorage
    useEffect(() => {

        // Almacenamos el user en el localStorage
        localStorage.setItem( 'user', JSON.stringify( user ) )
        
    }, [ user ])
    
    return (

        // Usamos el reducer que hemos creado como High Order Component que es
        // Pasamos el user y el dispatch a todos los hijos para poder utilizarlo
        <AuthContext.Provider value={{ user, dispatch}}>

            <AppRouter />

        </AuthContext.Provider>

    )
}
