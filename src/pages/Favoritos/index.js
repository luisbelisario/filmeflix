import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import './favoritos.css'

export default function Favoritos(){
    
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        
        const minhaLista = localStorage.getItem('filmes')
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function handleDelete(id) {
        let filtroFilmes = filmes.filter((filme) => {
            return(filme.id !== id)
        })
        // o filter percorre todo o array e devolve o array sem o filme que tem aquele id que estou clicando para excluir
        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
        toast.success('Filme excluído com sucesso')
    }
    
    return(
        <div id="meus-filmes">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo</span>}
            
            <ul>
                {filmes.map((filme) => {
                    return (
                        <li key={filme.id}>
                            <span>{filme.nome}</span>

                            <div id="botoes">
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={ () => handleDelete(filme.id) }>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}