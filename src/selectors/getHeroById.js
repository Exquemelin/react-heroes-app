import { heroes } from '../data/heroes'


// componente que nos devuelve un hero según su id
export const getHeroesById = ( id ) => {

    // Devolvemos el hero cuyo id corresponde con el que nos han pasado
    return heroes.find( hero => hero.id === id );

}