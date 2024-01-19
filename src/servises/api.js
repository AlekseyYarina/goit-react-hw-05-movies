import axios from 'axios';

const API_KEY = 'e065dfec6f2e6d76c57b93ce16d955ed';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  api_key: API_KEY,
  AUTH_TOKEN:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDY1ZGZlYzZmMmU2ZDc2YzU3YjkzY2UxNmQ5NTVlZCIsInN1YiI6IjY1YTkzOGMyZDRhNjhiMDEzNmRjZjUxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tauyXFwNT9oons4hS9WveRHTZQkJhDEkLRhMB19ofcY',
};
axios.defaults.headers.common['Authorization'] = options.AUTH_TOKEN;

export const requestTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day`);
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const requestMovieById = async movieId => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const requestMovieCast = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits`);
    return data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

export const requestMovieReviews = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const requestSearchMovies = async searchTerm => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${searchTerm}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
