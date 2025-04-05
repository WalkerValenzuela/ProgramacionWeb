import './App.css'
import {useState, useEffect} from 'react'

import Header from './Components/Header/Header'
import CardCharacter from './Components/CardCharacter/CardCharacter'
import Pagination from '@mui/material/Pagination'; // Importa el componente de paginación de Material-UI.


function App() {

  const [characters, setCharacters] = useState([]);
  const [totalpage, settotalPage] = useState(1);

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
     setCharacters(data.results);
      settotalPage(data.info.pages);
    })
  }, [])

  const handlePagination = (event, page) => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(response => response.json())
    .then(data => {
     setCharacters(data.results);
    })
  }

  return (
    <>
    <Header />
      <h1>Hola Mundo</h1>
      <main>
      {characters.map((item)=>{
        return(
          <CardCharacter key={item.id} name={item.name} image={item.image} status={item.status} />
        )
      })}
     </main>
     <div id="pagination">
      <Pagination onChange={handlePagination} count={totalpage} variant="outlined" shape="rounded" />
      </div>
    </>
  )
}

export default App
