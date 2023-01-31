import React from 'react';
import './style.css';
import Gestionrecette from './page/gestionrecette.js';
import Listerecette from './page/listerecette.js';
import Navigation from './component/navigation.js';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navigation />
      <h1>TD1</h1>

      <Routes>
        <Route path="/recettes/gestion" element={<Gestionrecette />} />
        <Route path="/" element={<Listerecette />} />
      </Routes>
    </div>
  );
}
