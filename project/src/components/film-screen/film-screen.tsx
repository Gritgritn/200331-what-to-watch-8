import PageFooter from '../page-footer/page-footer';
import { useParams } from 'react-router-dom';
import type { CommentGet, Film, ParamsWithId } from '../../types/types';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import FullFilmCard from '../full-film-card/full-film-card';
import Catalog from '../catalog/catalog';

type FilmsScreenProps = {
  getFilmById: (id: number) => Film,
  getSimilarFilms: (id: number) => Film[],
  getComments: () => CommentGet[],
}
function FilmScreen({getFilmById, getSimilarFilms, getComments}: FilmsScreenProps): JSX.Element {
  const { id } = useParams() as ParamsWithId;
  const film = getFilmById(Number(id));
  const similarFilms = getSimilarFilms(Number(id));
  return (
    <>
      <FullFilmCard film={film} comments={getComments()} />

      <div className="page-content">
        <Catalog title="More like this" likeThis>
          <CatalogFilmsList films={similarFilms}/>
        </Catalog>

        <PageFooter />
      </div>
    </>
  );
}
export default FilmScreen;
