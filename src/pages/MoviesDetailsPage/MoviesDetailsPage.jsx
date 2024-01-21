import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom';

import { getPoster, requestMovieById } from 'servises/api';
import { STATUSES } from 'utils/constants';
import { Loader } from 'components/Loader/Loader';
import css from './MoviesDetailsPage.module.css';

const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviewes/Reviewes'));

const MoviesDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setStatus(STATUSES.pending);
        const data = await requestMovieById(id);

        setMovieDetails(data);
        setStatus(STATUSES.success);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <div>
          <Link className={css.linkGoBack} to={backLinkRef.current}>
            Go back
          </Link>
          <img
            alt={movieDetails.title || movieDetails.name}
            src={getPoster(movieDetails.poster_path)}
            width="200"
            height="300"
          />
          <h3>{movieDetails.title || movieDetails.name}</h3>
          <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h4>Overview</h4>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      )}

      {status === STATUSES.error && <p>Error: {error}</p>}
      <h3>Additional information</h3>

      <NavLink
        className={({ isActive }) =>
          `${css.navlink} ${isActive ? css.active : ''}`
        }
        to="cast"
      >
        Cast
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${css.navlink} ${isActive ? css.active : ''}`
        }
        to="reviews"
      >
        Reviews
      </NavLink>
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MoviesDetailsPage;
