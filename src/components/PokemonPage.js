import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonPage() {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${pokemonId}`
        );
        const data = await response.json();
        setPokemonData(data);
      } catch (err) {
        console.log("Failed to fetch API: " + err);
      }
    }

    fetchData();
  }, [pokemonId]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p className="poke-name">{pokemonData.name.en}</p>
      <div className="pokemon-container">
        <div className="info">
          <div className="pokemon-info">Category: {pokemonData.category}</div>
          <div className="pokemon-info">
            Types: {pokemonData.types.map((type) => type.name).join(", ")}
          </div>
          <div className="pokemon-info">
            Talents:{" "}
            {pokemonData.talents.map((talent) => talent.name).join(", ")}
          </div>
          <div className="pokemon-info">Height: {pokemonData.height}</div>
          <div className="pokemon-info">Weight: {pokemonData.weight}</div>
        </div>
        <img
          src={pokemonData.sprites.regular}
          alt={pokemonData.name.en}
          className="Pokemon"
        />
      </div>
    </div>
  );
}

export default PokemonPage;
