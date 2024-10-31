import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Delete() {
    const [id, setId] = useState('');
    const [filme, setFilme] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        axios.get(`https://6722b5182108960b9cc55782.mockapi.io/filmes/${id}`)
            .then(res => {
                setFilme(res.data);
                setShowModal(true); 
            })
            .catch(() => {
                alert("Filme não encontrado!");
                navigate('/'); 
            });
    };

    const handleDelete = () => {
        axios.delete(`https://6722b5182108960b9cc55782.mockapi.io/filmes/${id}`)
            .then(() => {
                setShowModal(false); 
                navigate('/'); 
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>Deletar Filme</h1>
            <input
                type="text"
                placeholder="Digite o ID do Filme"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="form-control w-50 mb-2"
            />
            <button onClick={handleSearch} className="btn btn-primary mb-4">Procurar</button>

            {showModal && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmação de Deleção</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Deseja mesmo deletar o filme <strong>{filme.nome}</strong>?</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={handleDelete} className="btn btn-danger">Deletar</button>
                                <button onClick={() => navigate('/')} className="btn btn-secondary">Cancelar</button></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Delete;
