import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';

import queryString  from 'query-string';

import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroresByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    // Extraemos el location del history para obtener el string del query
    const location = useLocation();

    // Le pasamos el string al QueryString para que lo separe por variables
    // Desestructuramos lo que nos interesa que es la "q"
    const { q = '' } = queryString.parse( location.search );
    // console.log( queryString.parse( location.search ) );

    // usamos el hook useForm para manejar el formulario básico
    const [ { searchText }, handleInputChange, reset ] = useForm({
        searchText: q
    })
    
    // Establecemos el listado de héroes
    // const heroesFiltered = getHeroresByName( searchText );
    // Utilizamos el useMemo para que solo lo dispare cuando cambie la "q"
    const heroesFiltered = useMemo(() => getHeroresByName( searchText ), [q])

    // Función que lanzaremos cuando se pulse el botón de búsqueda
    const handleSearch = (e) => {

        // Prevenimos que se recargue la página cada vez que hagamos submit al formulario
        e.preventDefault();

        // Pasamos un url que sea nuestra búsqueda
        history.push(`?q=${ searchText }`)
    }

    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            name="searchText" // debe tener el mismo nombre que la variable a controlar
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>

                </div>

                <div className="Col-7">

                    <h4> Results </h4>
                    <hr />

                    {   (q === '')
                            && <div className="alert alert-info">
                                Search a Hero
                            </div>
                    }

                    {   (q !== '' && heroesFiltered.length === 0 )
                            && <div className="alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>

        </div>
    )
}
