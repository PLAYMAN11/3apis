import React, { useEffect, useState } from 'react';
import { fetchJoke } from './fetchJoke';

const Chiste = () => {
    const [joke, setJoke] = useState('Cargando...');

    useEffect(() => {
        const getJoke = async () => {
            const fetchedJoke = await fetchJoke();
            setJoke(fetchedJoke);
        };

        getJoke();
    }, []);

    return (
        <h1>{joke}</h1>
    );
};

export default Chiste;
