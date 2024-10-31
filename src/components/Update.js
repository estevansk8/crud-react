import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    const [id, setId] = useState('');
    const [filme, setFilme] = useState(null);
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [ano, setAno] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        axios.get(`https://6722b5182108960b9cc55782.mockapi.io/filmes/${id}`)
            .then(res => {
                setFilme(res.data);
                setNome(res.data.nome);
                setGenero(res.data.genero);
                setAno(res.data.ano);
            })
            .catch(() => {
                alert("Filme não encontrado!");
                navigate('/');
            });
    };

    const handleUpdate = () => {
        axios.put(`https://6722b5182108960b9cc55782.mockapi.io/filmes/${id}`, {
            nome, genero, ano
        })
        .then(() => navigate('/'))
        .catch(err => console.log(err));
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>Alterar Filme</h1>
            <input type="text" placeholder="Digite o ID do Filme" value={id} onChange={(e) => setId(e.target.value)} className="form-control w-50 mb-2" />
            <button onClick={handleSearch} className="btn btn-primary mb-4">Procurar</button>

            {filme && (
                <div className='w-50 rounded bg-white border shadow p-4'>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="form-control mb-2" />
                    <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} className="form-control mb-2" />
                    <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} className="form-control mb-2" />
                    <button onClick={handleUpdate} className="btn btn-success me-2">Alterar</button>
                    <button onClick={() => navigate('/')} className="btn btn-secondary">Cancelar</button>
                </div>
            )}
        </div>
    );
}

export default Update;