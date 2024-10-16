import React, { useEffect, useState } from 'react';

const fetchImage = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error('Error al obtener la imagen');
        }
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error fetching image:', error);
        return '';
    }
};

const Imagen = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getImage = async () => {
            setLoading(true);
            const fetchedImage = await fetchImage();
            setImageUrl(fetchedImage);
            setLoading(false);
        };

        getImage();
    }, []);

    return (
        <div className={"perro"}>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <img src={imageUrl} alt="Imagen aleatoria de un perro" />
            )}
        </div>
    );
};

export default Imagen;
