import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import style from "./Favorites.module.css"
import { orderCards, filterCards } from "../../redux/actions";


const Favorites = () => {

    const myFavorites = useSelector((state)=> state.myFavorites);
    const dispatch = useDispatch();

    const handlerOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    }
    const handlerFilter = (event) =>{
        dispatch(filterCards(event.target.value))
        console.log(event)

    }


    return(
        <div>
            <div className={style.order}>
                <select onChange={handlerOrder}>
                    <option value="order" disabled>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                    <option value={"All"}>All</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Unknown"}>Unknown</option>
                    <option value={"Genderless"}>Genderless</option>
                </select>
            </div>
            <div className={style.container}> 
            {
                myFavorites.map((character) => {
                    return(
                        <div className={style.card}>
                            <div className={style.front}>
                                <img src={character.image} alt={character.name} />
                            </div>
                            <div className={style.back} >
                            <div>
                                <Link to={`/detail/${character.id}`} className={style.link} >
                                    <h2 className={style.name}>{character.name}</h2>
                                </Link>
                            </div>
                            <div className={style.species} >
                                <h2>Specie: {character.species}</h2>
                                <h2>Gender: {character.gender}</h2>
                            </div>
                            </div>
                        </div>
                    )
                })   
            }
            </div>

        </div>
    )
}

export default Favorites