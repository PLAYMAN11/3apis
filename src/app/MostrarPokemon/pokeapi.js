'use client';

import { useEffect } from 'react';
import { useStore } from '../useStore';

const PokeAPI = () => {
    const pokemonName = useStore((state) => state.pokemonName);
    const setStats = useStore((state) => state.setStats);

    useEffect(() => {
        if (!pokemonName) return;

        const fetchPokemon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            if (!response.ok) {
                console.error('Error fetching Pokémon data');
                return;
            }
            const data = await response.json();
            const stats = data.stats.map(stat => ({
                name: stat.stat.name,
                base_stat: stat.base_stat,
            }));
            setStats(stats);
        };

        fetchPokemon();
    }, [pokemonName, setStats]);

    return null;
};

export default PokeAPI;
