import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../api/moviesApi';
import { PageHeader, MoviesGallery } from '../../components/index';
import { TextWrapper, NoMovieText } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <>
      <PageHeader text="Trending today" />
      {movies && <MoviesGallery moviesSet={movies} />}
      {movies && movies.length === 0 && (
        <TextWrapper>
          <NoMovieText>There are no trending movies for now.</NoMovieText>
        </TextWrapper>
      )}
    </>
  );
};

export default HomePage;
