export default function Card({name, species, gender, image, onClose}) { /* destructuring de props, podria ser (props) y hacer props.name, props.species, etc */
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>                               
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" /> 
      </div>
   );
}
