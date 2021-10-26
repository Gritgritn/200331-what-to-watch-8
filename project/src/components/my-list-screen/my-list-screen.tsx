import Logo from '../logo/logo';
import type { Film } from '../../types/types';
import UserBlock from '../user-block/user-block';
import FilmCardsList from '../catalog-films-list/catalog-films-list';
import PageFooter from '../page-footer/page-footer';
import Catalog from '../catalog/catalog';

type MyListScreenProps = {
  getFavoriteFilms: () => Film[],
}

function MyListScreen({getFavoriteFilms}: MyListScreenProps): JSX.Element {
  const favoriteFilms = getFavoriteFilms();
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <UserBlock />
      </header>

      <Catalog hiddenTitle="Catalog">

        <FilmCardsList films={favoriteFilms} />
      </Catalog>

      <PageFooter />
    </div>
  );
}

export default MyListScreen;
export type {MyListScreenProps};
