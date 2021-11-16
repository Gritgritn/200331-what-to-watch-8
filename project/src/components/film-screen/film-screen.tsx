import { useDispatch, useSelector } from 'react-redux';
import PageFooter from '../page-footer/page-footer';
import { useIdParam } from '../../hooks/use-id-param';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import FullFilmCard from '../full-film-card/full-film-card';
import Catalog from '../catalog/catalog';
import PageContent from '../page-content/page-content';
import LoadingScreen from '../loading/loading';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useEffect } from 'react';
import { MAX_SIMILAR_FILMS_COUNT } from '../../constants';
import { getCurrentComments } from '../../store/comments/comments-api-actions';
import { getCurrentCommentsData, getCurrentCommentsStatus } from '../../store/comments/comments-selectors';
import { getCurrentFilm, getSimilarFilms } from '../../store/films/films-api-actions';
import { getCurrentFilmData, getCurrentFilmStatus, getSimilarFilmsData, getSimilarFilmsStatus } from '../../store/films/films-selectors';
import { isFetchError, isFetchIdle, isFetchNotReady } from '../../utils/fetched-data';

function FilmScreen(): JSX.Element {
  const { id: filmId, error } = useIdParam();
  const film = useSelector(getCurrentFilmData);
  const comments = useSelector(getCurrentCommentsData);
  const similarFilms = useSelector(getSimilarFilmsData);
  const filmStatus = useSelector(getCurrentFilmStatus);
  const commentsStatus = useSelector(getCurrentCommentsStatus);
  const similarFilmsStatus = useSelector(getSimilarFilmsStatus);

  const dispatch = useDispatch();

  const fetchCurrentFilm = (id: number) => {
    dispatch(getCurrentFilm(id));
  };

  const fetchCurrentComments = (id: number) => {
    dispatch(getCurrentComments(id));
  };

  const fetchSimilarFilms = (id: number) => {
    dispatch(getSimilarFilms(id));
  };

  useEffect(() => {
    if (!filmId) {
      return;
    }
    if (film?.id !== filmId) {
      fetchCurrentFilm(filmId);
      fetchCurrentComments(filmId);
      fetchSimilarFilms(filmId);
      return;
    }
    if (isFetchIdle(filmStatus)) {
      fetchCurrentFilm(filmId);
    }
    if (isFetchIdle(commentsStatus)) {
      fetchCurrentComments(filmId);
    }
    if (isFetchIdle(similarFilmsStatus)) {
      fetchSimilarFilms(filmId);
    }
  }, [film?.id, filmId, filmStatus, commentsStatus, similarFilmsStatus]);

  if (
    isFetchNotReady(filmStatus) ||
    isFetchNotReady(commentsStatus) ||
    isFetchNotReady(similarFilmsStatus)
  ) {
    return <LoadingScreen />;
  }

  if (
    isFetchError(filmStatus) ||
    isFetchError(commentsStatus) ||
    isFetchNotReady(similarFilmsStatus) ||
    !film || !comments || !similarFilms || error
  ) {
    return <NotFoundScreen />;
  }

  return (
    <>
      <FullFilmCard film={film} comments={comments} />

      <PageContent>
        <Catalog title="More like this" likeThis>
          <CatalogFilmsList
            films={similarFilms.slice(0, MAX_SIMILAR_FILMS_COUNT)}
          />
        </Catalog>

        <PageFooter />
      </PageContent>
    </>
  );
}
export default FilmScreen;
