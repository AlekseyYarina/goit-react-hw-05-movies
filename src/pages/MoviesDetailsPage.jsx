import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonToBack } from 'components/ButtonToBack/ButtonToBack';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from 'components/Reviewes/Reviewes';
import { requestMovieById } from 'servises/api';
import { STATUSES } from 'utils/constants';
import { Loader } from 'components/Loader/Loader';

const MoviesDetailsPage = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

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

  const handleCastClick = event => {
    event.preventDefault();
    setShowCast(true);
    setShowReviews(false);
  };

  const handleReviewsClick = event => {
    event.preventDefault();
    setShowReviews(true);
    setShowCast(false);
  };

  return (
    <div>
      <ButtonToBack />

      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.success && (
        <div>
          <img
            alt={movieDetails.title || movieDetails.name}
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${
              movieDetails.backdrop_path || '/no_image_available.jpg'
            }`}
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
      <p>Additional information</p>
      <button
        type="button"
        onClick={handleCastClick}
        style={{ cursor: 'pointer' }}
      >
        Cast
      </button>

      <button
        type="button"
        onClick={handleReviewsClick}
        style={{ cursor: 'pointer' }}
      >
        Reviews
      </button>

      {showCast && <Cast />}
      {showReviews && <Reviews />}
    </div>
  );
};

export default MoviesDetailsPage;
