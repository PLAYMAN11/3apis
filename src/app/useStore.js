import { create } from 'zustand';

export const useStore = create((set) => ({
    pokemonName: '',
    stats: [],
    img: '',
    selectedAPI: 'PokeAPI',
    setSelectedAPI: (api) => set({ selectedAPI: api }),
    setName: (name) => set({ pokemonName: name }),
    setimg: (name) => set({ img: name }),
    setStats: (stats) => set({ stats }),
}));
