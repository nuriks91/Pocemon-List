import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';
import './App.css';


const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const Data = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const pokemond= await axios.get(pokemon.url);
          return pokemond.data;
        })
      );
      setPokemon(Data);
    };

    fetchPokemon();
  }, []);

  return (
    <div className="app">
      <h1>Pokemon List</h1>
      <div className="pokemon-list">
        {pokemon .map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
