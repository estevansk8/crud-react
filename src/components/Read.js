import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Read() {
    const { id } = useParams();
    const [filme, setFilme] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://6722b5182108960b9cc55782.mockapi.io/filmes/${id}`)
            .then(res => setFilme(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!filme) return <div>Carregando...</div>;

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>Detalhes do Filme</h1>
            <div className='w-50 rounded bg-white border shadow p-4'>
                <p><strong>Id:</strong> {filme.id}</p>
                <p><strong>Nome:</strong> {filme.nome}</p>
                <p><strong>Gênero:</strong> {filme.genero}</p>
                <p><strong>Ano:</strong> {filme.ano}</p>
                <button onClick={() => navigate('/')} className="btn btn-secondary">Voltar</button>
            </div>
        </div>
    );
}

export default Read;
