import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0 ) => {
  return async(dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

    dispatch(setPokemons({pokemons: resp.data.results, page: page + 1}));

  }
}