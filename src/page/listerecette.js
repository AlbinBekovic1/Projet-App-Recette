import React from 'react';
import { Link } from 'react-router-dom';

const listerecette = () => {
  return (
    <div>
      <h1>Liste des recettes</h1>
      <ul>
        <Link to="/recettes/gestion"> Gestion des recettes </Link>
      </ul>
    </div>
  );
};

export default listerecette;
