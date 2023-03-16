import { AGREGAR, ELIMINAR } from "../Redux/Actions/types";

const initialState = {
    myFavorites: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case AGREGAR: {
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        }
        case ELIMINAR: {
            return{
                ...state,
                myFavorites: state.myFavorites.filter(
                    (ids) => ids.id !== action.payload
                )
            }
        }
        default: {
            return {...state}
        }
    }
}
