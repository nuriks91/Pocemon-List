import React from 'react';
import './Card.css';

const Card = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default Card;