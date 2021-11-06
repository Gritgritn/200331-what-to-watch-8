import { useParams } from 'react-router-dom';
import FilmCardBackground from '../film-card-background/film-card-background';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import AddReviewForm from '../add-review-form/add-review-form';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import {FilmCardBackgroundSize} from '../../constants';
import type { Film, ParamsWithId, State } from '../../types/types';
import PageTitle from '../title/title';
import PageHeader from '../header/header';
import { getFilmById } from '../../utils/common';
import { connect, ConnectedProps } from 'react-redux';
import { isFetchError, isFetchNotReady } from '../../utils/fetched-data';
import LoadingScreen from '../loading/loading';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const mapStateToProps = ({films}: State) => ({
  fetchedFilms: films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReviewScreen({fetchedFilms}: PropsFromRedux): JSX.Element {
  const { id } = useParams() as ParamsWithId;

  if (isFetchNotReady(fetchedFilms)) {
    return <LoadingScreen />;
  }

  if (isFetchError(fetchedFilms)) {
    return <NotFoundScreen />;
  }

  const films = fetchedFilms.data as Film[];
  const currentFilm = getFilmById(films, Number(id));
  return (
    <section className="film-card film-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
      <div className="film-card__header">
        <FilmCardBackground src={currentFilm.backgroundImage} alt={currentFilm.name} />

        <PageTitle IsHidden>WTW</PageTitle>

        <PageHeader>
          <Logo />
          <Breadcrumbs film={currentFilm} />
          <UserBlock />
        </PageHeader>

        <FilmCardPoster src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} size={FilmCardBackgroundSize.Small} />
      </div>
      <AddReviewForm />

    </section>
  );
}

export { AddReviewScreen };
export default connector(AddReviewScreen);
