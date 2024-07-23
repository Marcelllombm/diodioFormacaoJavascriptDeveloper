const pokeApi = {}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset=0, limit=5)=>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit},`;
    return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemon) => pokemon.map(pokeApi.getPokemonsDetail))
            .then((detalRequests) => Promise.all(detalRequests))
            .then((pokemonsDetails) =>pokemonsDetails) 
}