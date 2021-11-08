import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import './home.css'

export default function Home() {
    
    const [filmes, setFilmes] = useState([])
    
    useEffect(() => {
      // em funcoes que busco dados da internet é adequado colocar async await
      async function loadMovies() {
        const response = await api.get('/r-api/?api=filmes/')
        // a api ja contem a base url basta passar a rota para fazer o get em todos os filmes
        // console.log(response.data) -> aqui está o array com todos os filmes da API
        setFilmes(response.data)
      }

      loadMovies()
      
    }, [])
  
    return (
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme) => {
            return(
              <article key={filme.id}>
                  <strong>{filme.nome}</strong>
                  <img src={filme.foto} alt={filme.nome} />
                  <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
}