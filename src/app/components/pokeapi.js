import {useStore} from "../useStore";


async function obtenerEstadisticasPokemon() {
    const nombrePokemon = useStore((state) => state.pokemon);
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`;

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener el Pokémon');
        }

        const data = await respuesta.json();

        const estadisticas = data.stats.slice(0, 6).map(stat => ({
            nombre: stat.stat.name,
            valor: stat.base_stat
        }));
    } catch (error) {
        console.error(error);
    }
}
export default obtenerEstadisticasPokemon()