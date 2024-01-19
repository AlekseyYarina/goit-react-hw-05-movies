import { MoviesDatails } from 'components/MoviesDetails/MoviesDetails';
import { Search } from 'components/Search/Search';
import React from 'react';

const MoviesPage = () => {
  return (
    <div>
      <Search />
      <MoviesDatails />
    </div>
  );
};

export default MoviesPage;
