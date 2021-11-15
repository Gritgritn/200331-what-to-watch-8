import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIdParam } from '../../hooks/useIdParams';
import { isFetchError, isFetchNotReady } from '../../utils/fetched-data';
import PageHeader from '../header/header';
import PageTitle from '../title/title';
import Logo from '../logo/logo';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import FilmCardBackground from '../film-card-background/film-card-background';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import UserBlock from '../user-block/user-block';
import AddReviewForm from '../add-review-form/add-review-form';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading/loading';
import { getСurrentFilm } from '../../store/films/films-api-actions';
import { getCurrentFilmData, getCurrentFilmStatus } from '../../store/films/films-selectors';
import { FilmCardBackgroundSize } from '../../constants';

function AddReviewScreen(): JSX.Element {
  const filmId = useIdParam();
  const film = useSelector(getCurrentFilmData);
  const filmStatus = useSelector(getCurrentFilmStatus);
  const dispatch = useDispatch();
  const fetchCurrentFilm = (id: number) => {
    dispatch(getСurrentFilm(id));
  };

  useEffect(() => {
    if (film?.id === filmId) {
      return;
    }

    fetchCurrentFilm(filmId);
  }, [filmId]);

  if (isFetchNotReady(filmStatus)) {
    return <LoadingScreen />;
  }

  if (isFetchError(filmStatus) || !film) {
    return <NotFoundScreen />;
  }

  return (
    <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
      <div className="film-card__header">
        <FilmCardBackground src={film.backgroundImage} alt={film.name} />

        <PageTitle IsHidden>WTW</PageTitle>

        <PageHeader>
          <Logo />
          <Breadcrumbs film={film} />
          <UserBlock />
        </PageHeader>

        <FilmCardPoster src={film.posterImage} alt={`${film.name} poster`} size={FilmCardBackgroundSize.Small} />
      </div>
      <AddReviewForm />

    </section>
  );
}

export default AddReviewScreen;
