import PageFooter from '../page-footer/page-footer';
import { useParams } from 'react-router-dom';
import type { Comment, Film, ParamsWithId } from '../../types/types';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import FullFilmCard from '../full-film-card/full-film-card';
import Catalog from '../catalog/catalog';

type FilmsScreenProps = {
  films: Film[],
  getComments: () => Comment[],
}
function FilmScreen({films, getComments}: FilmsScreenProps): JSX.Element {
  const getFilmById = (id: number) => {
    const foundFilm = films.find((film) => film.id === id);

    if (!foundFilm) {
      throw new Error(`Film with id=${id} does not exist`);
    }

    return foundFilm;
  };
  const getSimilarFilms = (id: number) => {
    const referenceFilm = getFilmById(id);
    return films.filter((film) => film.id !== id && film.genre === referenceFilm.genre);
  };
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
