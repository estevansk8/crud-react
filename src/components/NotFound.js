import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <h1>404</h1>
            <h2>Página Não Encontrada</h2>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link to="/" className="btn btn-primary">Voltar para Início</Link>
        </div>
    );
}

export default NotFound;
