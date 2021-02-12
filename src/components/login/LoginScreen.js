import React, { useContext } from 'react'


import { AuthContext } from '../../auth/AuthContext';
import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types';


// Desestructuramos las props de la página en el navegador, y extraemos el history
export const LoginScreen = ({ history }) => {

    // Extramemos el user y el distpatch del context para poder utilizarlo
    const { user, dispatch } = useContext(AuthContext);

    // Método que lanzará la pulsación del botón de Login
    const handleLogin = () => {

        // Almacenamos el lastpatch del localsotrate en una variable
        // Si no hay nada '||' lo que hacemos es redireccionarlo al raíz
        const lastPath = localStorage.getItem('lastPath') || '/'

        // history.push('/');
        // Utilizamos el replace para que no guarde la pantalla de login en el history
        // history.replace('/');
        // {
        //     name: 'Iván'
        // }

        // Lanzamos el dispatch con el action que creamos directamente dentro
        // Contiene el type y el payload
        dispatch({
            type: types.login,
            payload: {
                name: 'Iván',
            }
        });

        // Navegamos a la ruta que nos da lastPath
        history.replace(lastPath);


    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>        
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>        

        </div>
    )
}
