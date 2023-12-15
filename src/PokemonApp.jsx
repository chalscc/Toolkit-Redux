import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

const PokemonApp = () => {
  const dispatch = useDispatch();
  const { page, pokemons, isLoading } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? 'true' : 'false'} </span>

      <ul>
        {pokemons.map(({ name }) => <li key={name}>{name}</li> )}
      </ul>

      <button
        onClick={() => dispatch(getPokemons(page + 1))}
      >
        Next
      </button>
    </>
  )
}

export default PokemonApp