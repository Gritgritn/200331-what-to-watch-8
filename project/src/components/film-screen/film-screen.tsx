import PageFooter from '../page-footer/page-footer';
import { useParams } from 'react-router-dom';
import type { Comment, Film, ParamsWithId } from '../../types/types';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import FullFilmCard from '../full-film-card/full-film-card';
import Catalog from '../catalog/catalog';
import PageContent from '../page-content/page-content';
import { getFilmById, getSimilarFilms } from '../../utils/common';

type FilmsScreenProps = {
  films: Film[],
  comments: Comment[],
}
function FilmScreen({films, comments}: FilmsScreenProps): JSX.Element {

  const { id } = useParams() as ParamsWithId;
  const film = getFilmById(films, Number(id));
  const similarFilms = getSimilarFilms(films, Number(id));
  return (
    <>
      <FullFilmCard film={film} comments={comments} />

      <PageContent>
        <Catalog title="More like this" likeThis>
          <CatalogFilmsList films={similarFilms}/>
        </Catalog>

        <PageFooter />
      </PageContent>
    </>
  );
}
export default FilmScreen;
