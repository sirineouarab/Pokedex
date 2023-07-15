import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();

  const isPokemonPage = location.pathname.includes("/pokemon");

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const searchResult = (event) => {
    event.preventDefault();
    props.setSearch(searchInput);
  };

  return (
    <div className="header">
      {isPokemonPage && (
        <img
          src="/back.png"
          alt="back"
          className="back"
          onClick={() => (window.location = "/")}
        ></img>
      )}
      {!isPokemonPage && (
        <>
          <h1>Who are you looking for ?</h1>
          <div className="div">
            <div className="search-container">
              <form>
                <input
                  type="text"
                  placeholder="E.g. Pikachu"
                  className="search"
                  onChange={handleSearch}
                  value={searchInput}
                />
                <button
                  type="submit"
                  className="search-button"
                  onClick={searchResult}
                >
                  Go
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
