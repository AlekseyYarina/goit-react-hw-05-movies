import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { requestTrendingMovies } from 'servises/api';
import { STATUSES } from 'utils/constants';
import { Loader } from 'components/Loader/Loader';
import css from './HomePage.module.css';

const HomePage = () => {
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setStatus(STATUSES.pending);
        const fetchedMovies = await requestTrendingMovies();

        if (fetchedMovies.length === 0) {
          setError(
            new Error('There are no trending movies. Please reload the page!')
          );
          setStatus(STATUSES.error);
          return;
        }

        setTrendingMovies(fetchedMovies);
        setStatus(STATUSES.success);
      } catch (error) {
        setError(new Error(error.message));
        setStatus(STATUSES.error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <ul>
          {trendingMovies.map(movie => (
            <li className={css.linkMovie} key={movie.id}>
              <Link
                className={css.linkMovie}
                state={{ from: location }}
                to={`/movies/${movie.id}`}
              >
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {status === STATUSES.error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default HomePage;
