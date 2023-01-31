import React from 'react';
import { Link } from 'react-router-dom';

const gestionrecette = () => {
  return (
    <div>
      <h1>gestion des recettes</h1>
      <form onSubmit={this.saveStorage}>
        <input type="url" name="image_url" placeholder="URL de l'image" />
        <br /> <br />
        <input type="text" name="title" placeholder="Titre de la recette" />
        <br /> <br />
        <textarea name="description" placeholder="Description..." />
        <br /> <br />
        <input
          type="submit"
          value="Ajouter une recette"
          name="submit_recette"
        />
      </form>
      <Link to="/"> Liste des recettes </Link>
    </div>
  );
};

export default gestionrecette;
