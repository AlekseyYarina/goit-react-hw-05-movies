import React, { useCallback, useEffect, useState } from 'react';
import { requestSearchMovies } from '../../servises/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const SearchMoviePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const query = searchParams.get('sQuery');

  const handleSearch = useCallback(async () => {
    try {
      const searchResultData = await requestSearchMovies(query);
      setSearchResults(searchResultData);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();
    if (!query) return;
    setSearchParams({
      sQuery: query,
    });
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query, handleSearch]);

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" defaultValue={query} required />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>

      {searchResults && searchResults.results ? (
        <ul>
          {searchResults.results.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No search results</p>
      )}
    </div>
  );
};

export default SearchMoviePage;
