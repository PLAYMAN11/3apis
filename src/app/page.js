"use client";
import React from 'react';
import { useStore } from './useStore';
import Pokemon from './MostrarPokemon/layout';
import Chiste from './chiste';
import Imagen from './imagen';
import Seleccionar from './Seleccionar';

export default function Home() {
    const { selectedAPI } = useStore();
    const renderAPIComponent = () => {
        switch (selectedAPI) {
            case 'PokeAPI':
                return <Pokemon />;
            case 'Chiste':
                return <Chiste />;
                case 'Imagen':
                return <Imagen />;
            default:
                return <p>Por favor, selecciona una API.</p>;
        }
    };
    return (
        <div>
            <header><h1>Selector de APIs</h1> <Seleccionar /></header>
        <div className={"contenido"}>{renderAPIComponent()}</div>

        </div>
    );
}
