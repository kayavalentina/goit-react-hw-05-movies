//6259a7db6101e3f3dcaf1c1f5b1cb643
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6259a7db6101e3f3dcaf1c1f5b1cb643';

async function fetchMoviesData(url = '', config = {}) {
  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    console.log(error.message);
    Promise.reject(new Error('Not found'));
  }
}

export async function fetchTrendingMovies() {
  return await fetchMoviesData(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
}

export async function fetchSearchMovie(searchQuery) {
  return await fetchMoviesData(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
}

export async function fetchMovieDetails(movieId) {
  return await fetchMoviesData(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export async function fetchMovieCredits(movieId) {
  return await fetchMoviesData(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export async function fetchMovieReviews(movieId) {
  return await fetchMoviesData(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
}

