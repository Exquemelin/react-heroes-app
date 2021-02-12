import React, { useMemo } from 'react';


import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';


// Componente que nos dibujará el listado de héroes según su publisher
export const HeroList = ({ publisher }) => {

    // Almacenamos el listado que nos devuelve nuestra función en una const ya que no va a cambiar
    // Usamos el useMemo para que solo lo renderice si cambia el publisher
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ])

    // // Almacenamos el listado que nos devuelve nuestra función en una const ya que no va a cambiar
    // const heroes = getHeroesByPublisher( publisher );

    // Devolvemos el código para dibujar el listado
    return (

        <div className="row row-cols-3 row-cols-md g-4 animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id }
                        { ...hero } // Tenemos que usar el spread ya que al HeroCard tenemos que enviar la info desestructurada
                    />
                ))
            }
        </div>

    )

}