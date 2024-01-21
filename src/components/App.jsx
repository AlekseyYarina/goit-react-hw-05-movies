import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesDetailsPage = lazy(() => import('pages/MoviesDetailsPage'));
const SearchMoviePage = lazy(() => import('pages/SearchMoviePage'));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchMoviePage />} />
          <Route path="/movies/:id/*" element={<MoviesDetailsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
