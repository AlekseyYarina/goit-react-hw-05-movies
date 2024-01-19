import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MoviesDetailsPage from 'pages/MoviesDetailsPage';
import SearchPage from 'pages/SearchPage';
import css from './App.module.css';
export const App = () => {
  return (
    <div>
      <header>
        <NavLink
          className={({ isActive }) =>
            `${css.navlink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navlink} ${isActive ? css.active : ''}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </header>
      <main className={css.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviesDetailsPage />} />
          <Route path="/movies" element={<SearchPage />} />
        </Routes>
      </main>
    </div>
  );
};
