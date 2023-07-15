import React from "react";
import { Link } from "react-router-dom";
import NoResult from "./NoResult";

function Catalog({ pokemonList, search }) {
  const filteredPokemonList = search
    ? pokemonList.filter((pokemon) =>
        pokemon.name.en.toLowerCase().includes(search.toLowerCase())
      )
    : pokemonList;

  if (search !== "" && filteredPokemonList.length === 0) {
    return <NoResult />;
  }

  return (
    <div className="pokemon-catalog">
      {search
        ? filteredPokemonList.map((pokemon) => (
            <div key={pokemon.pokedexId} className="pokemon-item">
              <Link to={`/pokemon/${pokemon.pokedexId}`}>
                <img
                  src={pokemon.sprites.regular}
                  alt={pokemon.name.en}
                  className="pokemon-image"
                />
              </Link>
              <div className="pokemon-name">{pokemon.name.en}</div>
            </div>
          ))
        : filteredPokemonList.slice(1).map((pokemon) => (
            <div key={pokemon.pokedexId} className="pokemon-item">
              <Link to={`/pokemon/${pokemon.pokedexId}`}>
                <img
                  src={pokemon.sprites.regular}
                  alt={pokemon.name.en}
                  className="pokemon-image"
                />
              </Link>
              <div className="pokemon-name">{pokemon.name.en}</div>
            </div>
          ))}
    </div>
  );
}

export default Catalog;
