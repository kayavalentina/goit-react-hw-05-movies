import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard/MovieCard';
import { MoviesList } from './MoviesGallery.styled';

const MoviesGallery = ({ moviesSet }) => {
  return (
    <MoviesList>
      {moviesSet.map(({ id, ...props }) => (
        <MovieCard key={id} id={id} {...props} />
      ))}
    </MoviesList>
  );
};

MoviesGallery.propTypes = {
  moviesSet: PropTypes.array.isRequired,
};

export default MoviesGallery;
