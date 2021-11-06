import { connect, ConnectedProps } from 'react-redux';
import PageFooter from '../page-footer/page-footer';
import { useParams } from 'react-router-dom';
import type { Comment, Film, ParamsWithId, State } from '../../types/types';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import FullFilmCard from '../full-film-card/full-film-card';
import Catalog from '../catalog/catalog';
import PageContent from '../page-content/page-content';
import { getFilmById, getSimilarFilms } from '../../utils/common';
import { MAX_SIMILAR_FILMS_COUNT } from '../../constants';
import { isFetchError, isFetchNotReady } from '../../utils/fetched-data';
import LoadingScreen from '../loading/loading';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const mapStateToProps = ({films, currentComments}: State) => ({
  fetchedFilms: films,
  fetchedComments: currentComments,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmScreen({fetchedFilms, fetchedComments}: PropsFromRedux): JSX.Element {

  const { id } = useParams() as ParamsWithId;
  if (isFetchNotReady(fetchedFilms) || isFetchNotReady(fetchedComments)) {
    return <LoadingScreen />;
  }

  if (isFetchError(fetchedFilms) || isFetchError(fetchedComments)) {
    return <NotFoundScreen />;
  }

  const films = fetchedFilms.data as Film[];

  const currentFilm = getFilmById(films, Number(id));
  const currentComments = fetchedComments.data as Comment[];
  const similarFilms = getSimilarFilms(films, Number(id)).slice(0, MAX_SIMILAR_FILMS_COUNT);

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
