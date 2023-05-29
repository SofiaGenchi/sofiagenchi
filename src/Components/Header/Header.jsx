import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header>
        <Link className='link-logo' to={`/`}>
            <div className='box-logo'>
                <h2 className='logo'>SG</h2>
            </div>
        </Link>

        <nav>
            <ul>
                <li><Link to={`/`}>Inicio</Link></li>
                <li><Link to={`/proyectos`}>Proyectos</Link></li>
                <li><Link to={`/contacto`}>Contacto</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header