import React, { useState } from 'react';
import { useStore } from '../useStore'; // Asegúrate de que la ruta sea correcta

const Form = () => {
    const { setName } = useStore();
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputValue.trim().toLowerCase());
        setInputValue(''); // Limpia el campo de entrada
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ingresa el nombre del Pokémon"
                required
            />
            <button type="submit">Buscar Pokémon</button>
        </form>
    );
};

export default Form;
