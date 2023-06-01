import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; //usamos directamente hooks, 
import { useState, useEffect} from "react";
import { deleteFavorite, addFavorite } from "../../redux/actions";

function Card({name, species, gender, image, onClose, id}) { /* destructuring de props, podria ser (props) y hacer props.name, props.species, etc */
   const dispatch = useDispatch();
   let myFavorites = useSelector(state => state.myFavorites);        //estado global de myFavorites
   const [isFav, setIsFav] = useState(false);    //estado local

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }else{
         setIsFav(true);
         dispatch(addFavorite({name, species, gender, image, onClose, id}))
      }
   }

   useEffect(() => {                    //comprueba si el personaje con id ya esta en favs
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   

   return (
      <div className={style.card} >
      <div className={style.btn}>
      {isFav ? (<button onClick={handleFavorite}>❤️</button>) :(<button onClick={handleFavorite}>🤍</button>)}
      </div>
      <div className={style.front} >
         <img src={image} alt={name} />
      </div>
      <div className={style.back} >
         <div >
            <Link to={`/detail/${id}`} className={style.link} >
               <h2 className={style.name}>{name}</h2>
            </Link>
         </div>
         <div className={style.species} >
            <h2>Specie: {species}</h2>
            <h2>Gender: {gender}</h2>
         </div>
         <div className={style.btn}>
            <button onClick={onClose}>X</button>
         </div>
      </div>
   </div>
   );
}


export default Card