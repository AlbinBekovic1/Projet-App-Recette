import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
  return (
    <div>
      <h1>Navigations</h1>
      <nav>
        <NavLink to="/recettes/gestion"> Gestion des recettes </NavLink>
        <br />
        <NavLink to="/"> Liste des recettes </NavLink>
      </nav>
    </div>
  );
};

export default navigation;
