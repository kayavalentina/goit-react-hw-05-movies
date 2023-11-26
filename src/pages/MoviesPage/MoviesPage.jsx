import { fetchSearchMovie } from '../../api/moviesApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader, MoviesGallery, SearchForm, Loader } from '../../components/index';
import usePrevious from 'hooks/usePrevious';
import * as notify from 'utils/notifications';
import { LoaderWrapper, TextWrapper, WelcomeText } from './MoviesPage.styled';

export default function Movie() {
 const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query'));
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const prevSearchQuery = usePrevious(searchQuery);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setIsLoading(true);

    fetchSearchMovie(searchQuery)
      .then(response => {
        const { results, total_results } = response.data;

        if (total_results === 0) {
          notify.showIncorrectQuery(searchQuery);
          moviesReset();
          return;
        }

        setMovies(results);
      })
      .catch(error => {
        return notify.showQueryError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);

  const moviesReset = () => {
    setMovies([]);
  };

  const onFormSubmit = searchQuery => {
    if (searchQuery === '') {
      notify.showSearchQueryAbsence();
      return;
    }

    if (prevSearchQuery === searchQuery) {
      notify.showSearchQueryRepeat(searchQuery);
      return;
    }

    setSearchParams({ query: searchQuery });
    setSearchQuery(searchQuery);
    moviesReset();
  };

  return (
    <>
      <PageHeader text="Movies" />
      <SearchForm onSubmit={onFormSubmit} />

      {movies.length > 0 && <MoviesGallery moviesSet={movies} />}

      {movies.length === 0 && !isLoading && (
        <TextWrapper>
          <WelcomeText>
            All filmmakers are waiting for your search query to show movies.
          </WelcomeText>
        </TextWrapper>
      )}

      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </>
  );
};

