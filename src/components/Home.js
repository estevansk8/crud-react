import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        axios.get('https://6722b5182108960b9cc55782.mockapi.io/filmes')
            .then(res => setFilmes(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='home-container' style={{ padding: '20px' }}>
            <div className='filmes-list'>
                {filmes.map((filme) => (
                    <Link to={`/read/${filme.id}`} className='filme-link'>
                        <div key={filme.id} className='filme-card'>
                        
                        <p className='filme-id'><strong>Id:</strong> {filme.id}</p>
                        <p><strong>Nome:</strong> {filme.nome}</p>
                        
                        </div>
                    </Link>    
                ))}
            </div>
        </div>
    );
}

export default Home;
