import { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import { toast } from "react-toastify";

import api from '../../services/api'

import './filme.css'

export default function Filme(){
    
    const { id } = useParams()
    const history = useHistory()

    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovie() {
            const response = await api.get(`/r-api/?api=filmes/${id}`)
            if(response.data.length === 0){
                //tentou acessar com id que nao existe, redireciono para Home
                history.replace('/') // o metodo replace troca a rota digitada pelo usuario
                return
            }
            setFilme(response.data)
            setLoading(false)
        }

        loadMovie()

        return () => {
            console.log('Componente desmontado')
            // quando eu sair desse componente quero que ele seja desmontado
        }

    }, [id, history])

    function salvaFilme(){
        
        const minhaLista = localStorage.getItem('filmes')
        let filmesSalvos = JSON.parse(minhaLista) || []
        // se tiver algum filme salvo com esse mesmo id, precisa ignorar
        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.error('Você já possui esse filme em sua lista')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso')
    }

    if(loading){
        return(
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }
    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse</h3>
            <p>{filme.sinopse}</p>

            <div className="botoes">
                <button onClick={ salvaFilme }>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} target="blank">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}