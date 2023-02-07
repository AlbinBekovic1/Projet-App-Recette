import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const navigation = () => {
  return (
    <div>
      <div class="head">
        <h1>Navigations</h1>
      </div>
      <nav class="nav">
        <NavLink to="/recettes/gestion"> Gestion des recettes </NavLink>
        <br />
        <NavLink to="/"> Liste des recettes </NavLink>
      </nav>
    </div>
  );
};

export default navigation;
