import './App.css'
import Cards from './components/Cards/Cards'
import Nav from "./components/Navbar/Nav"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import { useState } from 'react'
import { Routes, Route, useLocation} from "react-router-dom"
import Form from './components/Form/Form'

function App () {

  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          alert('No hay personajes con ese ID');
       }
    });
}

  const onClose = (id) =>{
    setCharacters([
      
      characters.filter(character=> character.id !== id)
  
    ])

  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? <Form/> : <Nav onSearch={onSearch} />}
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route  path="/home" element={<Cards onClose={onClose} characters={characters}/>}  />
        <Route path="./about" element={<About/>} />
        <Route path="./details/:detailId" element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
