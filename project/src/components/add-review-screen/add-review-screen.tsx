import { useParams } from 'react-router-dom';
import FilmCardBackground from '../film-card-background/film-card-background';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import AddReviewForm from '../add-review-form/add-review-form';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import {FilmCardBackgroundSize} from '../../constants';
import type { Film, ParamsWithId } from '../../types/types';

type AddReviewScreenProps = {
  films: Film[],
}

function AddReviewScreen({films}: AddReviewScreenProps): JSX.Element {
  const getFilmById = (id: number) => {
    const foundFilm = films.find((film) => film.id === id);

    if (!foundFilm) {
      throw new Error(`Film with id=${id} does not exist`);
    }

    return foundFilm;
  };
  const { id } = useParams() as ParamsWithId;
  const film = getFilmById(Number(id));

  return (
    <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
      <div className="film-card__header">
        <FilmCardBackground src={film.backgroundImage} alt={film.name} />

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <Breadcrumbs film={film} />
          <UserBlock />
        </header>

        <FilmCardPoster src={film.posterImage} alt={`${film.name} poster`} size={FilmCardBackgroundSize.Small} />
      </div>
      <AddReviewForm />

    </section>
  );
}

export default AddReviewScreen;
export type {AddReviewScreenProps};
