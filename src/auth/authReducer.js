import { types } from "../types/types";

// Creamos una función de flecha normal y corriente con el estadio y una ation
export const authReducer = ( state = {}, action ) => {

    // Hacemos un switch para evaluar la action.type
    switch ( action.type ) {

        // Usamos un objeto definido en types para ser más fácil
        case types.login:
            
            // Devolvemos el payload que nos entre en el action y cambiamos el logged a true para usar fuera
            return {
                ...action.payload,
                logged: true,
            };
        
        // En caso de hacer logout devolvemos el logged en false
        case types.logout:

            return {
                logged: false
            }
        
        // Si no hay ningún type, devolvemos el state directamente
        default:

            return state;

    }

}