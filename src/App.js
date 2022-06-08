import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import Pokemon from './Pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon/"
      )
      .then((res) => {
        setPokemon(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredPokemon = pokemon.filter((pokemons) =>
    pokemons.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <div className="pokemon-app">
      <div className="pokemon-search">
        <form action="">
          <input
            type="text"
            className="pokemon-input"
            placeholder="Search Pokemon"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredPokemon.map((pokemon) => {
        return (
          <Pokemon
            name={pokemon.name}
          />
        );
      })}
      </div>
    </div>
  );
}

export default App;
