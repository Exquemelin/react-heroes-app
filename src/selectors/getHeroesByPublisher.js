import { heroes } from '../data/heroes'


// componente que nos devuelve los heroes según su publisher
export const getHeroesByPublisher = ( publisher ) => {

    // Listado de publishers admitidos
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    // Revisamos si el publisher que nos proporcinan no está en el listado, y lanzamos un error
    if ( !validPublisher.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    // Devolvemos la data heroes filtrada por el publisher
    return heroes.filter( hero => hero.publisher === publisher );

}