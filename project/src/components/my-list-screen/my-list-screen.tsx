import Logo from '../logo/logo';
import type { Film } from '../../types/types';
import UserBlock from '../user-block/user-block';
import FilmCardsList from '../catalog-films-list/catalog-films-list';
import PageFooter from '../page-footer/page-footer';
import Catalog from '../catalog/catalog';
import PageTitle from '../title/title';
import PageHeader from '../header/header';

type MyListScreenProps = {
  films: Film[],
}

function MyListScreen({films}: MyListScreenProps): JSX.Element {
  const getFavoriteFilms = () => films.filter((film) => film.isFavorite);
  const favoriteFilms = getFavoriteFilms();
  return (
    <div className="user-page">
      <PageHeader className="user-page__head">
        <Logo />
        <PageTitle className="user-page__title">My list</PageTitle>
        <UserBlock />
      </PageHeader>

      <Catalog hiddenTitle="Catalog">

        <FilmCardsList films={favoriteFilms} />
      </Catalog>

      <PageFooter />
    </div>
  );
}

export default MyListScreen;
export type {MyListScreenProps};
