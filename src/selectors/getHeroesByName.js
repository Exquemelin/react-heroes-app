import { heroes } from "../data/heroes"

export const getHeroresByName = ( name ) => {

    // Si no nos llega nada por name, devolvemos un array vacío
    if ( name === '' ) {
        return [];
    }

    // Pasamos la variable name a minúsculas todo
    name = name.toLocaleLowerCase();

    // Le decimos que devuelva el array heroes con todos los heroes cuyo superhero coincida con la búsqueda
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) );

}