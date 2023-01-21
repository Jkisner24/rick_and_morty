 
import { useState } from "react";
 
 function SearchBar({onSearch}) {
   const [character,setCharacter] =useState("")

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

//IMPORTANTE PARA PASAR PASARLE UN PARAMETRO A UNA FUNCION DENTRO DE UN ONCLICK U ONSEARCH TENGO QUE USAR CB 
   return (
      <div>
         <input type='search' value={character} onChange={handleChange} />
         <button onClick= {()=> onSearch(character)} >Agregar</button>       
      </div>
   );
}


export default SearchBar;