import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation(); // Obtém a localização atual

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex flex-column align-items-center">
                <Link to="/" className="navbar-brand text-center">Catálogo de Filmes</Link>
                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                                Início
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/create" 
                                className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`}>
                                Criar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/update" 
                                className={`nav-link ${location.pathname === '/update' ? 'active' : ''}`}>
                                Alterar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/delete" 
                                className={`nav-link ${location.pathname === '/delete' ? 'active' : ''}`}>
                                Apagar
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
