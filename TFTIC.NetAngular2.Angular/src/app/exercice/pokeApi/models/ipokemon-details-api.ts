export interface IPokemonDetailsApi {
    name : string;
    sprites : IPokemonSpritesApi;
    types : IPokemonTypesApi;
}


interface IPokemonSpritesApi {
    front_default : string;
}


interface IPokemonTypesApi {
    name : string;
}