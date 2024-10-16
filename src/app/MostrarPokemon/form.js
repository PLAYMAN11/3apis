'use client';

import { useState } from 'react';
import { useStore } from '../useStore';

const Form = () => {
    const [pokemonName, setPokemonName] = useState('');
    const setName = useStore((state) => state.setName);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(pokemonName);
        setPokemonName('');
    };

    return (
        <form onSubmit={handleSubmit}>

            <div class="input-container">
                <input
                    class="input"
                    name="text"
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                    type="text"
                    placeholder="Ingrese el nombre..."
                />
            </div>

        </form>
    );
};

export default Form;
