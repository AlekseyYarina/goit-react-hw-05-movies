import axios from 'axios';

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=e065dfec6f2e6d76c57b93ce16d955ed&language=en-US`
  );
  return data.results;
};
