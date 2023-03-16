import { AGREGAR, ELIMINAR } from "./types";

export function addFavCharacter(character){
    return {
        type: AGREGAR,
        payload: character
    }
}

export function deleteFavCharacter(id){
    return{
        type: ELIMINAR,
        payload: id
    }
}