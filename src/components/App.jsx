import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MoviesDetailsPage from 'pages/MoviesDetailsPage';
import SearchPage from 'pages/SearchPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies/:id" element={<MoviesDetailsPage />} />
      <Route path="/movies" element={<SearchPage />} />
    </Routes>
  );
};
