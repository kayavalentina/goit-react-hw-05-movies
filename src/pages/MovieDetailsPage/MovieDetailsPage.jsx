import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../api/moviesApi';
import { PageHeader, ButtonLink, MovieDetails } from '../../components/index';
import {
  MovieDetailsWrapper,
  Line,
  BtnWrapper,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(response => setMovie(response.data))
      .catch(() => navigate('*'));
  }, [movieId, navigate]);

  const fromPage = location.state?.from ?? '/';

  const { title } = movie;

  const isEmpty = Object.keys(movie).length === 0;

  return (
    <>
      {!isEmpty && (
        <>
          <PageHeader text={title} />
          <ButtonLink to={fromPage} text="Go Back" />
          <MovieDetailsWrapper>
            <MovieDetails movieData={movie} />
            <Line />
            <BtnWrapper>
              <ButtonLink to="cast" text="Cast" state={{ from: fromPage }} />
              <ButtonLink
                to="reviews"
                text="Reviews"
                state={{ from: fromPage }}
              />
            </BtnWrapper>
            <Outlet />
          </MovieDetailsWrapper>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
