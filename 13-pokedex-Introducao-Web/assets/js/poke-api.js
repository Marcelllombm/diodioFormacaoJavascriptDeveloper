const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.number =  pokeDetail.order;
    pokemon.name = pokeDetail.name;
    const types = pokeDetail.types.map((typesSlot)=>typesSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    return pokemon

}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset=0, limit=6)=>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit},`;
    return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemon) => pokemon.map(pokeApi.getPokemonsDetail))
            .then((detalRequests) => Promise.all(detalRequests))
            .then((pokemonsDetails) =>pokemonsDetails) 
}