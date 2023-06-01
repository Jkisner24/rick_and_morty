import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, RESET_CHARACTERS } from "./action-types"

const initialState = {

    allCharacters: [],
    myFavorites: [],
    allFavs: []
}

const reducer = (state= initialState, action) => {    //action o destructuring con {type, payload}
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters],
                allFavs: [...state.myFavorites]
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)
            }
        case FILTER: 
            const characterFiltered = action.payload === "All" ? allCharacters
                                                                :allCharacters.filter(e => e.gender === action.payload)
    
            return{
                  ...state,
                  myFavorites: characterFiltered
              } 
        case ORDER:
/*          return{
               ...state,
               myFavorites: action.payload === "Ascendente" 
                            ? state.myFavorites.sort((a, b) => a.id > b.id ? 1 : -1) 
                            : action.payload === "Descendente" 
                            ? state.myFavorites.sort((a, b) => a.id > b.id ? -1 : 1) 
                            : state.allFavs
           }*/
           return{
                ...state,
                allCharacters: [...state.allCharacters],
                myFavorites: state.allCharacters.sort((a,b)=>{
                    if (a.id > b.id) return "Ascendente" === action.payload ? 1 : -1
                    if (a.id > b.id) return "Descendente" === action.payload ? -1 : 1
                    else return state.allFavs    
                })
           }

/*         case RESET_CHARACTERS:
            return{
                ...state,
                myFavorites: [...state.allCharacters],
                allCharacters: [...state.allCharacters]
            }

 */        default: 
            return {...state}
    }
}

export default reducer;