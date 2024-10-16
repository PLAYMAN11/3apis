export const fetchJoke = async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error('Error al obtener el chiste');
        }
        const data = await response.json();
        return data.value;
    } catch (error) {
        console.error('Error fetching joke:', error);
        return 'No se pudo obtener un chiste';
    }
};
