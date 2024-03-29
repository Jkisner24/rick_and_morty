import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, RESET_CHARACTERS} from "./action-types";

export const addFavorite = (character) =>{
    return {type: ADD_FAVORITE, payload: character}
}

export const deleteFavorite = (id) =>{
    return {type: DELETE_FAVORITE, payload: id}
}

export const filterCards = (payload) =>{
    return {type: FILTER, payload}
}

export const orderCards = (id) =>{
    return {type: ORDER, payload: id}
}

export const resetCharacters = () => {
    return {type: RESET_CHARACTERS}
}



