import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [ano, setAno] = useState('');
    const navigate = useNavigate();

    const handleCreate = () => {
        axios.post('https://6722b5182108960b9cc55782.mockapi.io/filmes', {
            nome, genero, ano
        })
        .then(() => navigate('/'))
        .catch(err => console.log(err));
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>Criar Filme</h1>
            <div className='w-50 rounded bg-white border shadow p-4'>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="form-control mb-2" />
                <input type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} className="form-control mb-2" />
                <input type="text" placeholder="Ano" value={ano} onChange={(e) => setAno(e.target.value)} className="form-control mb-2" />
                <button onClick={handleCreate} className="btn btn-primary me-2">Criar</button>
                <button onClick={() => navigate('/')} className="btn btn-secondary">Cancelar</button>
            </div>
        </div>
    );
}

export default Create;
