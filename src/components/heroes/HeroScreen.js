import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'


import { getHeroesById } from '../../selectors/getHeroById';


// Componente que muestra la información del hero
export const HeroScreen = ( { history } ) => {

    // Almacenamos en una variable los useParams() que son los parámetros de la url
    // const params = useParams();
    // Utilizamos la desestructuración para extraer el dato directamente
    const { heroeId } = useParams();

    
    // // Almacenamos el hero en una variable
    // const hero = getHeroesById( heroeId );
    
    // Almacenamos el hero en una variable
    // Usamos el useMemo para que solo lo renderice si cambia el heroeId
    const hero = useMemo(() => getHeroesById( heroeId ), [ heroeId ])
        
    // Comprobamos si el id nos devolvió un héroe, en caso contrario redireccionamos todo al main
    if ( !hero ) {
        return <Redirect to="/" />;
    }

    // Método que lanza el botón de return
    const handleReturn = () => {

        // Hacemos una validación para saber si hay historial que no sea la página de inicio del navegador
        // length 2 quiere decir que en historial está la página del hero y la homepage del navegador solo
        if ( history.length <= 2 ) {

            // Si no hay historial nos devuelve a nuestro inicio
            history.push('/');

        } else {

            // Si hay historial le decimos que regrese a la página anterior
            history.goBack();

        }


    }

    // Desestructuramos el hero para tener cada dato por separado
    const { 
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ `../assets/heroes/${ heroeId }.jpg` }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flux">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appareance: </b> { first_appearance } </li>

                    <h5> characters </h5>
                    <p> { characters } </p>

                    <button
                        className="btn btn-outline-info"
                        onClick={ handleReturn }
                    >
                        Return
                    </button>
                </ul>
            </div>
        </div>
    )
}
