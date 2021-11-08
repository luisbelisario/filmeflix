import { Link } from 'react-router-dom'
import './erro.css'

export default function Erro(){
    return(
        <div id="container">
            <h1>Erro 404! Página não encontrada!</h1>
            <Link to="/">Home</Link>
        </div>
    )
}