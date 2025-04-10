import './App.css'
import {useState, useEffect} from 'react'

import Header from './Components/Header/Header';
import CardUser from './Components/CardUser/CardUser'
import Pagination from '@mui/material/Pagination'; // Importa el componente de paginación de Material-UI.


function App() {
  const [avatares, setAvatares] = useState([]);
  const [paginaLimite, setPaginaLimite] = useState(20);

  const handlePagination = (event, page) => {
    setPaginaLimite(page * 20);
  }

  useEffect(() => {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      setAvatares(data);
    });
}, []);


  return (
    <>
      <Header />
      <main id="principal">
        {avatares?.slice(paginaLimite - 20, paginaLimite).map((item) => {
          return (
            <CardUser
              key={item.id}
              name={item.login}
              image={item.avatar_url}
              url={item.html_url}
              urlseguidores={item.followers_url}
              type={item.type}
              subscriptions_url={item.subscriptions_url}
              repos_url={item.repos_url}
              organizations_url={item.organizations_url}
            />
          );
        })}
      </main>
      <div id="pagination">
        <Pagination onChange={handlePagination} count={Math.ceil(avatares.length / 20)} variant="outlined" shape="rounded" />
      </div>
    </>
  )
}


export default App
