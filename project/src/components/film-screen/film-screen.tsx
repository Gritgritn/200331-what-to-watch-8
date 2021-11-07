import { connect, ConnectedProps } from 'react-redux';
import PageFooter from '../page-footer/page-footer';
import { useIdParam } from '../../hooks/useIdParams';
import type { Comment, Film, State, ThunkAppDispatch } from '../../types/types';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import FullFilmCard from '../full-film-card/full-film-card';
import Catalog from '../catalog/catalog';
import PageContent from '../page-content/page-content';
import { isFetchError, isFetchIdle, isFetchNotReady } from '../../utils/fetched-data';
import LoadingScreen from '../loading/loading';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useEffect } from 'react';
import { MAX_SIMILAR_FILMS_COUNT } from '../../constants';
import { getSimilarFilms, getСurrentComments, getСurrentFilm } from '../../store/api-actions';

const mapStateToProps = ({currentFilm, currentComments, similarFilms}: State) => ({
  fetchedFilm: currentFilm,
  fetchedComments: currentComments,
  fetchedSimilarFilms: similarFilms,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(getСurrentFilm(id));
  },
  fetchCurrentComments(id: number) {
    dispatch(getСurrentComments(id));
  },
  fetchSimilarFilms(id: number) {
    dispatch(getSimilarFilms(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmScreen({fetchedFilm, fetchedComments, fetchedSimilarFilms, fetchCurrentFilm, fetchCurrentComments, fetchSimilarFilms}: PropsFromRedux): JSX.Element {
  const id = useIdParam();

  useEffect(() => {
    if (fetchedFilm.data?.id !== id) {
      fetchCurrentFilm(id);
      fetchCurrentComments(id);
      fetchSimilarFilms(id);
      return;
    }
    if (isFetchIdle(fetchedFilm)) {
      fetchCurrentFilm(id);
    }

    if (isFetchIdle(fetchedComments)) {
      fetchCurrentComments(id);
    }

    if (isFetchIdle(fetchedSimilarFilms)) {
      fetchSimilarFilms(id);
    }
  }, [id]);

  if (isFetchNotReady(fetchedFilm) || isFetchNotReady(fetchedComments) || isFetchNotReady(fetchedSimilarFilms)) {
    return <LoadingScreen />;
  }

  if (isFetchError(fetchedFilm) || isFetchError(fetchedComments) || isFetchNotReady(fetchedSimilarFilms)) {
    return <NotFoundScreen />;
  }

  const currentFilm = fetchedFilm.data as Film;
  const currentComments = fetchedComments.data as Comment[];
  const similarFilms = fetchedSimilarFilms.data?.slice(0, MAX_SIMILAR_FILMS_COUNT)  as Film[];

  return (
    <>
      <FullFilmCard film={currentFilm} comments={currentComments} />

      <PageContent>
        <Catalog title="More like this" likeThis>
          <CatalogFilmsList films={similarFilms}/>
        </Catalog>

        <PageFooter />
      </PageContent>
    </>
  );
}
export { FilmScreen };
export default connector(FilmScreen);
