import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage';
import MoviesDetailsPage from 'pages/MoviesDetailsPage';
import SearchMoviePage from 'pages/SearchMoviePage';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<SearchMoviePage />} />
        <Route path="/movies/:id/*" element={<MoviesDetailsPage />} />
      </Routes>
    </Layout>
  );
};
