import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog";
import PokemonPage from "./components/PokemonPage";
import Header from "./components/Header";
import "./style.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api-pokemon-fr.vercel.app/api/v1/pokemon"
        );
        const data = await response.json();
        setPokemonList(data);
      } catch (err) {
        console.log("Failed to fetch API: " + err);
      }
    }

    fetchData();
  }, []);

  const setSearch = (input) => {
    setSearchResult(input);
    console.log(input);
  };

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Catalog
              key={searchResult}
              pokemonList={pokemonList}
              search={searchResult}
            />
          }
        />
        <Route path="/pokemon/:pokemonId" element={<PokemonPage />} />
      </Routes>
    </div>
  );
}

export default App;
