import PropTypes from 'prop-types';
import {
  MovieWrapper,
  MoviePoster,
  InfoWrapper,
  ReleaseStatus,
  MovieRelease,
  MovieRating,
  VoteNum,
  GenresName,
  GenresList,
  GenresItem,
  MovieOverview,
  MovieHomepage,
} from './MovieDetails.styled';

const MovieDetails = ({ movieData }) => {
  const {
    poster_path,
    genres,
    homepage,
    overview,
    release_date,
    status,
    title,
    vote_average,
  } = movieData;

  const releaseDate = new Date(release_date);

  return (
    <MovieWrapper>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
      />
      <InfoWrapper>
        <ReleaseStatus>Status: {status}</ReleaseStatus>
        <MovieRelease>
          Release date:{' '}
          {release_date !== 0 ? releaseDate.toLocaleDateString() : 'unknown'}
        </MovieRelease>
        <MovieRating>
          IMDb Rating:{' '}
          <VoteNum>{vote_average !== 0 ? vote_average : 'unrated'}</VoteNum>
        </MovieRating>
        {genres.length > 0 && (
          <>
            <GenresName>Genres: </GenresName>
            <GenresList>
              {genres.map(({ id, name }) => (
                <GenresItem key={id}>{name}</GenresItem>
              ))}
            </GenresList>
          </>
        )}
        {overview ? (
          <MovieOverview>{overview}</MovieOverview>
        ) : (
          <MovieOverview>Overview is absent.</MovieOverview>
        )}
        <MovieOverview>{overview}</MovieOverview>
        {homepage && (
          <MovieHomepage href={homepage} target="_blank">
            {homepage}
          </MovieHomepage>
        )}
      </InfoWrapper>
    </MovieWrapper>
  );
};

MovieDetails.propTypes = {
  movieData: PropTypes.object.isRequired,
};

export default MovieDetails;
