import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesDetailsPage';
import SearchPage from 'pages/SearchPage';

export const App = () => {
  return (
    <div>
      <HomePage />
      <MoviesPage />
      <SearchPage />
    </div>
  );
};
