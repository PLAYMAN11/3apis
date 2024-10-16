"use client";
import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { useStore } from '../useStore';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const EstadisticasPokemon = () => {
    const { pokemonName } = useStore();
    const [data, setData] = useState(null);
    const [sprite, setSprite] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            if (pokemonName) {
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                    const pokemonData = await response.json();
                    const statsArray = pokemonData.stats.map(stat => stat.base_stat);

                    // Obtener el sprite
                    const img = pokemonData.sprites.front_default;

                    setData({
                        labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
                        datasets: [
                            {
                                label: '',
                                data: statsArray,
                                backgroundColor: 'rgba(180,251,251,0.2)',
                                borderColor: 'rgb(255,255,255)',
                                borderWidth: 1,
                                pointBackgroundColor: 'rgb(33,33,32)',
                            },
                        ],
                    });

                    // Establecer el sprite
                    setSprite(img);
                } catch (error) {
                    console.error("Error fetching Pokemon data:", error);
                }
            }
        };

        fetchPokemonData();
    }, [pokemonName]);

    if (!data) {
        return null;  // No mostrar nada si no hay datos
    }

    const options = {
        scales: {
            r: {
                beginAtZero: true,
                ticks: {
                    stepSize: 20,
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
            },
        },
    };

    return (
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto', overflow: 'hidden' }}>
            {sprite && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${sprite})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.8,
                        zIndex: 1,
                    }}
                />
            )}
            <h2 style={{ position: '', zIndex: 2 }}> {pokemonName?.toUpperCase()}</h2>
            <Radar data={data} options={options} style={{ position: 'relative', zIndex: 2 }} />
        </div>
    );
};

export default EstadisticasPokemon;
