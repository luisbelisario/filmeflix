import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
      <header>
        <Link className="logo" to="/">FilmeFlix</Link>
        <Link className="salvos" to="/favoritos">Favoritos</Link>
      </header>
    );
}