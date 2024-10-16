"use client";
import { useStore } from './useStore';

const APIMenu = () => {
    const { selectedAPI, setSelectedAPI } = useStore();

    const handleSelection = (event) => {
        setSelectedAPI(event.target.value);
    };

    return (
        <div>
            <select onChange={handleSelection} value={selectedAPI}>
                <option value="PokeAPI">PokeAPI</option>
                <option value="Imagen">Imagen Aleatoria API</option>
                <option value="Chiste">Chiste aleatorio API</option>

            </select>

        </div>
    );
};

export default APIMenu;
